import { useState, useEffect } from 'react'
import style from './ButtonScroll.module.css'

const ButtonScroll = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setShowScrollButton(currentScrollPos > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {showScrollButton && (
                <button onClick={scrollToTop} className={style.button}>
                    <svg className={style.svg} viewBox="0 0 384 512">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
                </button>
            )}
        </div>
    )
}

export default ButtonScroll;
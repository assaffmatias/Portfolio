import style from './NavBar.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavBar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 100;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={`${style.container} ${!visible ? style.hidden : ''}`}>
            <div className={style.logoContainer}>
                <img src={logo} alt="" className={style.logo} />
            </div>
            <div className={style.linkContainer}>
                <a href='#home' className={style.link}>Home</a>
                <a href='#about' className={style.link}>About</a>
                <a href='#works' className={style.link}>Works</a>
                <a href='#skills' className={style.link}>Skills</a>
                <a href='#contact' className={style.link}>Contact</a>
                <div>
                    <Link className={style.link_i}>ES</Link>
                    <Link className={style.link_i}>EN</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
import style from './NavBar.module.css'
import logo from '../../assets/logo.png'
import nav from '../../assets/nav-menu.svg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const NavBar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 500;

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
                <a href='#home' className={style.link} onClick={(e) => handleClick(e, '#home')}>{t('home')}</a>
                <a href='#about' className={style.link} onClick={(e) => handleClick(e, '#about')}>{t('about')}</a>
                <a href='#skills' className={style.link} onClick={(e) => handleClick(e, '#skills')}>{t('skills')}</a>
                <a href='#works' className={style.link} onClick={(e) => handleClick(e, '#works')}>{t('works')}</a>
                <a href='#contact' className={style.link} onClick={(e) => handleClick(e, '#contact')}>{t('contact')}</a>
                <div className={style.leng}>
                    <Link className={style.link_i} onClick={() => changeLanguage('es')}>ES</Link>
                    <Link className={style.link_i} onClick={() => changeLanguage('en')} >EN</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
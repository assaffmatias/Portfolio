import style from './NavBar.module.css'
import logo from '../../assets/logo.png'
import nav from '../../assets/nav-menu.svg'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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

    const handleClickMobile = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false)
        }
    };

    const isHomeRoute = location.pathname !== '/';

    if (isHomeRoute) {
        return null;
    }

    return (
        <div className={style.container}>
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

            <div className={style.navMobile}>
                {isMenuOpen ? (
                    <div className={style.menuOpen}>
                        <div className={style.buttonContainer}>
                            <button className={style.button} onClick={toggleMenu}>✘</button>
                        </div>
                        <div className={style.linkMobileContainer}>
                            <div>
                                <Link className={style.linkMobile_i} onClick={() => changeLanguage('es')}>ES</Link>
                                <Link className={style.linkMobile_i} onClick={() => changeLanguage('en')} >EN</Link>
                            </div>
                            <Link to='#home' className={style.linkMobile} onClick={(e) => handleClickMobile(e, '#home')}>{t('home')}</Link>
                            <Link to='#about' className={style.linkMobile} onClick={(e) => handleClickMobile(e, '#about')}>{t('about')}</Link>
                            <Link to='#skills' className={style.linkMobile} onClick={(e) => handleClickMobile(e, '#skills')}>{t('skills')}</Link>
                            <Link to='#works' className={style.linkMobile} onClick={(e) => handleClickMobile(e, '#works')}>{t('works')}</Link>
                            <Link to='#contact' className={style.linkMobile} onClick={(e) => handleClickMobile(e, '#contact')}>{t('contact')}</Link>
                        </div>
                    </div>
                ) : (
                    <img src={nav} alt="Menu" className={style.burger} onClick={toggleMenu} />
                )}
            </div>
        </div>
    )
}

export default NavBar
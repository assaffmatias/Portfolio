import styles from './NavBar.module.css'
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();

    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const email = 'matias.assaff98@gmail.com'
    const url = `mailto:${email}`

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        const checkbox = document.getElementById('hamburgerCheckbox');
        if (checkbox) {
            checkbox.checked = !isMenuOpen;
        }
    };

    const lengButton = (value) => {
        i18n.changeLanguage(value);
    }

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    const currentLanguage = i18n.language || 'en';

    return (
        <nav className={`${styles.container} ${pathname === '/' ? styles.containerHome : ''}`}>
            <div className={styles.mainContent}>
                <div className={`${styles.navigationContainer} ${isMenuOpen ? styles.navigationContainerAnimation : ''}`}>
                    <Link to={'/'} className={styles.linkNavigation} onClick={toggleMenu}>
                        <svg className={styles.svgNavigation} aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none"><path opacity=".2" d="M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z" fill="currentColor"></path><path d="M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z" fill="currentColor"></path></svg>
                    </Link>
                    <Link to={'/about'} className={styles.linkNavigation} onClick={toggleMenu}>
                    <svg className={styles.svgNavigation} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10-4.478-10-10.001C1.999 6.477 6.476 1.999 12 1.999Z" opacity=".2"></path><path fill="currentColor" d="M12.001 6.5a1.252 1.252 0 1 0 .002 2.503A1.252 1.252 0 0 0 12 6.5h.001Zm-.005 3.749a1 1 0 0 0-.992.885l-.007.116.004 5.502.006.117a1 1 0 0 0 1.987-.002L13 16.75l-.004-5.501-.007-.117a1 1 0 0 0-.994-.882l.001-.001Z"></path></svg>
                    </Link>
                    <Link to={'/portfolio'} className={styles.linkNavigation} onClick={toggleMenu}>
                        <svg className={styles.svgNavigation}  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M14 3a3 3 0 0 1 3 3h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3a3 3 0 0 1 3-3h4Z" opacity=".2"></path><path fill="currentColor" d="M14 5h-4a1 1 0 0 0-.993.883L9 6h6a1 1 0 0 0-.883-.993L14 5Zm5 5H5a1 1 0 0 0-.117 1.993L5 12h6v1a1 1 0 0 0 1.993.117L13 13v-1h6a1 1 0 0 0 .117-1.993L19 10Z" ></path></svg>
                    </Link>
                    <Link className={styles.linkNavigation} onClick={changeLanguage}>
                    <svg className={styles.svgNavigation} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m12 22-1-3H4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 17V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 2h6l.875 3H20c.583 0 1.063.187 1.438.562.375.375.562.855.562 1.438v13a1.97 1.97 0 0 1-.562 1.413c-.375.391-.855.587-1.438.587h-8Z" opacity=".2"></path><path fill="currentColor" d="M13 21h7c.3 0 .542-.096.725-.288A.99.99 0 0 0 21 20V7c0-.3-.092-.542-.275-.725C20.542 6.092 20.3 6 20 6h-8.825l1.175 4.05h1.975V9h1.025v1.05H19v1.025h-1.275a7.985 7.985 0 0 1-.75 1.85A9.76 9.76 0 0 1 15.8 14.6l2.725 2.675L17.8 18l-2.7-2.7-.9.925L15 19l-2 2Z"></path><path fill="currentColor" d="M15.1 13.825c.467-.55.821-1.075 1.063-1.575.241-.5.404-.892.487-1.175h-3.975l.3 1.05h1c.133.25.292.521.475.813.183.291.4.587.65.887ZM13.85 15.1l.55-.525a15.697 15.697 0 0 1-.637-.825 13.47 13.47 0 0 1-.563-.85l.65 2.2Zm-6.7-.5c1.15 0 2.096-.37 2.838-1.112.741-.742 1.112-1.705 1.112-2.888a4.98 4.98 0 0 0-.012-.363 1.732 1.732 0 0 0-.063-.337h-3.95v1.55H9.3a1.908 1.908 0 0 1-.763 1.087c-.375.259-.829.388-1.362.388-.65 0-1.208-.233-1.675-.7-.467-.467-.7-1.042-.7-1.725s.233-1.258.7-1.725a2.285 2.285 0 0 1 1.675-.7c.3 0 .583.054.85.162.267.109.508.271.725.488L9.975 7.55c-.35-.367-.77-.65-1.262-.85a4.11 4.11 0 0 0-1.563-.3c-1.117 0-2.07.396-2.862 1.187C3.496 8.379 3.1 9.35 3.1 10.5s.396 2.12 1.188 2.912c.791.792 1.745 1.188 2.862 1.188Z"></path></svg>
                    </Link>
                </div>
                <Link to={'/'} className={`${styles.logoContainer} ${!isMenuOpen ? styles.logoAnimation : ''}`} id="logoLink">
                    <img src={logo} alt="" className={styles.logo} />
                </Link>
                <div className={styles.linkContainer}>
                    <Link className={`${styles.link} ${pathname === '/' ? styles.linkCurrent : ''}`} to={'/'}>{t('home')}</Link>
                    <Link className={`${styles.link} ${pathname === '/about' ? styles.linkCurrent : ''}`} to={'/about'}>{t('about')}</Link>
                    <Link className={`${styles.link} ${pathname === '/portfolio' ? styles.linkCurrent : ''}`} to={'/portfolio'}>{t('portfolio')}</Link>
                    <div className={styles.buttonLengContainer}>
                        <button className={`${styles.buttonLeng} ${currentLanguage === 'es' ? styles.buttonLengSelected : ''}`} onClick={() => lengButton('es')}>ES</button>
                        <button className={`${styles.buttonLeng} ${currentLanguage === 'en' ? styles.buttonLengSelected : ''}`} onClick={() => lengButton('en')}>EN</button>
                    </div>
                    <Link to={'https://calendly.com/assaffmatias'} target='_blank' className={styles.linkMeet}>Calendly</Link>
                </div>
                <label className={styles.hamburger}>
                    <input id="hamburgerCheckbox" type="checkbox" onChange={toggleMenu} className={styles.inputHamburger} />
                    <svg viewBox="0 0 32 32" className={styles.svgHamburger}>
                        <path className={`${styles.line} ${styles.lineTopBottom}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className={styles.line} d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>
        </nav>
    )
}

export default NavBar
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
                        <svg className={styles.svgNavigation} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link to={'/about'} className={styles.linkNavigation} onClick={toggleMenu}>
                        <svg className={styles.svgNavigation} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link to={'/portfolio'} className={styles.linkNavigation} onClick={toggleMenu}>
                        <svg className={styles.svgNavigation} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link className={styles.linkNavigation} onClick={changeLanguage}>
                        <svg className={styles.svgNavigation} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 5h7" />
                            <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
                            <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
                            <path d="M12 20l4 -9l4 9" />
                            <path d="M19.1 18h-6.2" />
                        </svg>
                    </Link>
                </div>
                <Link to={'/'} className={`${styles.logoContainer} ${!isMenuOpen ? styles.logoAnimation : ''}`} id="logoLink">
                    <img src={logo} alt="" className={styles.logo} />
                </Link>
                <div className={styles.linkContainer}>
                    <Link className={`${styles.link} ${pathname === '/' ? styles.linkCurrent : ''}`} to={'/'}>{t('home')}</Link>
                    <Link className={`${styles.link} ${pathname === '/about' ? styles.linkCurrent : ''}`} to={'/about'}>{t('about')}</Link>
                    <Link className={`${styles.link} ${pathname === '/portfolio' ? styles.linkCurrent : ''}`} to={'/portfolio'}>{t('portfolio')}</Link>
                    <Link className={styles.link} onClick={changeLanguage}>
                        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 5h7" />
                            <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
                            <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
                            <path d="M12 20l4 -9l4 9" />
                            <path d="M19.1 18h-6.2" />
                        </svg>
                    </Link>
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
import styles from './NavBar.module.css'
import logo from '../../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { pathname } = useLocation();

    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    const currentLanguage = i18n.language || 'en';

    const scroll = () => {
        window.scrollTo({
            top: 0,
          });
    }

    return (
        <nav className={styles.container}>
            <div className={styles.main_content}>
                <Link className={styles.link} to={'/'} onClick={scroll}>
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.25" d="M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z" fill="currentColor"></path><path d="M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z" fill="currentColor"></path></svg>
                </Link>
                <Link className={styles.link} to={'/work'} onClick={scroll}>
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 20C8 19.4477 8.44772 19 9 19H15C15.5523 19 16 19.4477 16 20V21C16 22.6569 14.6569 24 13 24H11C9.34315 24 8 22.6569 8 21V20Z" fill="currentColor"></path><path opacity="0.25" d="M20 8C20 10.5264 18.8289 12.7793 17 14.2454V15C17 16.1046 16.1046 17 15 17C10.8358 17 15.5135 17 9 17C7.89543 17 7 16.1046 7 15V14.2454C5.17107 12.7793 4 10.5264 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8Z" fill="currentColor"></path><path d="M10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289C8.90237 8.68342 8.90237 9.31658 9.29289 9.70711L11 11.4142V17H13V11.4142L14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L12 9.58579L10.7071 8.29289Z" fill="currentColor"></path></svg>
                </Link>
                <Link className={styles.link} to={'/about'} onClick={scroll}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10-4.478-10-10.001C1.999 6.477 6.476 1.999 12 1.999Z" opacity=".3"></path><path fill="currentColor" d="M12.001 6.5a1.252 1.252 0 1 0 .002 2.503A1.252 1.252 0 0 0 12 6.5h.001Zm-.005 3.749a1 1 0 0 0-.992.885l-.007.116.004 5.502.006.117a1 1 0 0 0 1.987-.002L13 16.75l-.004-5.501-.007-.117a1 1 0 0 0-.994-.882l.001-.001Z"></path></svg>
                </Link>
                <Link to={'/contact'} className={styles.link} onClick={scroll}>
                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.25" d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.23177 7.35981C5.58534 6.93553 6.2159 6.87821 6.64018 7.23177L11.3598 11.1648C11.7307 11.4738 12.2693 11.4738 12.6402 11.1648L17.3598 7.23177C17.7841 6.87821 18.4147 6.93553 18.7682 7.35981C19.1218 7.78409 19.0645 8.41465 18.6402 8.76822L13.9205 12.7012C12.808 13.6284 11.192 13.6284 10.0794 12.7012L5.35981 8.76822C4.93553 8.41465 4.87821 7.78409 5.23177 7.35981Z" fill="currentColor"></path></svg>
                </Link>
                <Link className={styles.link} onClick={changeLanguage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 24 24" ><path fill="currentColor" d="m12 22-1-3H4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 17V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 2h6l.875 3H20c.583 0 1.063.187 1.438.562.375.375.562.855.562 1.438v13a1.97 1.97 0 0 1-.562 1.413c-.375.391-.855.587-1.438.587h-8Z" opacity=".3"></path><path fill="currentColor" d="M13 21h7c.3 0 .542-.096.725-.288A.99.99 0 0 0 21 20V7c0-.3-.092-.542-.275-.725C20.542 6.092 20.3 6 20 6h-8.825l1.175 4.05h1.975V9h1.025v1.05H19v1.025h-1.275a7.985 7.985 0 0 1-.75 1.85A9.76 9.76 0 0 1 15.8 14.6l2.725 2.675L17.8 18l-2.7-2.7-.9.925L15 19l-2 2Z"></path><path fill="currentColor" d="M15.1 13.825c.467-.55.821-1.075 1.063-1.575.241-.5.404-.892.487-1.175h-3.975l.3 1.05h1c.133.25.292.521.475.813.183.291.4.587.65.887ZM13.85 15.1l.55-.525a15.697 15.697 0 0 1-.637-.825 13.47 13.47 0 0 1-.563-.85l.65 2.2Zm-6.7-.5c1.15 0 2.096-.37 2.838-1.112.741-.742 1.112-1.705 1.112-2.888a4.98 4.98 0 0 0-.012-.363 1.732 1.732 0 0 0-.063-.337h-3.95v1.55H9.3a1.908 1.908 0 0 1-.763 1.087c-.375.259-.829.388-1.362.388-.65 0-1.208-.233-1.675-.7-.467-.467-.7-1.042-.7-1.725s.233-1.258.7-1.725a2.285 2.285 0 0 1 1.675-.7c.3 0 .583.054.85.162.267.109.508.271.725.488L9.975 7.55c-.35-.367-.77-.65-1.262-.85a4.11 4.11 0 0 0-1.563-.3c-1.117 0-2.07.396-2.862 1.187C3.496 8.379 3.1 9.35 3.1 10.5s.396 2.12 1.188 2.912c.791.792 1.745 1.188 2.862 1.188Z"></path></svg>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
import style from './Home.module.css'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Home = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const scrollDown = () => {
        // Encuentra el elemento al que deseas desplazarte
        const aboutSection = document.getElementById('about');
        // Hace scroll hacia el elemento
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className={style.container} id='home'>
            <div className={style.titleContent}>
                <div className={style.greetingContent}>
                    <p className={style.greeting}>👋 {t('greeting')}</p>
                </div>
                <h1 className={style.title}>MATIAS ASSAFF</h1>
                <div className={style.pContent}>
                    <p className={style.p}>{t('im')}</p>
                </div>
                <div className={style.arrow} onClick={scrollDown}>
                    <span className={style.span}></span>
                    <span className={style.span}></span>
                    <span className={style.span}></span>
                </div>
            </div>
        </div>
    )
}

export default Home;
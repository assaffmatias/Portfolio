import style from './Wellcome.module.css'
import { useTranslation } from 'react-i18next';

const Wellcome = () => {
    const { t } = useTranslation();

    const scrollDown = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className={style.container} id='home'>
            <div className={style.titleContent}>
                <div className={style.greetingContent}>
                    <p className={style.greeting}>{t('greeting')}</p>
                </div>
                <h1 className={style.title}>MATIAS ASSAFF</h1>
                <div className={style.pContent}>
                    <p className={style.p}>{t('im')}</p>
                    <p className={style.p}>{t('fullstack')}</p>
                </div>
                <div className={style.arrowContainer} onClick={scrollDown}>
                <svg className={style.svg} viewBox="0 0 384 512" fill="currentColor">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Wellcome;
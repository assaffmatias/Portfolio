import style from './About.module.css'
import aboutES from '../../assets/about-es.png'
import aboutEN from '../../assets/about-en.png'
import aboutMobES from '../../assets/about-es-mob.png'
import aboutMobEN from '../../assets/about-en-mob.png'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const About = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <div className={style.titleContent}>
                    <h2 className={style.title} id='about'>{t('about')}</h2>
                    <hr className={style.hr} />
                </div>
                <div className={style.aboutContent}>
                    {/* <img src={about} alt="" className={style.about} />
                    <img src={aboutmob} alt="" className={style.aboutmob} /> */}
                    {i18n.language === 'en' ? (
                        <>
                            <img src={aboutEN} alt="" className={style.about} />
                            <img src={aboutMobEN} alt="" className={style.aboutmob} />
                        </>
                    ) : (
                        <>
                            <img src={aboutES} alt="" className={style.about} />
                            <img src={aboutMobES} alt="" className={style.aboutmob} />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default About;
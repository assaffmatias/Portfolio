import style from './About.module.css'
import { useTranslation } from 'react-i18next';
import aboutme from '../../assets/aboutme.svg'

const About = () => {
    const { t } = useTranslation();

    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <div className={style.titleContent}>
                    <h2 className={style.title} id='about'>{t('about')}</h2>
                </div>
                <div className={style.aboutContent}>
                    <h5>
                        <span className={style.span}>{t('aboutTitle')}</span>
                    </h5>
                    <div className={style.elementorWidgetContainer}>
                        <div className={style.editorContainer}>
                            <h3 className={style.open}>{'<p>'}</h3>
                            <hr className={style.line} />
                            <h3 className={style.close}>{'</p>'}</h3>
                        </div>
                        <div className={style.elementorHeadingTitle}>
                            <p className={style.p}>{t('aboutP')}</p>
                        </div>
                        <div>
                            <img src={aboutme} alt="" className={style.img} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;
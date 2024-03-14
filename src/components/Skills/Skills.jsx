import style from './Skills.module.css'
import frontend from '../../assets/frontend.svg'
import backend from '../../assets/backend.svg'
import tools from '../../assets/tools.svg'
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();


    return (
        <div className={style.container} id='skills'>
            <div className={style.titleContent}>
                <h2 className={style.title}>{t('skills')}</h2>
            </div>
            <div className={style.mainContent}>
                <div className={style.skillContent}>
                    <div className={style.spanContent}>
                        <img src={frontend} alt="" className={style.svg} />
                        <h5>
                            <span className={style.spanFront}>Frontend</span>
                        </h5>
                    </div>
                    <div className={style.elementorWidgetContainer}>
                        <div className={style.editorContainer}>
                            <h3 className={style.open}>{'<h3>'}</h3>
                            <hr className={style.line} />
                            <h3 className={style.close}>{'</h3>'}</h3>
                        </div>
                        <div className={style.elementorHeadingTitle}>
                            <p className={style.p}>{t('front')}</p>
                        </div>
                    </div>
                </div>
                <div className={style.skillContent}>
                    <div className={style.spanContent}>
                        <img src={backend} alt="" className={style.svg} />
                        <h5>
                            <span className={style.spanBack}>Backend</span>
                        </h5>
                    </div>
                    <div className={style.elementorWidgetContainer}>
                        <div className={style.editorContainer}>
                            <h3 className={style.open}>{'<h3>'}</h3>
                            <hr className={style.line} />
                            <h3 className={style.close}>{'</h3>'}</h3>
                        </div>
                        <div className={style.elementorHeadingTitle}>
                            <p className={style.p}>{t('back')}</p>
                        </div>
                    </div>
                </div>
                <div className={style.skillContent}>
                    <div className={style.spanContent}>
                        <img src={tools} alt="" className={style.svg} />
                        <h5>
                            <span className={style.spanTools}>{t('skillSpan')}</span>
                        </h5>
                    </div>
                    <div className={style.elementorWidgetContainer}>
                        <div className={style.editorContainer}>
                            <h3 className={style.open}>{'<h3>'}</h3>
                            <hr className={style.line} />
                            <h3 className={style.close}>{'</h3>'}</h3>
                        </div>
                        <div className={style.elementorHeadingTitle}>
                            <p className={style.p}>{t('tools')}</p>
                        </div>
                    </div>
                </div>
                <div className={style.phraseContainer}>
                    <div className={style.phraseContent}>
                        <h2 className={style.phrase}>{t('phrase')}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
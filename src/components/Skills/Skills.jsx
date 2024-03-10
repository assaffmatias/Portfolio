import style from './Skills.module.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import next from '../../assets/next.png'
import ts from '../../assets/ts.png'
import git from '../../assets/git.png'
import node from '../../assets/node.png'
import sequelize from '../../assets/sequelize.png'
import postgres from '../../assets/postgres.png'
import frontend from '../../assets/frontend.svg'
import backend from '../../assets/backend.svg'
import tools from '../../assets/tools.svg'
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();


    return (
        <div className={style.container} id='skills'>
            <div>
                <h2 className={style.title}>{t('skills')}</h2>
                <hr className={style.hr} />
            </div>
            <div className={style.mainContent}>
                <div className={style.skillContent}>
                    <div className={style.spanContent}>
                        <img src={frontend} alt="" className={style.svg} />
                        <h5>
                            <span className={style.spanFront}>Frontend</span>
                        </h5>
                    </div>
                    <div className={style.imgContainer}>
                        <div className={style.imgContent}>
                            <img src={html} alt="" className={style.img} />
                            <p className={style.p}>HTML</p>
                        </div>
                        <div className={style.imgContent}>
                            <img src={css} alt="" className={style.img} />
                            <p className={style.p}>CSS</p>
                        </div>
                        <div className={style.imgContent}>
                            <img src={js} alt="" className={style.img} />
                            <p className={style.p}>JavaScript</p>
                        </div>
                        <div className={style.imgContent}>
                            <img src={ts} alt="" className={style.img} />
                            <p className={style.p}>TypeScript</p>
                        </div>
                        <div className={style.imgContent}>
                            <img src={react} alt="" className={style.img} />
                            <p className={style.p}>React</p>
                        </div>
                        <div className={style.imgContent}>
                            <img src={redux} alt="" className={style.img} />
                            <p className={style.p}>Redux</p>
                        </div>
                        <div className={style.imgContent}>
                            <img src={next} alt="" className={style.imgNext} />
                            <p className={style.p}>Next JS</p>
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
                    <div className={style.imgContainer}>
                        <div className={style.imgContent}>
                            <img src={node} alt="" className={style.img} />
                            <p className={style.p}>Node JS</p>
                        </div>
                        <div className={style.imgContent}>
                            <img src={sequelize} alt="" className={style.img} />
                            <p className={style.p}>Sequelize</p>
                        </div>
                        <div className={style.imgContent}>
                            <img src={postgres} alt="" className={style.img} />
                            <p className={style.p}>PostgreSQL</p>
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
                    <div className={style.imgContainer}>
                        <div className={style.imgContent}>
                            <img src={git} alt="" className={style.img} />
                            <p className={style.p}>GIT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
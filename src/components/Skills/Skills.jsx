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
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Skills = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={style.container}  id='skills'>
            <div>
                <h2 className={style.title}>{t('skills')}</h2>
                <hr className={style.hr} />
            </div>
            <div className={style.mainContent}>
                <div className={style.logoContent}>
                    <img src={html} alt="" className={style.logo}/>
                    <h3>HTML</h3>
                </div>
                <div className={style.logoContent}>
                    <img src={css} alt="" className={style.logo}/>
                    <h3>CSS</h3>
                </div>
                <div className={style.logoContent}>
                    <img src={js} alt="" className={style.logo}/>
                    <h3>JavaScript</h3>
                </div>
                <div className={style.logoContent}>
                    <img src={ts} alt="" className={style.logo}/>
                    <h3>TypeScript</h3>
                </div>
                <div className={style.logoContent}>
                    <img src={react} alt="" className={style.logo}/>
                    <h3>React</h3>
                </div>
                <div className={style.logoContent}>
                    <img src={redux} alt="" className={style.logo}/>
                    <h3>Redux</h3>
                </div>
                <div className={style.logoContent}>
                    <img src={next} alt="" className={style.logo}/>
                    <h3>Next JS</h3>
                </div>
                <div className={style.logoContent}>
                    <img src={git} alt="" className={style.logo}/>
                    <h3>GIT</h3>
                </div>
                <div className={style.logoContent}>
                    <img src={node} alt="" className={style.logo}/>
                    <h3>Node JS</h3>
                </div>
                <div className={style.logoContent}>
                    <img src={sequelize} alt="" className={style.logo}/>
                    <h3>Sequelize</h3>
                </div>
                <div className={style.logoContent}>
                    <img src={postgres} alt="" className={style.logo}/>
                    <h3>PostgreSQL</h3>
                </div>
            </div>
        </div>
    )
}

export default Skills
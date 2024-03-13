import style from './Formula1.module.css';
import image from '../../assets/driversapi.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Formula1 = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={style.container}>
            <div className={style.backContent}>
                <div>
                <Link to={'/'}>
                    <svg className={style.svgBack} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                </Link>
                </div>
                <div>
                    <Link className={style.link_i} onClick={() => changeLanguage('es')}>ES</Link>
                    <Link className={style.link_i} onClick={() => changeLanguage('en')} >EN</Link>
                </div>
            </div>
            <div className={style.titleContent}>
                <h3 className={style.h3}>Web Development ·</h3>
                <h1 className={style.h1}>Drivers API</h1>
                <p className={style.p}>{t('driversDescription')}</p>
                <div className={style.techContent}>
                    <button className={style.tech}>Javascript</button>
                    <button className={style.tech}>React</button>
                    <button className={style.tech}>Redux</button>
                    <button className={style.tech}>Express</button>
                    <button className={style.tech}>PostgreSQL</button>
                </div>
                <Link className={style.link} to={'https://driversapi.vercel.app/'} target="_blank">
                {t('openProject')}
                    <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>
            <div className={style.imgContainer}>
                <img src={image} alt="" className={style.img} />
            </div>
        </div>
    )
}

export default Formula1;
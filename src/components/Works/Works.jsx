import style from './Works.module.css'
import driversapi from '../../assets/driversapi.png'
import rickandmorty from '../../assets/rickandmorty.png'
import innovatech from '../../assets/innovatech.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Works = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={style.container} id='works'>
            <div>
                <h2 className={style.title}>{t('works')}</h2>
                <hr className={style.hr} />
            </div>
            <div className={style.cardsContainer}>
            <Link className={style.cardContent} to={'https://innovatechok.vercel.app/'} target="_blank">
                    <img src={innovatech} alt="" className={style.img} />
                    <div className={style.dataContent}>
                        <h3 className={style.workTitle}>Innova Tech</h3>
                        <h3 className={style.webDev}>{t('development')}</h3>
                        <h3 className={style.show}>{t('show')}</h3>
                    </div>
                </Link>
                <Link className={style.cardContent} to={'https://driversapi.vercel.app/'} target="_blank">
                    <img src={driversapi} alt="" className={style.img} />
                    <div className={style.dataContent}>
                        <h3 className={style.workTitle}>Drivers API</h3>
                        <h3 className={style.webDev}>{t('development')}</h3>
                        <h3 className={style.show}>{t('show')}</h3>
                    </div>
                </Link>
                <Link className={style.cardContent} to={'https://api-of-rickandmorty.vercel.app/'} target="_blank">
                    <img src={rickandmorty} alt="" className={style.img} />
                    <div className={style.dataContent}>
                        <h3 className={style.workTitle}>Rick & Morty</h3>
                        <h3 className={style.webDev}>{t('development')}</h3>
                        <h3 className={style.show}>{t('show')}</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Works
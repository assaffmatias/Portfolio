import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RickAndMorty = () => {
    const { t } = useTranslation();

    const scroll = () => {
        window.scrollTo({
            top: 0,
          });
    }

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1 className={styles.title}>Rick & Morty</h1>
                <Link className={styles.view_button} to={'https://api-of-rickandmorty.vercel.app/'} target='_blank'>{t('view')}</Link>
            </div>
            <div className={styles.image_container}>
                <img src="https://res.cloudinary.com/dth5pbvch/image/upload/v1721964648/rym-mockup_jdjtfj.png" alt="" className={styles.image} />
            </div>
            <div className={styles.data_content}>
                <h3 className={styles.h3}>{t('whatIsItAbout')}</h3>
                <p>{t('rickAndMortyDescription')}</p>
                <h3 className={styles.h3}>{t('madeWith')}</h3>
                <p>JavaScript, React, Redux, HTML, CSS, Node.js, Express, Sequelize, PostgreSQL.</p>
            </div>
            <Link className={styles.visit_button} to={'https://api-of-rickandmorty.vercel.app/'} target='_blank'>{t('visitProject')}</Link>
        </div>
    )
}

export default RickAndMorty;
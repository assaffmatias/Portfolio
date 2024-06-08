import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DriversApi = () => {
    const { t } = useTranslation();

    const scroll = () => {
        window.scrollTo({
            top: 0,
          });
    }

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1 className={styles.title}>Formula 1</h1>
                <Link className={styles.view_button} to={'https://driversapi.vercel.app/'} target='_blank'>{t('view')}</Link>
            </div>
            <div className={styles.image_container}>
                <img src="https://res.cloudinary.com/dth5pbvch/image/upload/v1717860543/2_pqo3w4.jpg" alt="" className={styles.image} />
            </div>
            <div className={styles.data_content}>
                <h3 className={styles.h3}>{t('whatIsItAbout')}</h3>
                <p>{t('driversApiDescription')}</p>
                <h3 className={styles.h3}>{t('madeWith')}</h3>
                <p>JavaScript, React, Redux, HTML, CSS, Node.js, Express, Sequelize, PostgreSQL.</p>
            </div>
            <Link className={styles.visit_button} to={'https://driversapi.vercel.app/'} target='_blank'>{t('visitProject')}</Link>
        </div>
    )
}

export default DriversApi;
import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import image from '../assets/pictures/innova-tech.svg';

const InnovaTech = () => {
    const { t } = useTranslation();

    const scroll = () => {
        window.scrollTo({
            top: 0,
          });
    }

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1 className={styles.title}>Innova Tech</h1>
                <Link className={styles.view_button} to={'https://innovatechok.vercel.app/'} target='_blank'>{t('view')}</Link>
            </div>
            <div className={styles.image_container}>
                <img src={image} alt="" className={styles.image} />
            </div>
            <div className={styles.data_content}>
                <h3 className={styles.h3}>{t('whatIsItAbout')}</h3>
                <p>{t('innovaTechDescription')}</p>
                <h3 className={styles.h3}>{t('madeWith')}</h3>
                <p>JavaScript, React, Redux, HTML, CSS, Cloudinary, LocalStorage, Mercado Pago, Node.js, Express, Sequelize, Passport, PostgreSQL.</p>
                {/* <Link className={styles.visit_button} to={'https://innovatechok.vercel.app/'} target='_blank'>{t('visitProject')}</Link> */}
            </div>
        </div>
    )
}

export default InnovaTech;
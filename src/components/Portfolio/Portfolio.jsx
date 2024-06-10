import styles from './Portfolio.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const { t } = useTranslation();

    const scroll = () => {
        window.scrollTo({
            top: 0,
          });
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t('portfolio')}</h1>
            <div className={styles.box_container}>
                <Link className={styles.box_content} to={'/work/innova-tech'} onClick={scroll}>
                    <div className={styles.image_container}>
                        <img src="https://res.cloudinary.com/dth5pbvch/image/upload/v1717973607/3_rn0nst.jpg" alt="" className={styles.image} />
                    </div>
                    <h3 className={styles.box_title}>Innova Tech</h3>
                    <p className={styles.box_description}>{t('webDevelopment')} • 2024</p>
                </Link>
                <Link className={styles.box_content} to={'/work/drivers-api'} onClick={scroll}>
                    <div className={styles.image_container}>
                        <img src="https://res.cloudinary.com/dth5pbvch/image/upload/v1717973607/2_hvcutd.jpg" alt="" className={styles.image} />
                    </div>
                    <h3 className={styles.box_title}>Formula 1</h3>
                    <p className={styles.box_description}>{t('webDevelopment')} • 2023</p>
                </Link>
                <Link className={styles.box_content} to={'/work/rick-and-morty'} onClick={scroll}>
                    <div className={styles.image_container}>
                        <img src="https://res.cloudinary.com/dth5pbvch/image/upload/v1717973607/1_cwpgcy.jpg" alt="" className={styles.image} />
                    </div>
                    <h3 className={styles.box_title}>Rick & Morty</h3>
                    <p className={styles.box_description}>{t('webDevelopment')} • 2023</p>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio;
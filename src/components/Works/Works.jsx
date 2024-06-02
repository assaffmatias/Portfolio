import styles from './Works.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import image from '../../assets/pictures/gitHub.png'

const Works = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.mainContent}>
                    <div className={styles.titleContent}>
                        <h2 className={styles.title} id='about'>{t('portfolioTitle')}</h2>
                        <h4 className={styles.subtitle}>{t('portfolioSubtitle')}</h4>
                        <p className={styles.description}>{t('portfolioDescription')}</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={image} alt="" className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;
import styles from './AboutMe.module.css';
import { useTranslation } from 'react-i18next';
import photo from '../../assets/pictures/photo.png';
import PicturesAbout from '../PicturesAbout/PicturesAbout';

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.mainContent}>
                    <div className={styles.titleContent}>
                        <h2 className={styles.titleAbout} id='about'>{t('aboutTitle')}</h2>
                        <h4 className={styles.subtitle}>{t('aboutSubtitle')}</h4>
                        <p className={styles.description}>{t('aboutDescription')}</p>
                    </div>
                    <div className={styles.photoContainer}>
                        <img src={photo} alt="" className={styles.photo} />
                    </div>
                </div>
               <PicturesAbout />
            </div>
        </div>
    )
}

export default AboutMe;
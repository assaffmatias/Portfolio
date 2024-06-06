import styles from './AboutMe.module.css';
import { useTranslation } from 'react-i18next';
import photo from '../../assets/pictures/photo.svg';
import laptop from '../../assets/pictures/laptop.svg';

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Matias Assaff</h1>
            <div className={styles.photo_container}>
                <img src={photo} alt="" className={styles.photo} />
            </div>
            <h3 className={styles.subtitle}>{t('aboutSubtitle')}</h3>
            <p className={styles.description}>{t('aboutDescription')}</p>
            <div className={styles.numbers_content}>
                <div className={styles.number_box}>
                    <h3 className={styles.number}>2</h3>
                    <p className={styles.number_ref}>{t('yearsDev')}</p>
                </div>
                <div className={styles.number_box}>
                    <h3 className={styles.number}>4</h3>
                    <p className={styles.number_ref}>{t('fullProj')}</p>
                </div>
                <div className={styles.number_box}>
                    <h3 className={styles.number}>10</h3>
                    <p className={styles.number_ref}>{t('masterTech')}</p>
                </div>
            </div>
            <h3 className={styles.vision_title}>{t('moreAbout')}</h3>
            <div className={styles.vision_content}>
                <div className={styles.vision_box}>
                    <h4 className={styles.box_title}>{t('expertise')}</h4>
                    <p className={styles.box_p}>{t('expertiseText')}</p>
                </div>
                <div className={styles.vision_box}>
                <h4 className={styles.box_title}>{t('specialization')}</h4>
                    <p className={styles.box_p}>{t('specializationText')}</p>
                </div>
                <div className={styles.vision_box}>
                    <h4 className={styles.box_title}>{t('goals')}</h4>
                    <p className={styles.box_p}>{t('goalsText')}</p>
                </div>
                <div className={styles.vision_box}>
                    <h4 className={styles.box_title}>{t('present')}</h4>
                    <p className={styles.box_p}>{t('presentText')}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
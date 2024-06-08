import styles from './Main.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import photo from '../../assets/pictures/photo.svg'

const Main = () => {
    const { t } = useTranslation();

    const email = 'matias.assaff98@gmail.com'
    const url = `mailto:${email}`

    return (
        <div className={styles.container} id='home'>
            <div className={styles.title_content}>
                <h1 className={styles.greeting}>{t('mainGreeting')}</h1>
                <div className={styles.photo_container}>
                    <img src={photo} alt="" className={styles.photo} />
                </div>
                <h1 className={styles.name}>Matias.</h1>
            </div>
            <h1 className={styles.subtitle}>{t('mainSubtitle')}</h1>
            <div className={styles.option_container}>
                <Link to={'https://calendly.com/assaffmatias/30min?back=1&month=2024-06'} target='_blank' className={styles.option_box}>
                    <div className={styles.content_box}>
                        <p className={styles.box_option}>A</p>
                        <p className={styles.box_p}>{t('mainOptionA')}</p>
                    </div>
                    <svg className={styles.arrow} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </Link>
                <Link to={'/work'} className={styles.option_box}>
                    <div className={styles.content_box}>
                        <p className={styles.box_option}>B</p>
                        <p className={styles.box_p}>{t('mainOptionB')}</p>
                    </div>
                    <svg className={styles.arrow} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </Link>
                <Link to={'/about'} className={styles.option_box}>
                    <div className={styles.content_box}>
                        <p className={styles.box_option}>C</p>
                        <p className={styles.box_p}>{t('mainOptionC')}</p>
                    </div>
                    <svg className={styles.arrow} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </Link>
            </div>
            <div className={styles.footer_content}>
                <p className={styles.footer_p}>{t('neverMind')}</p>
                <Link to={'/contact'} className={styles.footer_link}>
                     {t('sayHi')}
                    <div className={styles.loader}></div>
                </Link>
            </div>

        </div>
    )
}

export default Main;
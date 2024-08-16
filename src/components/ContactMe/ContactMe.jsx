import styles from './ContactMe.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ContactMe = () => {
    const { t } = useTranslation();

    const email = 'matias.assaff98@gmail.com'
    const url = `mailto:${email}`

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t('contactTitle')}</h1>
            <p className={styles.subtitle}>{t('contactSubtitle')}</p>
            <div className={styles.box_container}>
                <div className={styles.photo_container}>
                    <img src="https://res.cloudinary.com/dth5pbvch/image/upload/v1717860874/photo_x6sg4f.jpg" alt="" className={styles.photo} />
                </div>
                <h3 className={styles.name}>Matias Assaff</h3>
                <p className={styles.name_subtitle}>Front-End & App Developer</p>
                <div className={styles.link_container}>
                    <Link className={styles.link} to={url} target='_blank'>{t('email')}</Link>
                    <Link className={styles.link} to={'https://calendly.com/assaffmatias'} target='_blank'>{t('meeting')}</Link>
                    <Link className={styles.link} to={'https://wa.me/5493816657350?text=Hi Matias, how are you?'} target='_blank' >WhatsApp</Link>
                </div>
            </div>
            <div className={styles.social_container}>
                <Link className={styles.social_link} to={'https://twitter.com/AssaffMatias'} target='_blank'>
                    Twitter
                    <div className={styles.loader}></div>
                </Link>
                <Link className={styles.social_link} to={'https://www.linkedin.com/in/assaffmatias/'} target='_blank'>
                    LinkedIn
                    <div className={styles.loader}></div>
                </Link>
                <Link className={styles.social_link} to={'https://github.com/assaffmatias'} target='_blank' >
                    GitHub
                    <div className={styles.loader}></div>
                </Link>
            </div>
        </div>
    )
}

export default ContactMe;
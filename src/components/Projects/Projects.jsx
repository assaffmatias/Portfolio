import styles from './Projects.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import innovaTech from '../../assets/pictures/innova-tech.svg'
import driversApi from '../../assets/pictures/drivers-api.svg'
import rickAndMorty from '../../assets/pictures/rick-and-morty.svg'

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t('workTitle')}</h1>
            <div className={styles.box_container}>
                <Link className={styles.box_content} to={'https://innovatechok.vercel.app/'} target='_blank' >
                    <div className={styles.image_container}>
                        <img src={innovaTech} alt="" className={styles.image} />
                    </div>
                    <h3 className={styles.box_title}>Innova Tech</h3>
                    <p className={styles.box_description}>Web Development • 2024</p>
                </Link>
                <Link className={styles.box_content} to={'https://driversapi.vercel.app/'} target='_blank'>
                    <div className={styles.image_container}>
                        <img src={driversApi} alt="" className={styles.image} />
                    </div>
                    <h3 className={styles.box_title}>Formula 1</h3>
                    <p className={styles.box_description}>Web Development • 2023</p>
                </Link>
                <Link className={styles.box_content} to={'https://api-of-rickandmorty.vercel.app/'} target='_blank'>
                    <div className={styles.image_container}>
                        <img src={rickAndMorty} alt="" className={styles.image} />
                    </div>
                    <h3 className={styles.box_title}>Rick & Morty</h3>
                    <p className={styles.box_description}>Web Development • 2023</p>
                </Link>
            </div>
        </div>
    )
}

export default Projects;
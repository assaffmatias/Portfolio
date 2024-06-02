import styles from './WorksCard.module.css'
import innovatech from '../../assets/pictures/222shots_so.png'
import driversapi from '../../assets/pictures/308shots_so.png'
import rickandmorty from '../../assets/pictures/834shots_so.png'
import { Link } from 'react-router-dom'

const WorksCard = () => {

    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <Link className={styles.link} to={'https://innovatechok.vercel.app/'} target='_blank'>
                    <img src={innovatech} alt="" className={styles.img} />
                    <div className={styles.glassDiv}>
                        <h1 className={styles.title}>Innova Tech</h1>
                        <h3 className={styles.year}>2024</h3>
                    </div>
                </Link>
                <Link className={styles.link} to={'https://driversapi.vercel.app/'} target='_blank'>
                    <img src={driversapi} alt="" className={styles.img} />
                    <div className={styles.glassDiv}>
                        <h1 className={styles.title}>Formula 1</h1>
                        <h3 className={styles.year}>2023</h3>
                    </div>
                </Link>
                <Link className={styles.link} to={'https://api-of-rickandmorty.vercel.app/'} target='_blank'>
                    <img src={rickandmorty} alt="" className={styles.img} />
                    <div className={styles.glassDiv}>
                        <h1 className={styles.title}>Rick & Morty</h1>
                        <h3 className={styles.year}>2023</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default WorksCard;
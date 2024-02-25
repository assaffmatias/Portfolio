import style from './Works.module.css'
import driversapi from '../../assets/driversapi.png'
import rickandmorty from '../../assets/rickandmorty.png'
import innovatech from '../../assets/innovatech.png'
import { Link } from 'react-router-dom'

const Works = () => {
    return (
        <div className={style.container}>
            <div>
                <h2 className={style.title}>My</h2>
                <h2 className={style.title}>Works</h2>
                <hr className={style.hr} />
            </div>
            <div className={style.cardsContainer}>
                <Link className={style.cardContent} to={'https://driversapi.vercel.app/'} target="_blank">
                    <img src={driversapi} alt="" className={style.img} />
                    <div className={style.dataContent}>
                        <h3 className={style.workTitle}>Drivers API</h3>
                        <h3 className={style.webDev}>Web Development</h3>
                        <h3 className={style.show}>Show project</h3>
                    </div>
                </Link>
                <Link className={style.cardContent} to={'https://api-of-rickandmorty.vercel.app/'} target="_blank">
                    <img src={rickandmorty} alt="" className={style.img} />
                    <div className={style.dataContent}>
                        <h3 className={style.workTitle}>Rick & Morty</h3>
                        <h3 className={style.webDev}>Web Development</h3>
                        <h3 className={style.show}>Show project</h3>
                    </div>
                </Link>
                <Link className={style.cardContent} >
                    <img src={innovatech} alt="" className={style.img} />
                    <div className={style.dataContent}>
                        <h3 className={style.workTitle}>Innova Tech</h3>
                        <h3 className={style.webDev}>Web Development</h3>
                        <h3 className={style.show}>Show project</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Works
import style from './Formula1.module.css';
import image from '../../assets/driversapi.png'
import { Link } from 'react-router-dom';

const Formula1 = () => {
    return (
        <div className={style.container}>
            <div className={style.titleContent}>
                <h3 className={style.h3}>Web Development ·</h3>
                <h1 className={style.h1}>Drivers API</h1>
                <p className={style.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor praesentium commodi incidunt, maxime voluptas, aliquam aperiam voluptatum illum a, eos consectetur nobis soluta amet neque. Quisquam unde illo velit debitis.</p>
                <Link className={style.button} to={'https://driversapi.vercel.app/'} target="_blank">
                    Open project
                    <svg className={style.svg} viewBox="0 0 384 512">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
                </Link>
            </div>
            <div className={style.imgContainer}>
                <img src={image} alt="" className={style.img} />
            </div>
        </div>
    )
}

export default Formula1;
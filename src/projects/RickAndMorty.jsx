import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import image from '../assets/pictures/rick-and-morty.svg';

const RickAndMorty = () => {
    const { t } = useTranslation();

    const scroll = () => {
        window.scrollTo({
            top: 0,
          });
    }

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1 className={styles.title}>Rick & Morty</h1>
                <Link className={styles.view_button} to={'https://api-of-rickandmorty.vercel.app/'} target='_blank'>{t('view')}</Link>
            </div>
            <div className={styles.image_container}>
                <img src={image} alt="" className={styles.image} />
            </div>
            <div className={styles.data_content}>
                <h3 className={styles.h3}>{t('whatIsItAbout')}</h3>
                <p>{t('rickAndMortyDescription')}</p>
                <h3 className={styles.h3}>{t('madeWith')}</h3>
                <p>JavaScript, React, Redux, HTML, CSS, Node.js, Express, Sequelize, PostgreSQL.</p>
            </div>
        </div>
    )
}

export default RickAndMorty;
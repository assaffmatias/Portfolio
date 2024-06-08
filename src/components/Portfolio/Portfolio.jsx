import styles from './Portfolio.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import innovaTech from '../../assets/pictures/innova-tech.svg'
import driversApi from '../../assets/pictures/drivers-api.svg'
import rickAndMorty from '../../assets/pictures/rick-and-morty.svg'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Portfolio = () => {
    const { t } = useTranslation();
    const imgRef = [useRef(null), useRef(null), useRef(null)];

    const scroll = () => {
        window.scrollTo({
            top: 0,
          });
    }

    useEffect(() => {
        imgRef.forEach((ref) => {
            const el = ref.current;
            gsap.fromTo(el, { opacity: 0, translateY: 200 }, { opacity: 1, translateY: 0, duration: .5, scrollTrigger: { trigger: el } })
        });
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t('portfolio')}</h1>
            <div className={styles.box_container}>
                <Link className={styles.box_content_first} to={'/work/innova-tech'} onClick={scroll}>
                    <div className={styles.image_container}>
                        <img src={innovaTech} alt="" className={styles.image} />
                    </div>
                    <h3 className={styles.box_title}>Innova Tech</h3>
                    <p className={styles.box_description}>{t('webDevelopment')} • 2024</p>
                </Link>
                <Link className={styles.box_content} to={'/work/drivers-api'} onClick={scroll} ref={imgRef[1]}>
                    <div className={styles.image_container}>
                        <img src={driversApi} alt="" className={styles.image} />
                    </div>
                    <h3 className={styles.box_title}>Formula 1</h3>
                    <p className={styles.box_description}>{t('webDevelopment')} • 2023</p>
                </Link>
                <Link className={styles.box_content} to={'/work/rick-and-morty'} onClick={scroll} ref={imgRef[2]}>
                    <div className={styles.image_container}>
                        <img src={rickAndMorty} alt="" className={styles.image} />
                    </div>
                    <h3 className={styles.box_title}>Rick & Morty</h3>
                    <p className={styles.box_description}>{t('webDevelopment')} • 2023</p>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio;
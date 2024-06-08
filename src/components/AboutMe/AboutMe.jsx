import styles from './AboutMe.module.css';
import { useTranslation } from 'react-i18next';
import photo from '../../assets/pictures/banner.svg';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
    const { t } = useTranslation();

    const elementRef = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        elementRef.forEach((ref, index) => {
            const el = ref.current;
            let duration = 0.5;
            if (index === 0) {
                duration = 0.5;
            } else if (index === 1) {
                duration = 0.7;
            } else if (index === 2) {
                duration = 0.9;
            }

            gsap.fromTo(el, { opacity: 0, translateY: 200 }, { opacity: 1, translateY: 0, duration: duration, scrollTrigger: { trigger: el } });
        });
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Matias Assaff</h1>
            <div className={styles.photo_container}>
                <img src={photo} alt="" className={styles.photo} />
            </div>
            <h3 className={styles.subtitle}>{t('aboutSubtitle')}</h3>
            <p className={styles.description}>{t('aboutDescription')}</p>
            <div className={styles.numbers_content}>
                <div className={styles.number_box} ref={elementRef[0]} >
                    <h3 className={styles.number}>+1</h3>
                    <p className={styles.number_ref}>{t('yearsDev')}</p>
                </div>
                <div className={styles.number_box} ref={elementRef[1]}>
                    <h3 className={styles.number}>4</h3>
                    <p className={styles.number_ref}>{t('fullProj')}</p>
                </div>
                <div className={styles.number_box} ref={elementRef[2]}>
                    <h3 className={styles.number}>10</h3>
                    <p className={styles.number_ref}>{t('masterTech')}</p>
                </div>
            </div>
            <h3 className={styles.vision_title} ref={elementRef[3]}>{t('moreAbout')}</h3>
            <div className={styles.vision_content} ref={elementRef[4]}>
                <div className={styles.vision_box}>
                    <h4 className={styles.box_title}>{t('knowledge')}</h4>
                    <p className={styles.box_p}>{t('knowledgeText')}</p>
                </div>
                <div className={styles.vision_box}>
                    <h4 className={styles.box_title}>{t('goals')}</h4>
                    <p className={styles.box_p}>{t('goalsText')}</p>
                </div>
                <div className={styles.vision_box}>
                <h4 className={styles.box_title}>{t('ability')}</h4>
                    <p className={styles.box_p}>{t('abilityText')}</p>
                </div>
                <div className={styles.vision_box}>
                    <h4 className={styles.box_title}>{t('staff')}</h4>
                    <p className={styles.box_p}>{t('staffText')}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
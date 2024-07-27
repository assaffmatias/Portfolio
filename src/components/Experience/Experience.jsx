import styles from './Experience.module.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { Link } from 'react-router-dom';

const Experience = () => {
    const { t } = useTranslation();
    const [selectedAccordion, setSelectedAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setSelectedAccordion(selectedAccordion === index ? null : index);
    };

    const closeAccordion = () => {
        setSelectedAccordion(null)
    }

    const scroll = () => {
        window.scrollTo({
            top: 0,
        });
    }

    const elementRef = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        elementRef.forEach((ref) => {
            const el = ref.current;
            gsap.fromTo(el, { opacity: 0, translateY: 200 }, { opacity: 1, translateY: 0, duration: .5, scrollTrigger: { trigger: el } })
        });
    }, []);


    return (
        <div className={styles.container} ref={elementRef[0]}>
            <h1 className={styles.title} >{t('experienceTitle')}</h1>
            <ul className={styles.accordion}>
                <li className={styles.li}>
                    <input
                        className={styles.input}
                        type="radio"
                        name="accordion"
                        id="first"
                        checked={selectedAccordion === 0}
                        onChange={() => toggleAccordion(0)}
                    />
                    <label className={styles.label} htmlFor="first">
                        Front-End @ Softwind 〢 {t('softwindTime')} 2024
                    </label>
                    <div className={`${styles.content} ${selectedAccordion === 0 ? styles.open : ''}`}>
                        <div className={styles.description_container}>
                            <div className={styles.logo_container_mobile}>
                                <img src="https://res.cloudinary.com/dth5pbvch/image/upload/v1718250368/1716477471853-removebg-preview_zykqqp.png" alt="" className={styles.logo} />
                            </div>
                            <div className={styles.svg_container}>
                                <div className={styles.svg_content}>
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3459ea" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                                    </svg>
                                    <p className={styles.p}>{t('remote')}</p>
                                </div>
                                <div className={styles.svg_content}>
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3459ea" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M11.403 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.403a3.01 3.01 0 0 1-1.743-1.612l-3.025 3.025A3 3 0 1 1 9.99 9.768l3.025-3.025A3.01 3.01 0 0 1 11.403 5Z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M13.232 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v5.768a1 1 0 1 1-2 0V6.414l-6.182 6.182a1 1 0 0 1-1.414-1.414L17.586 5h-3.354a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                                    </svg>
                                    <Link className={styles.link} to={'https://www.linkedin.com/company/softwind-solutions/'} target='_blank'>
                                        Softwind.com.ar
                                    </Link>
                                </div>
                            </div>
                            <p className={styles.description}>{t('softwindDescription')}</p>
                            <div className={styles.button_container}>
                                <button className={styles.button}>JavaScript</button>
                                <button className={styles.button}>Typescript</button>
                                <button className={styles.button}>React</button>
                                <button className={styles.button}>Tailwind</button>
                                <button className={styles.button}>Jira</button>
                            </div>
                        </div>
                        <div className={styles.logo_container}>
                            <img src="https://res.cloudinary.com/dth5pbvch/image/upload/v1718250368/1716477471853-removebg-preview_zykqqp.png" alt="" className={styles.logo} />
                        </div>
                    </div>
                    <div onClick={closeAccordion} className={`${styles.close} ${selectedAccordion === null ? styles.hidden : ''}`}></div>
                </li>
                {/* <li className={styles.li}>
                    <input
                        className={styles.input}
                        type="radio"
                        name="accordion"
                        id="second"
                        checked={selectedAccordion === 1}
                        onChange={() => toggleAccordion(1)}
                    />
                    <label className={styles.label} htmlFor="second">
                        Backend
                    </label>
                    <div className={`${styles.content} ${selectedAccordion === 1 ? styles.open : ''}`}>
                        <p className={styles.p}>{t('backend')}</p>
                    </div>
                    <div onClick={closeAccordion} className={`${styles.close} ${selectedAccordion === null ? styles.hidden : ''}`}></div>
                </li> */}
                {/* <li className={styles.li}>
                    <input
                        className={styles.input}
                        type="radio"
                        name="accordion"
                        id="third"
                        checked={selectedAccordion === 2}
                        onChange={() => toggleAccordion(2)}
                    />
                    <label className={styles.label} htmlFor="third">
                        {t('')}
                    </label>
                    <div className={`${styles.content} ${selectedAccordion === 2 ? styles.open : ''}`}>
                        <p className={styles.p}>{t('tools')}</p>
                    </div>
                    <div onClick={closeAccordion} className={`${styles.close} ${selectedAccordion === null ? styles.hidden : ''}`}></div>
                </li> */}
            </ul>
        </div>
    )
}

export default Experience;
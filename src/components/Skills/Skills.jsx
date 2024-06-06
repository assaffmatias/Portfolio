import styles from './Skills.module.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();
    const [selectedAccordion, setSelectedAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setSelectedAccordion(selectedAccordion === index ? null : index);
    };

    const closeAccordion = () => {
        setSelectedAccordion(null)
    }


    return(
        <div className={styles.container}>
            <h1 className={styles.title}>My Skills</h1>
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
                        Frontend
                    </label>
                    <div className={`${styles.content} ${selectedAccordion === 0 ? styles.open : ''}`}>
                        <p className={styles.p}>{t('frontend')}</p>
                    </div>
                    <div onClick={closeAccordion} className={`${styles.close} ${selectedAccordion === null ? styles.hidden : ''}`}></div>
                </li>
                <li className={styles.li}>
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
                </li>
                <li className={styles.li}>
                    <input
                        className={styles.input}
                        type="radio"
                        name="accordion"
                        id="third"
                        checked={selectedAccordion === 2}
                        onChange={() => toggleAccordion(2)}
                    />
                    <label className={styles.label} htmlFor="third">
                        {t('toolsTitle')}
                    </label>
                    <div className={`${styles.content} ${selectedAccordion === 2 ? styles.open : ''}`}>
                        <p className={styles.p}>{t('tools')}</p>
                    </div>
                    <div onClick={closeAccordion} className={`${styles.close} ${selectedAccordion === null ? styles.hidden : ''}`}></div>
                </li>
            </ul>
        </div>
    )
}

export default Skills;
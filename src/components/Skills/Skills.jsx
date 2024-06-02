import styles from './Skills.module.css'
import pieChart from '../../assets/pictures/pie-chart.png'
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container} id='skills'>
            <div className={styles.mainContainer}>
                <div className={styles.mainContent}>
                    <div className={styles.dataContent}>
                        <h2 className={styles.title}>Frontend</h2>
                        <p className={styles.data}>JavaScript</p>
                        <p className={styles.data}>HTML & CSS</p>
                        <p className={styles.data}>React & Redux</p>
                        <p className={styles.data}>Next.JS <span className={styles.span}>{t('learning')}</span></p>
                        <p className={styles.data}>Typescript <span className={styles.span}>{t('learning')}</span></p>
                        <p className={styles.data}>Tailwind</p>
                    </div>
                    <div className={styles.pieChartContainer}>
                        <img src={pieChart} alt="" className={styles.pieChart} />
                    </div>
                    <div className={styles.dataContent}>
                        <h2 className={styles.title}>Backend</h2>
                        <p className={styles.data}>Node.JS</p>
                        <p className={styles.data}>Express</p>
                        <p className={styles.data}>Sequelize</p>
                        <p className={styles.data}>PostgreSQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
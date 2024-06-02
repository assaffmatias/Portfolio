import styles from './WorksData.module.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const WorksData = () => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState(null);

    const handleToggle = (index) => {
        setSelected(selected === index ? null : index);
    };

    const handleReset = () => {
        setSelected(null);
    };

    return (
        <div className={styles.container} id='works'>
            <div className={styles.mainContainer}>
                <div className={styles.mainContent}>
                    <h1 className={styles.title}>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
                        </svg>

                        {t('webDevelopment')}
                    </h1>
                    <div className={styles.dataContainer}>
                        <div className={styles.cardContainer}>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitleContent}>
                                    <h3 className={styles.projectTitle}>
                                        Innova Tech
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                                        </svg>
                                    </h3>
                                    <Link to={'https://github.com/assaffmatias?tab=repositories'} target='_blank' className={styles.linkGitHub}>
                                        {t('viewGitHub')}
                                    </Link>
                                </div>
                                <p className={styles.description}>{t('innovaTech')}</p>
                                <div className={styles.circle}></div>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitleContent}>
                                    <h3 className={styles.projectTitle}>
                                        Formula 1
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                                        </svg>
                                    </h3>
                                    <Link to={'https://github.com/assaffmatias?tab=repositories'} target='_blank' className={styles.linkGitHub}>
                                        {t('viewGitHub')}
                                    </Link>
                                </div>
                                <p className={styles.description}>{t('formula1')}</p>
                                <div className={styles.circle}></div>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitleContent}>
                                    <h3 className={styles.projectTitle}>
                                        Rick & Morty
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                                        </svg>
                                    </h3>
                                    <Link to={'https://github.com/assaffmatias?tab=repositories'} target='_blank' className={styles.linkGitHub}>
                                        {t('viewGitHub')}
                                    </Link>
                                </div>
                                <p className={styles.description}>{t('rickAndMorty')}</p>
                                <div className={styles.circle}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        // <div className={styles.container}>
        //     <div className={styles.accordionContainer}>
        //         <ul className={styles.accordion}>
        //             <li className={`${styles.li} ${selected === 0 ? styles.selected : ''}`}>
        //                 <input
        //                     className={styles.input}
        //                     type="radio"
        //                     name="accordion"
        //                     id="first"
        //                     checked={selected === 0}
        //                     onChange={() => handleToggle(0)}
        //                 />
        //                 <label className={styles.label} htmlFor="first">Innova Tech</label>
        //                 <div className={styles.content}>
        //                     <p className={styles.description}>{t('innovaTech')}</p>
        //                     <div className={styles.techContainer}>
        //                         <button className={styles.techButton}>JavaScript</button>
        //                         <button className={styles.techButton}>React</button>
        //                         <button className={styles.techButton}>Redux</button>
        //                         <button className={styles.techButton}>HTML & CSS</button>
        //                         <button className={styles.techButton}>Node.JS</button>
        //                         <button className={styles.techButton}>Express</button>
        //                         <button className={styles.techButton}>Sequelize</button>
        //                         <button className={styles.techButton}>Passport</button>
        //                         <button className={styles.techButton}>PostgreSQL</button>
        //                     </div>
        //                 </div>
        //                 <button onClick={handleReset} className={styles.close}></button>
        //             </li>
        //             <li className={`${styles.li} ${selected === 1 ? styles.selected : ''}`}>
        //                 <input
        //                     className={styles.input}
        //                     type="radio"
        //                     name="accordion"
        //                     id="second"
        //                     checked={selected === 1}
        //                     onChange={() => handleToggle(1)}
        //                 />
        //                 <label className={styles.label} htmlFor="second">Formula 1</label>
        //                 <div className={styles.content}>
        //                     <p className={styles.description}>{t('formula1')}</p>
        //                     <div className={styles.techContainer}>
        //                         <button className={styles.techButton}>JavaScript</button>
        //                         <button className={styles.techButton}>React</button>
        //                         <button className={styles.techButton}>Redux</button>
        //                         <button className={styles.techButton}>HTML & CSS</button>
        //                         <button className={styles.techButton}>Node.JS</button>
        //                         <button className={styles.techButton}>Express</button>
        //                         <button className={styles.techButton}>Sequelize</button>
        //                         <button className={styles.techButton}>PostgreSQL</button>
        //                     </div>
        //                 </div>
        //                 <button onClick={handleReset} className={styles.close}></button>
        //             </li>
        //             <li className={`${styles.li} ${selected === 2 ? styles.selected : ''}`}>
        //                 <input
        //                     className={styles.input}
        //                     type="radio"
        //                     name="accordion"
        //                     id="third"
        //                     checked={selected === 2}
        //                     onChange={() => handleToggle(2)}
        //                 />
        //                 <label className={styles.label} htmlFor="third">Rick & Morty</label>
        //                 <div className={styles.content}>
        //                     <p className={styles.description}>{t('rickAndMorty')}</p>
        //                     <div className={styles.techContainer}>
        //                         <button className={styles.techButton}>JavaScript</button>
        //                         <button className={styles.techButton}>React</button>
        //                         <button className={styles.techButton}>Redux</button>
        //                         <button className={styles.techButton}>HTML & CSS</button>
        //                         <button className={styles.techButton}>Node.JS</button>
        //                         <button className={styles.techButton}>Express</button>
        //                         <button className={styles.techButton}>Sequelize</button>
        //                         <button className={styles.techButton}>PostgreSQL</button>
        //                     </div>
        //                 </div>
        //                 <button onClick={handleReset} className={styles.close}></button>
        //             </li>
        //         </ul>
        //     </div>
        //     <WorksCard />
        // </div>
    )
}

export default WorksData;
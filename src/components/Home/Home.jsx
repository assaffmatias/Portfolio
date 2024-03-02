import style from './Home.module.css'

const Home = () => {
    const scrollDown = () => {
        // Encuentra el elemento al que deseas desplazarte
        const aboutSection = document.getElementById('about');
        // Hace scroll hacia el elemento
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className={style.container} id='home'>
            <div className={style.titleContent}>
                <div className={style.greetingContent}>
                    <p className={style.greeting}>👋 Hi, my name is</p>
                </div>
                <h1 className={style.title}>MATIAS ASSAFF</h1>
                <div className={style.pContent}>
                    <p className={style.p}>i'm a Full Stack Developer</p>
                </div>
                <div className={style.arrow} onClick={scrollDown}>
                    <span className={style.span}></span>
                    <span className={style.span}></span>
                    <span className={style.span}></span>
                </div>
            </div>
        </div>
    )
}

export default Home;
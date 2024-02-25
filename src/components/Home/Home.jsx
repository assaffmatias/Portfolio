import style from './Home.module.css'

const Home = () => {
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
            </div>
        </div>
    )
}

export default Home;
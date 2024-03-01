import style from './About.module.css'
import about from '../../assets/about.png'
import aboutmob from '../../assets/about-mobile.png'

const About = () => {
    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <div className={style.titleContent}>
                    <h2 className={style.title} id='about'>About</h2>
                    <hr className={style.hr} />
                </div>
                <div className={style.aboutContent}>
                    <img src={about} alt="" className={style.about} />
                    <img src={aboutmob} alt="" className={style.aboutmob} />
                </div>
            </div>
        </div>
    )
}

export default About;
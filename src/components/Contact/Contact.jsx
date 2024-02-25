import style from './Contact.module.css'

const Contact = () => {
    return(
        <div className={style.container}>
            <div className={style.mainContent}>
                <div className={style.titleContent}>
                    <h2 className={style.title} id='contact'>Contact</h2>
                    <hr className={style.hr} />
                </div>
            </div>
        </div>
    )
}

export default Contact;
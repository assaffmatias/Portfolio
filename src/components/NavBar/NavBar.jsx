import style from './NavBar.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={style.container}>
            <div className={style.logoContainer}>
                <img src={logo} alt="" className={style.logo} />
            </div>
            <div className={style.linkContainer}>
                <Link className={style.link}>Home</Link>
                <Link className={style.link}>About</Link>
                <Link className={style.link}>Works</Link>
                <Link className={style.link}>Skills</Link>
                <Link className={style.link}>Contact</Link>
                <Link className={style.link}>EN</Link>
                <Link className={style.link}>ES</Link>
            </div>
        </div>
    )
}

export default NavBar
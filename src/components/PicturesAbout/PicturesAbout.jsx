import styles from './PicturesAbout.module.css'
import plane from '../../assets/pictures/plane.jpeg';
import buildings from '../../assets/pictures/buildings.jpeg';
import maradona from '../../assets/pictures/maradona.jpeg';
import park from '../../assets/pictures/park.jpeg';
import flag from '../../assets/pictures/flag.jpeg';
import boots from '../../assets/pictures/boots.jpg';


const PicturesAbout = () => {
    return (
        <div className={styles.picturesContainer}>
            <div className={styles.pictureContent}>
                <img src={plane} alt="" className={styles.picture} />
            </div>
            <div className={styles.pictureContent}>
                <img src={buildings} alt="" className={styles.picture} />
            </div>
            <div className={styles.pictureContent}>
                <img src={flag} alt="" className={styles.picture} />
            </div>
            <div className={styles.pictureContent}>
                <img src={maradona} alt="" className={styles.picture} />
            </div>
            <div className={styles.pictureContent}>
                <img src={park} alt="" className={styles.picture} />
            </div>
            <div className={styles.pictureContent}>
                <img src={boots} alt="" className={styles.picture} />
            </div>
        </div>
    )
}

export default PicturesAbout;
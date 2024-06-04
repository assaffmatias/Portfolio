import styles from './PicturesAbout.module.css'
import plane from '../../assets/pictures/plane.jpeg';
import buildings from '../../assets/pictures/buildings.jpeg';
import maradona from '../../assets/pictures/maradona.jpeg';
import park from '../../assets/pictures/park.jpeg';
import coffee from '../../assets/pictures/coffee.jpg';
import laptop from '../../assets/pictures/laptop.jpg';


const PicturesAbout = () => {
    return (
        <div className={styles.picturesContainer}>
            <div className={styles.pictureContent}>
                <img src={buildings} alt="" className={styles.picture} />
            </div>
            <div className={styles.pictureContent}>
                <img src={maradona} alt="" className={styles.picture} />
            </div>
            <div className={styles.pictureContent}>
                <img src={park} alt="" className={styles.picture} />
            </div>
            <div className={styles.pictureContent}>
                <img src={coffee} alt="" className={styles.picture} />
            </div>
            <div className={styles.pictureContent}>
                <img src={laptop} alt="" className={styles.picture} />
            </div>
            <div className={styles.pictureContent}>
                <img src={plane} alt="" className={styles.picture} />
            </div>
        </div>
    )
}

export default PicturesAbout;
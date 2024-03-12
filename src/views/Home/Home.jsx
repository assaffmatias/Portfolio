import style from './Home.module.css';
import Wellcome from '../../components/Wellcome/Wellcome';
import About from '../../components/About/About';
import Works from '../../components/Works/Works';
import Skills from '../../components/Skills/Skills';
import Contact from '../../components/Contact/Contact';
import ButtonScroll from '../../components/ButtonScroll/ButtonScroll';

const Home = () => {
    return (
        <>
            <Wellcome />
            <ButtonScroll />
            <About />
            <Skills />
            <Works />
            <Contact />
        </>
    )
}

export default Home;
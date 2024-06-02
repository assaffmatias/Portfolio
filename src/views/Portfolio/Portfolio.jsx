import Works from "../../components/Works/Works";
import Footer from '../../components/Footer/Footer'
import WorksData from "../../components/WorksData/WorksData";
import WorksCard from '../../components/WorksCard/WorksCard';

const Portfolio = () => {
    return (
        <div>
            <Works />
            <WorksData />
            <WorksCard />
            <Footer />
        </div>
    )
}

export default Portfolio;
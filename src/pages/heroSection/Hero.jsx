import Cards from "../../components/cardList/Cards";
import Pricing from "../../components/pricing/Princing";
import Questions from "../../components/questions/Questions";
import './hero.css'

const HeroSection = () =>{
    return(
        <div className="hero-container">
            <Pricing />
            <Cards />
            <Questions />
        </div>
    )
}

export default HeroSection;
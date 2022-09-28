import Navbar from "../../components/header-nav/Navbar"
import Bodyimg from "../../components/indexbody/BodyImg"
import TextBody from "../../components/indexbody/TextBody";
import CardsBody from "../../components/indexbody/CardsBody";
import Footer from "../../components/footer/Footer";
function Inicio(){
    return(
        <>
        <Navbar />
        <Bodyimg />
        <TextBody />
        <CardsBody />
        <Footer />
        </>
        )
    }
    
    export default Inicio;
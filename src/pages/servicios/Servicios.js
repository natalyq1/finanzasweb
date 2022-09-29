import Navbar from "../../components/header-nav/Navbar"

import Footer from "../../components/footer/Footer";
import CardsServicioP from "../../components/servicios/CardSP";
import CardsServicioC from "../../components/servicios/CardSC";
function Servicios(){
    return(
        <>
        <Navbar />
        <CardsServicioP />
        <CardsServicioC />
        <Footer />
        </>
        )
    }
    
    export default Servicios;
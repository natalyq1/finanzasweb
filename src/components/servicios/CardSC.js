import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Servicios.css';

function CardsServicioC() {
  return (
  <div className='CardPosition CardService' >
    
<Card className='MarginPadCard CardSize' style={{background:'#042A45', borderRadius:'0'}}>
<Card.Body>
  
  <Card.Text className='fontParagraphWhite'>
  Las tendencias del mercado impulsan las soluciones digitales para la gestión de los fondos.
  <br/>
  La economía digital del mundo crece a un ritmo vertiginoso y presiona a las empresas para que modernicen sus infraestructuras de pago. 
  <br/>
  Lo ayudamos a simplificar el procesamiento inmediato de los pagos y a reducir los costos operativos, para que pueda adaptarse rápidamente a las condiciones cambiantes del mercado.
  <br/>
  Conozca los diferentes puntos de vista sobre los temas de servicios financieros importantes, así como también la información y los datos relacionados.
  </Card.Text>
  
 </Card.Body>
</Card>


<Card className='MarginPadCard CardSize' style={{background:'#a1bdcd', border:'none'}} >
      <Card.Body>
        <Card.Title id='personas' className='fontTitles'>Asesoría a corporativos
        <br /> Asesoria por una hora $110.000
        </Card.Title>
        <Card.Text className='fontParagraphBlue'>
        La digitalización, la inteligencia y las conexiones son el futuro de los bancos comerciales. 
  <br /> Con nosotros se optimizan las operaciones para crear servicios innovadores con una plataforma de nube moderna que mejora la estabilidad, la seguridad y la resistencia.
  Junto con muchos mas servicios.
        </Card.Text>
        <Button className='primaryButton'>Contáctanos</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardsServicioC;
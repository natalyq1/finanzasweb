import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Servicios.css';

function CardsServicioP() {
  return (
  <div className='CardPosition CardService' >
    <Card className='MarginPadCard CardSize' style={{background:'#a1bdcd', border:'none'}} >
      <Card.Body>
        <Card.Title id='personas' className='fontTitles'>Asesoría a personas 
        <br /> Asesoria inicial $60.000
        </Card.Title>
        <Card.Text className='fontParagraphBlue'>
        La competencia digital implica poder adaptarse con mayor facilidad al mercado internacional actual.
  <br/> Los servicios bancarios para consumidores modernizan los sistemas, automatizan los procesos y optimizan la distribución de las aplicaciones, mejorando la resistencia, la eficiencia y el tiempo de comercialización.
  
        </Card.Text>
        <Button className='primaryButton'>Contáctanos</Button>
      </Card.Body>
    </Card>

<Card className='MarginPadCard CardSize' style={{background:'#042A45', borderRadius:'0'}}>
<Card.Body>
  
  <Card.Text className='fontParagraphWhite'>
  Descubra las razones por las que la modernización del sistema principal puede ayudarlo a obtener nuevos flujos de ingresos.
  <br/>
  La economía digital del mundo crece a un ritmo vertiginoso y presiona a las empresas para que modernicen sus infraestructuras de pago. 
  <br/>
  Le ayudamos a simplificar el procesamiento inmediato de los pagos y a reducir los costos operativos, para que pueda adaptarse rápidamente a las condiciones cambiantes del mercado.
  <br/>
  Durante todo el proceso se le enseñara tambien a como mantener protegido y al corriente en nuevas tecnologías.
  </Card.Text>
  
 </Card.Body>
</Card>

    </div>
  );
}

export default CardsServicioP;
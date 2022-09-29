import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './IndexBody.css';

function CardsBody() {
  return (
  <div className='CardPosition'>
    <Card className='MarginPadCard CardSize' >
      <Card.Img className='SizeImgCard' variant="top" src="https://github.com/natalyq1/finanzasweb/blob/master/src/components/images/pexels-personal.jpg?raw=true" />
      <Card.Body>
        <Card.Title id='personas' className='fontTitles'>Asesoría a personas</Card.Title>
        <Card.Text className='fontParagraphBlue'>
        La competencia digital implica poder adaptarse con mayor facilidad al mercado internacional actual.
  <br/> Los servicios bancarios para consumidores modernizan los sistemas, automatizan los procesos y optimizan la distribución de las aplicaciones, mejorando la resistencia, la eficiencia y el tiempo de comercialización.
  
        </Card.Text>
        <Link to="/servicios">
        <Button className='primaryButton'>Más información</Button></Link>
      </Card.Body>
    </Card>

<Card className='MarginPadCard CardSize' >
<Card.Img className='SizeImgCard' variant="top" src="https://github.com/natalyq1/finanzasweb/blob/master/src/components/images/pexels-sevenstorm-juhaszimrus-443383.jpg?raw=true" />
<Card.Body>
  <Card.Title id='corporativo' className='fontTitles'>Asesoría a empresas</Card.Title>
  <Card.Text className='fontParagraphBlue'>
  La digitalización, la inteligencia y las conexiones son el futuro de los bancos comerciales. 
  <br /> Con nosotros se optimizan las operaciones para crear servicios innovadores con una plataforma de nube moderna que mejora la estabilidad, la seguridad y la resistencia.
  Junto con muchos mas servicios.
  </Card.Text>
  <Link to="/servicios">
  <Button className='primaryButton'>Más información</Button></Link>
</Card.Body>
</Card>

    </div>
  );
}

export default CardsBody;
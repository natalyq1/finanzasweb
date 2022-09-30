
import Card from 'react-bootstrap/Card';
import Registro from '../cregistro/Cregistro'
import './Contacto.css';

function Contacto() {
  return (
    <>
    
    

<div className='d-flex displayCardImg' style={{background:'none',margin:'0'}}>
    <Card className="d-flex CardTest" style={{background:'none', border:'none'}} >
      
      <Card.Body className='StyleTest' style={{background:'none'}}>
        <p className='fontTitles '>
          Formulario de contacto
          </p>

          <section className='fontParagraphBlue '>
       <Registro />
        </section>
        
        
      </Card.Body>
    </Card>
        <Card.Img className='SmallVersion ImageTest ' src="https://raw.githubusercontent.com/natalyq1/finanzasweb/2dc6ceadd19f64f59efe4db128bc67bf3ef17b5b/src/components/images/logoletra.svg" />

   </div>

</>


  );
}

export default Contacto;
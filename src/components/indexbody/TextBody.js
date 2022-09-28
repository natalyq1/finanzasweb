import Card from 'react-bootstrap/Card';
import './IndexBody.css';

function TextBody() {
  return (
      <Card className='MarginPadCard'>
        <Card.Body id='finanzas' className='fontParagraphBlue'>
          Las finanzas corresponden a una rama de la economía que estudia el <b>movimiento del dinero</b> entre las personas, las empresas o el Estado. 
          <p className='fontParagraphBlue hideVersion'>
          También estudia la obtención y la administración del dinero que ellos realizan para lograr sus respectivos objetivos, tomando en cuenta todos los riesgos que ello implica.
          <br/>  El estudio de las finanzas ha desarrollado herramientas que se pueden aplicar a todos los niveles de la toma de decisiones: desde la de alquilar un automóvil o iniciar un negocio, hasta la decisión del director financiero de una gran empresa de entrar en la industria de las telecomunicaciones, o la decisión del Banco Mundial acerca de cuáles proyectos de desarrollo financiar.
<br/>
</p>
<p className='fontParagraphBlue'>El estudio y compresión de las finanzas ayudan a:
</p><ul>
  
<li>Administrar los recursos personales.</li>
<li>Tratar con el mundo de los negocios.</li>
<li>Aprovechar oportunidades profesionales interesantes y satisfactorias.</li>
<li>Tomar como ciudadano decisiones bien fundamentadas de interés público.</li>
</ul>          
          
          
          
          </Card.Body>
      </Card>
    );
  }

export default TextBody;
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './IndexBody.css';

function Bodyimg() {
  return (
    <Carousel fade>
      <Carousel.Item interval={4000}>
       <div className='SizeImgCarusel'> 
        <img
          className="d-block w-100"
          src="https://github.com/natalyq1/finanzasweb/blob/master/src/components/images/carusel/pexels1.jpg?raw=true"
          alt="from:pexels"
        /></div>
        <Carousel.Caption>
          <h3 className='fontParagraphWhite'>¿Qué son las finanzas?</h3>
          <p>Te explicamos y damos herramientas que simplifican el proceso</p>
          <Button className='primaryButton'>Saber más</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <div className='SizeImgCarusel'> 
      <img
          className="d-block w-100"
          src="https://github.com/natalyq1/finanzasweb/blob/master/src/components/images/carusel/pexels-2.jpg?raw=true"
          alt="from:pexels"
        />
      </div>

        <Carousel.Caption>
          <h3 className='fontParagraphWhite'>Servicios Corporativos</h3>
          <Button className='primaryButton'>Saber más</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <div className='SizeImgCarusel'> 
      <img
          className="d-block w-100"
          src="https://github.com/natalyq1/finanzasweb/blob/master/src/components/images/carusel/pexels-pixabay-53621.jpg?raw=true"
          alt="from:pexels"
        />
      </div>
        <Carousel.Caption>
          <h3 className='fontParagraphBlack'>Servicios para personas</h3>
          <Button className='primaryButton'>Saber más</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Bodyimg;
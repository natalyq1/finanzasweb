import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Testimonios.css';

function BodyTestimonioC() {
  return (
    <>
    <div className='d-flex displayCardImg'>
    <Card.Img className='ImageTest' src="https://github.com/natalyq1/finanzasweb/blob/master/src/components/images/testimonio/pexels-testimonio%20h.jpg?raw=true" />
    <Card className="d-flex CardTest" >
      
      <Card.Body className='StyleTest'>
        <p className='fontTitles '>
          Compañia Postobon
          </p>

          <p className='fontParagraphBlue MarginPadTest'>
       "Pusimos en practica las tres Ts, esto nos ayudo a mejorar nuestros servicios, enfocados en lo que son nuestros clientes, esto mejoro las ventas en un 20%.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Laboris commodo consequat. Dt non proident, st laborum."</p>
        
        
      </Card.Body>
    </Card>
   </div>
    

<div className='d-flex displayCardImg'>
    <Card className="d-flex CardTest" >
      
      <Card.Body className='StyleTest'>
        <p className='fontTitles '>
          Compañia Colombina
          </p>

          <p className='fontParagraphBlue MarginPadTest'>
       "Pusimos en practica las tres Ts, esto nos ayudo a mejorar nuestros servicios, enfocados en lo que son nuestros clientes, esto mejoro las ventas en un 20%.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Laboris commodo consequat. Dt non proident, st laborum."</p>
        
        
      </Card.Body>
    </Card>
        <Card.Img className='ImageTest' src="https://github.com/natalyq1/finanzasweb/blob/master/src/components/images/testimonio/pexels-testimonio%20ho.jpg?raw=true" />

   </div>

</>


  );
}

export default BodyTestimonioC;

import React, {useState} from 'react';
import {Ftitulo, Ftitulo2, Ftitulo3, Formulario,Label,ContenedorTerminos,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError} from '../../elements/registroform/Formulariovalidacion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from '../cregistro/Input';
import './Cregistro.css';

const Registro =()=>{
  
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [consulta, cambiarConsulta] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
    const [pais, cambiarPais] = useState({campo: '', valido: null});
    const [terminos,cambiarTerminos]= useState(false);
	const [formularioValido,cambiarFormularioValido]= useState(null); 

  const expresiones = {
		consulta: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        pais: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        //[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]{2,}

	}


const onChangeTerminos=(e)=>{
cambiarTerminos(e.target.checked);
}

const onSubmit =(e)=>{
  e.preventDefault();
  if(consulta.valido==='true'&& 
  nombre.valido==='true'&&
  correo.valido==='true'&&
  telefono.valido==='true'&&
  pais.valido==='true'&&
  terminos
  ){
	cambiarFormularioValido(true);
	cambiarConsulta({campo:'',valido:''});
	cambiarNombre({campo:'',valido: null});
	cambiarCorreo({campo:'',valido: null});
	cambiarTelefono({campo:'',valido: null});
    cambiarPais({campo:'',valido: null});
}else{
	cambiarFormularioValido(false);
}
}

  return ( 
    <main>
     
     
      <Formulario className='FormContact' action="" onSubmit={onSubmit} > 
      
       
      <Input
					estado={consulta}
					cambiarEstado={cambiarConsulta}
					tipo="text"
					label="Consulta como:"
					placeholder="persona, empresa, ambas"
					name="consulta"
					leyendaError="Especificar si consulta como persona, empresa o ambas."
					expresionRegular={expresiones.consulta}
         
				/>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre y apellido:"
					placeholder="John Doe"
					name="nombre"
					leyendaError="Solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
			
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico:"
					placeholder="john@correo.com"
					name="correo"
					leyendaError="Solo puede contener letras, numeros, puntos, guión y guión bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono:"
					placeholder="4491234567"
					name="telefono"
					leyendaError="Solo puede contener numeros y el máximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>

<Input
					estado={pais}
					cambiarEstado={cambiarPais}
					tipo="text"
					label="País:"
					placeholder="Ejemplo:Peru"
					name="pais"
					leyendaError="Solo debe contener letras."
					expresionRegular={expresiones.pais}
         
				/>



           

      <ContenedorTerminos>
      <Label>
        <input 
        type="checkbox" 
        name="terminos" 
        id="terminos" 
        checked={terminos}
        onChange={onChangeTerminos}
        />
        Acepto Terminos y Condiciones
      </Label>
      </ContenedorTerminos>
	  
      {formularioValido===false && <MensajeError>
        <p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
          Incompleto.</p>
      </MensajeError>}
      <ContenedorBotonCentrado>
        <Boton  className='fontButtons secondaryButton btn ' type="submit">Enviar</Boton>
        {formularioValido === true && <MensajeExito><p>¡Formulario enviado exitosamente!</p></MensajeExito>}
      </ContenedorBotonCentrado>
     
      </Formulario>
    </main>
    
    );
}

export default Registro;
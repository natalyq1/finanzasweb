
import React, {useState} from 'react';
import {Ftitulo, Ftitulo2, Ftitulo3, Formulario,Label,ContenedorTerminos,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError} from '../../elements/registroform/Formulariovalidacion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from '../cregistro/Input';
import './Cregistro.css';

const Registro =()=>{
  
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
    const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
    const [direccion2, cambiarDireccion2] = useState({campo: '', valido: null});
	const [terminos,cambiarTerminos]= useState(false);
	const [formularioValido,cambiarFormularioValido]= useState(null); 

  const expresiones = {
		apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        direccion: /^[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]{2,}$/,
        direccion2: /^[a-zA-Z0-9._%+-ÿ \s]{4,30}$/
        //[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]+[a-z0-9._%+-\s]{2,}

	}


const onChangeTerminos=(e)=>{
cambiarTerminos(e.target.checked);
}

const onSubmit =(e)=>{
  e.preventDefault();
  if(apellido.valido==='true'&& 
  nombre.valido==='true'&&
  correo.valido==='true'&&
  telefono.valido==='true'&&
  direccion.valido==='true'&&
  direccion2.valido==='true'&&
  terminos
  ){
	cambiarFormularioValido(true);
	cambiarApellido({campo:'',valido:''});
	cambiarNombre({campo:'',valido: null});
	cambiarCorreo({campo:'',valido: null});
	cambiarTelefono({campo:'',valido: null});
    cambiarDireccion({campo:'',valido: null});
    cambiarDireccion2({campo:'',valido:'null'});
}else{
	cambiarFormularioValido(false);
}
}

  return ( 
    <main>
     
     
      <Formulario className='FormContact' action="" onSubmit={onSubmit} > 
      
       
      <Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder="Gomez"
					name="apellido"
					leyendaError="El apellido solo puede contener letras y espacios."
					expresionRegular={expresiones.apellido}
         
				/>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre y apellido"
					placeholder="John Doe"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
			
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="john@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono"
					placeholder="4491234567"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>

<Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					tipo="text"
					label="Dirección"
					placeholder="cra 79 n 10-20"
					name="direccion"
					leyendaError="La direccion debe contener letras, numeros y guion, puntos opcionales"
					expresionRegular={expresiones.direccion}
         
				/>

<Input
					estado={direccion2}
					cambiarEstado={cambiarDireccion2}
					tipo="text"
					label="Detalles Dirección"
					placeholder="casa o apartamento"
					name="direccion2"
					leyendaError="La direccion debe contener letras, numeros, guion y puntos opcionales"
					expresionRegular={expresiones.direccion2}
         
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
        <Boton type="submit">Enviar</Boton>
        {formularioValido === true && <MensajeExito>¡Formulario enviado exitosamente!</MensajeExito>}
      </ContenedorBotonCentrado>
     
      </Formulario>
    </main>
    
    );
}

export default Registro;

import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
	borde: "#e05f0f",
	error: "#e05f0f",
	exito: "#042A45"
}
const Ftitulo = styled.p`
    color: #572612;
    font-size: 20pt;
    text-align: center;
    font-weight:bold;
    background-color:#f9d54463;
    margin: 1em;
    
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (min-width:700px){
		
        font-size: 32pt;
	}
    `
    const Ftitulo2 = styled.p`
    
    padding: 0.1em 1em;
    cursor:grab;
    animation:heartbeat 1.5s ease-in-out 3 both;
    @keyframes heartbeat{from{transform:scale(1);transform-origin:center center;animation-timing-function:ease-out}10%{transform:scale(.91);animation-timing-function:ease-in}17%{transform:scale(.98);animation-timing-function:ease-out}33%{transform:scale(.87);animation-timing-function:ease-in}45%{transform:scale(1);animation-timing-function:ease-out}}

    &:hover {
		background-color:#5a3c2b63
	}
	}
    `
    const Ftitulo3 = styled.p`
    padding: 0.1em 1em;
    cursor:grab;
    animation:heartbeat 1.5s ease-in-out 3 both;
    @keyframes heartbeat{from{transform:scale(1);transform-origin:center center;animation-timing-function:ease-out}10%{transform:scale(.91);animation-timing-function:ease-in}17%{transform:scale(.98);animation-timing-function:ease-out}33%{transform:scale(.87);animation-timing-function:ease-in}45%{transform:scale(1);animation-timing-function:ease-out}}

    &:hover {
		background-color:#5a3c2b63
	}
}
    `

const Formulario = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
    margin: 1em 8em 3em 8em;
    padding:1em 1em;
    border-radius: 42px;
background: #41a7ab;
box-shadow: inset 5px 5px 10px #1e4d4f,
            inset -5px -5px 10px #64ffff;

	@media (max-width: 800px){
		grid-template-columns: 1fr;
        margin: 2em 2em 3em 2em;
		overflow:hidden;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;

	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
	width: 100%;
	background-color: #d9edee;
	border-radius: 3px;
	margin: 0 0.4em;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}

	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}

	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;

	${props => props.valido === 'true' && css`
		display: none;
	`}

	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}

	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;

const ContenedorTerminos = styled.div`
	grid-column: span 2;

	input {
		margin-right: 10px;
	}

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
	cursor: pointer;
`;

const MensajeExito = styled.p`
	font-size: 12px;
	color: ${colores.exito};
`;

const MensajeError = styled.p`
	height: 30px;
	line-height: 30px;
	background: #f0af87;
	padding:0 1em;
	border-radius: 8px;
	font-size: 12px;
	
	@media (min-width: 600px){
		width:fit-content;
		display:flex;
		align-items:center;
	}
`;

export {
    Ftitulo,
    Ftitulo2,
    Ftitulo3,
	Formulario,
	Label,
	GrupoInput,
	Input,
	LeyendaError,
	IconoValidacion,
	ContenedorTerminos,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError
};
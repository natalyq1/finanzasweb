/* componentes de clase como class- class Name o de funcion*/
import './Footer.css';
import React from 'react';
import Line1 from'./Line 1.svg'
import Flag from'./bandera.svg'
function Footer(){
    return(
/*caracteristicas del componente*/
<footer>
    <section class="footer-op">
         <img src={Line1}/>

        <section id="footer-con-info">
            <article class="footer-info">
                <h2 class="footer-title">CUENTA</h2>
                <ul>
                    <li><a href="./login.html">Mi cuenta</a></li>
                    <li><a href="./registro.html">Regístrate</a></li>
                    <li>Búsqueda</li>
                </ul>
            </article>

            <article class="footer-info">
                <h2 class="footer-title">ENVíOS</h2>
                <ul>
                    <li>Bogotá</li>
                    <li>Pereira</li>
                    <li>Medellín</li>
                </ul>
            </article>
            <article class="footer-info">
                <h2 class="footer-title">CONTACTO</h2>
                <div class="footer-contact-sm">
                    <p>+57 310 562 31 20</p>
                    <p>+57 305 767 60 63</p>
                    <p>emprearte@gmail.com</p>
                </div>
            </article>
            <article class="footer-info">
                <h2 class="footer-title">CONTÁCTANOS</h2>
                <form id="footer-form">
                    <input class="footer-form-input" type="email" placeholder="Correo electrónico" />
                    <textarea name="mensaje" placeholder="Escribe aquí tu mensaje"></textarea><br />
                    <input class="btn-enviar" type="submit" value="Enviar" />
                </form>
            </article>
        </section>
     <img src={Flag}/>
    </section>
</footer>
    );
}
export default Footer;




/* componentes de clase como class- class Name o de funcion*/

import styles from './Footer.module.css';
import React from 'react';
function Footer(){
    return (
        <>
            <section className={styles.containerFooter}>

                <article className="container">
                    <section className={styles.brandFooter} >.</section>
                </article>
                <div className={styles.containerMobileversion}>
                    <p className={styles.containerAddressphone} style={{ fontWeight: '600' }}>
                        Acerca de Consultora financiera
                    </p>
                    <div className={styles.containerLine} ></div>
                    <p className={styles.containerAddressphone} >
                        Sobre nosotros
                    </p>
                    <p className={styles.containerAddressphone}>
                        Preguntas frecuentes
                    </p>

                    <br />
                    <p className={styles.containerAddressphone} style={{ fontWeight: '600' }}>
                        Síguenos
                    </p>

                    <div className={styles.containerLine} ></div>
                    <article className="container">
                        <section className={styles.containerIcons}>
                            <img src="https://img.icons8.com/sf-regular/48/e05f0f/facebook.png" style={{ width: '20px', height: '20px' }} />

                            <img src="https://img.icons8.com/material-outlined/24/e05f0f/instagram-new--v1.png" style={{ width: '20px', height: '20px' }} />


                            <img src="https://img.icons8.com/ios/50/e05f0f/twitter--v1.png" style={{ width: '20px', height: '20px' }} />
                        </section>
                    </article>
                    <br />
                    <p className={styles.containerAddressphone} style={{ fontWeight: '600' }}>
                        Contáctanos
                    </p>
                    
                    <p className={styles.containerAddressphone}>
                        <img src="https://img.icons8.com/material-outlined/24/e05f0f/whatsapp--v1.png" style={{ width: '20px', height: '20px' }} /> +57 322 547 98 59
                    </p>
                    <p className={styles.containerAddressphone}>
                        <img src="https://img.icons8.com/windows/32/e05f0f/phone.png" style={{ width: '20px', height: '20px' }} /> (60 1) 547 98 59
                    </p>
                    <p className={styles.containerAddressphone}>
                        <img src="https://img.icons8.com/ios-glyphs/30/e05f0f/gmail.png" style={{ width: '20px', height: '20px' }} /> consultorafinanciera@financiera.com
                    </p>
                </div>


                <div className={styles.footerBigscreen}>
                    <article className="container">
                        <p className={styles.containerAddressphone} style={{ fontWeight: '600', marginTop: '1em' }}>
                            Contáctanos
                        </p>
                    </article>
                    
                    <article className="container" style={{ gap: '0px' }}>
                        <section className={styles.containerComunication}>
                            <p className={styles.containerAddressphone}>
                                <img src="https://img.icons8.com/material-outlined/24/e05f0f/whatsapp--v1.png" style={{ width: '20px', height: '20px' }} /> +57 322 547 98 59
                            </p>
                            <p className={styles.containerAddressphone}>
                                <img src="https://img.icons8.com/ios-glyphs/30/e05f0f/gmail.png" style={{ width: '20px', height: '20px' }} /> consultorafinanciera@financiera.com
                            </p>
                            <p className={styles.containerAddressphone}>
                                <img src="https://img.icons8.com/windows/32/e05f0f/phone.png" style={{ width: '20px', height: '20px' }} /> (60 1) 547 98 59
                            </p>
                        </section>
                    </article>
                    <article className={styles.containerIcons} style={{ marginTop: '1em', alignItems: 'center' }}>

                        <img src="https://img.icons8.com/sf-regular/48/e05f0f/facebook.png" style={{ width: '30px', height: '30px' }} />

                        <img src="https://img.icons8.com/fluency-systems-regular/48/e05f0f/instagram-new--v1.png" style={{ width: '30px', height: '30px' }} />


                        <img src="https://img.icons8.com/ios/50/e05f0f/twitter--v1.png" style={{ width: '25px', height: '25px' }} />

                    </article>
                    <article className="container">
                        <p className={styles.containerAddressphone} style={{ fontWeight: '600', marginTop: '1em' }}>
                            Ubícanos
                        </p>
                    </article>
                    
                    <article className="container">
                        <p className={styles.containerAddressphone} >
                            <img src="https://img.icons8.com/material-outlined/24/e05f0f/marker.png" style={{ width: '25px', height: '25px' }} /> Carrera 86 N° 21-56, Bogotá, Colombia
                        </p>
                    </article>
                </div>


            </section>
        </>
    );
}
export default Footer;




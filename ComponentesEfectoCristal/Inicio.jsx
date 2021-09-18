import React from 'react'
import "./Inicio.css";
const Inicio = () => {
    return (
        <div className="divPrincipal">
            <div className="divInicio">
                <div className="banner">
                    <div className="a">
                        <div className="img image-one"></div>
                        <div className="img image-two"></div>
                        <div className="img image-three"></div>
                        <div className="img image-four"></div>
                    </div>
                </div>
                <div className="presentacion">
                     <div className="imagen-desc"></div>
                    <div className="texto-desc">
                        <span>Bienvenido a Tsundoku APP</span>
                        <p>Hola a todos y bienvenidos a una experiencia única y personalizada para cada uno de nuestros usuarios.
                            Con mas de mil ejemplares diferentes entre manga y cómic, podréis crear vuestra propia colección
                            añadiendolos mediante el botón add to my colection o incluso poder añadir los títulos que queráis
                            conseguir con nuestro botón de add to my wishlist nuestra pagina os ofrece la oportunidad única de
                            llevar un registro actualizado de vuestra colección personal e incluso estar al dia de las ultimas
                            novedades del maravilloso mundo de la lectura. Muchas gracias y esperamos que disfruten de este "Best
                            Celler" que es nuestra pagina, bienvenidos a TSUNDOKU.</p>
                    </div>
                </div>
            </div>
            <div class="circle1"></div>
    		<div class="circle2"></div>
        </div>
    )
}

export default Inicio

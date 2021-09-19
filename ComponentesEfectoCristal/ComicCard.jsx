import React from 'react'
import "./ComicCard.css";
const ComicCard = () => {
    return (
        <div className="divPrincipal">
            <div className="divCard">
                <div className="caratula"></div>
                <div className="informacionComic">
                    <h3>Titulo del Comic</h3>
                    <div className="especificacionesComic">
                        <p className="tituloEspecificacion">Autor :</p><p>Paquito el Chocolatero</p>
                        <p className="tituloEspecificacion">Colección:</p><p>Natillas Danone</p>
                        <p className="tituloEspecificacion">Serie :</p><p>Panini</p>
                        <p className="tituloEspecificacion">Editorial :</p><p>HBO</p>
                    </div>
                </div>
                <div className="descripcionComic">
                    <h3>Descripción</h3>
                    <p>Esta es una descripcion de prueba para el comic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi harum exercitationem quisquam aliquam, eius commodi ea minus, molestias distinctio dolores, explicabo provident sed deleniti iste non iusto. Iure, similique voluptatem.
                    Aliquid, natus fugit ipsa maxime dolor, tenetur reiciendis quos sapiente iure fugiat obcaecati consequatur veritatis commodi assumenda aliquam ipsum earum molestiae beatae? Inventore natus optio totam nesciunt recusandae saepe quos.</p>
                </div>
            </div>
        </div>
    )
}

export default ComicCard

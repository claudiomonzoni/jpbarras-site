import Style from "../estilos/oferta.module.scss";

// import {useState} from 'react'

// console.log(abierto)

export default function Oferta({props, cierrate}) {
  const { Titulo, Cats, principale, texto, Imagenes } = props;

  return (
    <div id={Style.bandeja}>
      <div className={Style.ofertaInt}>
        <a className="cerrar" onClick={()=>{ cierrate()}}>
        <img src="/cerrar.svg" alt="close" />
        </a>
        { Imagenes[0] === undefined }
        <img src={`http://localhost/jpbarras/cockpit/storage/uploads/${principale.path}`} alt={Cats} />


        {Imagenes.map((ima, key) => (
          <img
            src={`http://localhost/jpbarras/cockpit/storage/uploads/${ima.path}`}
            alt={Cats}
            key={key}
          />
        ))}
        <div className={Style.bande}>
        <h2>{Titulo}</h2>
        <div dangerouslySetInnerHTML={{ __html: texto }}></div>
        </div>
      </div>
    </div>
  );
}


si me gusta el teclado, esta mas chirolis que el anterior, es cuestión de acostubrarse al tamaño y encontrar como se ponen la !"#$$%&/()=?]}+*{¨P",
import Style from "../estilos/oferta.module.scss";

export default function Oferta(props) {
  const { Titulo, Cats, principale, texto, Imagenes } = props.props;
  return (

    <div id={Style.bandeja}>

    <div className={Style.ofertaInt}>
    { Imagenes.map((ima, key) => <img src={`http://localhost/jpbarras/cockpit/storage/uploads/${ima.path}`} alt={ima.description} key={key} /> )}
      <h2>{Titulo}</h2>
      <div dangerouslySetInnerHTML={{ __html: texto }}></div>
    </div>
    </div>
  );
}

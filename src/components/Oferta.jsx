import Style from "../estilos/oferta.module.scss";
console.log(Style)

export default function Oferta(props) {
  const { Titulo, Cats, principale, texto, Imagenes } = props.props;
  return (
    <div className={Style.ofertaInt}>
   
    { Imagenes.map((ima, key) => <img src={`http://localhost/jpbarras/cockpit/storage/uploads/${ima.path}`} alt={ima.description} key={key} /> )}
      <h2>{Titulo}</h2>
      <div dangerouslySetInnerHTML={{ __html: texto }}></div>
    </div>
  );
}

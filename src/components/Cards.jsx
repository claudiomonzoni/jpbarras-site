// import style from '../estilos/card.scss';

const response = await fetch(
  "http://localhost/jpbarras/cockpit/api/content/items/Offres?locale=default",
  // "https://pruebaframer.000webhostapp.com/cms/api/content/items/Offres?locale=default",
  {
    method: "GET",
    headers: {
      "api-key": "USR-eb39971cef2baedcb9c137af2bb94ef5f4b16a3e",
    },
  }
);

const ofertaData = await response.json();
console.log(ofertaData);

export default function Cards() {
  return (
    <>
      {ofertaData.map((oferta, key) => (
          <div className="card" key={key}>
          <div>
            <img src="electromenager-a.webp" alt={oferta.Titulo} />
          </div>
          <div className="cat">{oferta.Cat}</div>
          <div className="conte">
            <h3>{oferta.Titulo}</h3>
            <p>
              {oferta.Texto}
            </p>
            <a href="#" className="cta">en savoir plus</a>
          </div>
        </div>

      ))}
    </>
  );
}



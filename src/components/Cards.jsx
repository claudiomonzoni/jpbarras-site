const response = await fetch(
//   "http://localhost/jpbarras/cockpit/api/content/items/Offres?locale=default",
  "https://pruebaframer.000webhostapp.com/cms/api/content/items/Offres?locale=default",
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
        <h2 key={key}> {oferta.Cat} </h2>
      ))}
    </>
  );
}

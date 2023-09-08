import React, { useEffect, useState } from "react";
import { slide } from "../js/glide";
import Oferta from "./Oferta";

export default function Shopcard({ idioma }) {

  const [abierto, setAbierto] = useState(false);
  const [props, setProps] = useState();
  const [lang, setLang] = useState(idioma);
  const [datos, setDatos] = useState([]);
  const control = new AbortController();

  const fetching = async (lang) => {
    switch (lang) {
      case "it":
        lang = "it_IT";
        break;
      case "en":
        lang = "en_EN";
        break;
      case "fr":
        lang = "default";
        break;
    }
    const response = await fetch(
      `https://www.jpbarras.ch/admin/api/content/items/Offres?locale=${lang}`,
      {
        method: "GET",
        headers: {
          "api-key": "USR-eb39971cef2baedcb9c137af2bb94ef5f4b16a3e",
        },
      }
    );
    const ofertaData = await response.json()
    .then((ofertaData)=>{
      console.log(ofertaData)
      setDatos(ofertaData);

      setTimeout(() => {
        slide()
      }, "500");
    })
  };

  useEffect(() => {
   
    fetching(lang);
    return () => {
      control.abort();
    };
  }, []);

  const btnOferta = (props) => {
    setAbierto(!abierto);
    setProps(props);
  };
  const cerrar = () => {
    setAbierto(false);
  };

  return (
    <>
      <section id="shophome">
        {abierto && <Oferta props={props} cierrate={cerrar} />}
        <div className="slide">
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
              {datos.length &&
                datos.map((oferta, key) => (
                  <div className="card" key={key}>
                    {console.log(oferta)}
                    <div>
                      <img
                        src={`http://www.jpbarras.ch/admin/storage/uploads/${oferta.principale.path}`}
                        alt={oferta.Titulo}
                      />
                    </div>
                    <div className="cat">{oferta.Cat}</div>
                    <div className="conte">
                      <h3>{oferta.Titulo}</h3>
                      <p>{oferta.extracto}</p>
                      <a
                        onClick={() => {
                          btnOferta(oferta);
                        }}
                        className="cta"
                      >
                        en savoir plus
                      </a>
                    </div>
                  </div>
                ))
            
                }
            </div>
          </div>

          <div data-glide-el="controls">
            <button data-glide-dir="<" className="btn circulo">
              <img src="der.svg" alt="arrow jpbarras" />
            </button>
            <button data-glide-dir=">" className="btn circulo">
              <img src="der.svg" alt="arrow jpbarras" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

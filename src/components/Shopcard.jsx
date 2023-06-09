import React, { useEffect, useState } from "react";
import { slide } from "../js/glide";
import Oferta from "./Oferta";

import i18next, {t} from "i18next";
// const rest = `http://www.jpbarras.ch/admin/api/content/items/Offres?locale=${lang}`;


const response = await fetch(
  // "http://localhost/jpbarras/cockpit/api/content/items/Offres?locale=default",
  "http://www.jpbarras.ch/admin/api/content/items/Offres?locale=default",
  {
    method: "GET",
    headers: {
      "api-key": "USR-eb39971cef2baedcb9c137af2bb94ef5f4b16a3e",
    },
  }
);

const ofertaData = await response.json();

export default function Shopcard() {
  const [abierto, setAbierto] = useState(false);
  const [props, setProps] = useState();

  useEffect(() => {
    slide();
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
              {ofertaData.map((oferta, key) => (
                <div className="card" key={key}>
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
              ))}
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

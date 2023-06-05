import React, { useEffect } from "react";
import { slide } from "../js/glide";
import "../estilos/card.module.scss";
import Oferta from "./Oferta";

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
export default function Shopcard() {
  function btnOferta(props) {
    // e.preventDefault();
    alert(props);
  }
  useEffect(() => {
    slide();
  }, []);

  return (
    <>
      <section id="shophome">
        <div className="slide">
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
              {ofertaData.map((oferta, key) => (
                <div className="card" key={key}>
                  <Oferta props={oferta}></Oferta>
                  <div>
                    <img
                      src={`http://localhost/jpbarras/cockpit/storage/uploads/${oferta.principale.path}`}
                      alt={oferta.Titulo}
                    />
                  </div>
                  <div className="cat">{oferta.Cat}</div>
                  <div className="conte">
                    <h3>{oferta.Titulo}</h3>
                    <p>{oferta.extracto}</p>
                    <a
                      href="#"
                      onClick={btnOferta(oferta.Titulo)}
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
            <button data-glide-dir="<" className="btn">
              <img src="der.svg" alt="arrow jpbarras" />
            </button>
            <button data-glide-dir=">" className="btn">
              <img src="der.svg" alt="arrow jpbarras" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

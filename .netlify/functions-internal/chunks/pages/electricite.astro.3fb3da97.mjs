import { $ as $$Hero, a as $$Layout } from './contact.astro.9301da54.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, d as renderComponent } from '../astro.1579373f.mjs';
/* empty css                                 */import { changeLanguage } from 'i18next';
/* empty css                                 */
const $$Astro$1 = createAstro();
const $$BannerNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BannerNav;
  const { imagen, encabezado, parrafo, liga } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div id="BannerNav" class="astro-2QE7G7KW">
    <div class="izq astro-2QE7G7KW">
        <img${addAttribute(imagen, "src")}${addAttribute(encabezado, "alt")} class="astro-2QE7G7KW">
    </div>
    <div class="der astro-2QE7G7KW">
        <div class="conte astro-2QE7G7KW">
            <h3 class="astro-2QE7G7KW"> ${encabezado} </h3>
            <p class="astro-2QE7G7KW">${unescapeHTML(parrafo)}</p>
            <a${addAttribute(liga, "href")} class="cta astro-2QE7G7KW">voir plus</a>
        </div>
    </div>
</div>`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/components/BannerNav.astro");

const $$Astro = createAstro();
const $$Electricite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Electricite;
  changeLanguage("fr");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "J.P. Barras Electricit\xE9 SA | \xC9lectricit\xE9", "description": "Notre \xE9quipe de sp\xE9cialistes vous accompagne dans tous vos projets et besoins li\xE9s \xE0 l'\xE9lectricit\xE9.", "class": "astro-W7I3S7NT" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, { "encabezado": "\xC9lectricit\xE9", "parrafo": "<b>Notre \xE9quipe de sp\xE9cialistes vous accompagne</b> dans tous vos projets et besoins li\xE9s \xE0 l'\xE9lectricit\xE9.", "imagenurl": "/electricite-home-jpbarras.webp", "home": "false", "class": "astro-W7I3S7NT" })}

  ${maybeRenderHead($$result2)}<div class="bandeja astro-W7I3S7NT">
    <div id="services" class="astro-W7I3S7NT">
      <div class="izq astro-W7I3S7NT">
        <div class="conte astro-W7I3S7NT">
          <h2 class="astro-W7I3S7NT">Services proposés</h2>
          <p class="astro-W7I3S7NT">
            Nous sommes à votre disposition <b class="astro-W7I3S7NT">
              pour vous conseiller et vous proposer des solutions</b> adaptées à vos besoins.
          </p>
        </div>
      </div>
      <div class="der astro-W7I3S7NT">
        <ul class="astro-W7I3S7NT">
          <li class="astro-W7I3S7NT">
            <img src="/ico-services-1.svg" alt="l'installations " class="astro-W7I3S7NT">
            <p class="astro-W7I3S7NT">l'installations ou la rénovation électrique</p>
          </li>
          <li class="astro-W7I3S7NT">
            <img src="/ico-services-2.svg" alt="la réparation " class="astro-W7I3S7NT">
            <p class="astro-W7I3S7NT">la réparation et l'entretien d'immeuble</p>
          </li>
          <li class="astro-W7I3S7NT">
            <img src="/ico-services-3.svg" alt="télécommunications " class="astro-W7I3S7NT">
            <p class="astro-W7I3S7NT">les télécommunications et l'internet</p>
          </li>
          <li class="astro-W7I3S7NT">
            <img src="/ico-services-4.svg" alt="OIBT " class="astro-W7I3S7NT">
            <p class="astro-W7I3S7NT">le contrôle OIBT</p>
          </li>
        </ul>
      </div>
    </div>

    <div id="contacto" class="astro-W7I3S7NT">
      <div class="izq astro-W7I3S7NT">
        <img src="/electricite-worker-jpbarras.webp" alt="electricite jp barras" class="astro-W7I3S7NT">
      </div>
      <div class="der astro-W7I3S7NT">
        <div class="conte astro-W7I3S7NT">
            <p class="astro-W7I3S7NT">
                Vous avez besoin de conseils ou de renseignements pour mener à bien
                votre projet? <b class="astro-W7I3S7NT">N’hésitez pas à nous contacter.</b>
              </p>
              <div class="formu astro-W7I3S7NT">
                <input type="text" name="prenom" id="prenom" placeholder="Prénom" class="astro-W7I3S7NT">
                <input type="text" name="nom" id="nom" placeholder="Nom" class="astro-W7I3S7NT">
                <input type="text" name="adresse" id="adresse" placeholder="Adresse" class="astro-W7I3S7NT">
                <input type="text" name="ville" id="ville" placeholder="Ville" class="astro-W7I3S7NT">
                <input type="text" name="email" id="email" placeholder="Email" class="astro-W7I3S7NT">
                <textarea name="commentaires" id="commentaires" cols="30" rows="10" placeholder="Commentaires" class="astro-W7I3S7NT"></textarea>
                <button class="boton astro-W7I3S7NT">Envoyer</button>
                <!-- Nous vous remercions pour votre message. Notre équipe vous contactera dans les meilleures délais. -->
              </div>
        </div>
      </div>
    </div>

    ${renderComponent($$result2, "BannerNav", $$BannerNav, { "encabezado": "\xC9lectrom\xE9nager", "parrafo": "Nous vous conseillons dans le choix de vos appareils...", "liga": "/electromenager", "imagen": "/electromenager-main-section.webp", "class": "astro-W7I3S7NT" })}
  </div>
` })}`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/pages/electricite.astro");

const $$file = "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/pages/electricite.astro";
const $$url = "/electricite";

const electricite = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Electricite,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BannerNav as $, electricite as e };

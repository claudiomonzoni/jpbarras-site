import p, { changeLanguage } from 'i18next';
import fsBackend from 'i18next-fs-backend';
import module2 from 'module';
import path2 from 'path';
import * as url2 from 'url';
import '@proload/core';
import '@proload/plugin-tsm';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, f as renderHead, u as unescapeHTML, g as defineScriptVars } from '../astro.1579373f.mjs';
/* empty css                             *//* empty css                             */
module2.createRequire(import.meta.url);
      const __filename = url2.fileURLToPath(import.meta.url);
      path2.dirname(__filename);
      
var A=e=>{for(let n in e)n==="routes"&&(y(e[n])),e[n];},y=(e,r=[],n=[],s=null)=>{let o=s||{};for(let t in e)if(typeof e[t]=="object"&&e[t]!==null)y(e[t],[...r,t],[...n,Object.prototype.hasOwnProperty.call(e[t],"index")?e[t].index:t],o);else {let l="/"+r.join("/"),i="/"+n.join("/");t==="index"?(o[l]=i,l+="/"+t,i+="/"+t,o[l]=i):(l+="/"+t,i+="/"+e[t],o[l]=i);}return o};function fe(e){A(e);}

p.use(fsBackend).init({"supportedLngs": ["fr","en","it",],"fallbackLng": ["fr","en","it",],"ns": "translation","defaultNS": "translation","initImmediate": false,"backend": {"loadPath": "C:/Users/claud/OneDrive/Escritorio/jpbarras/public/locales/{{lng}}/{{ns}}.json",},});fe({"defaultLocale": "fr","locales": ["fr","en","it",],"namespaces": "translation","defaultNamespace": "translation","load": ["server",],"routes": {},"flatRoutes": {},"showDefaultLocale": false,"trailingSlash": "ignore","resourcesBasePath": "/locales",});

const $$Astro$5 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Nav;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`${maybeRenderHead($$result)}<nav class="astro-DMQPWCEC">
  <button class="menu-toggle astro-DMQPWCEC">Menu</button>
  <a href="/" class="astro-DMQPWCEC">
    <img src="/jpbarras-logo.svg" alt="JPBarras electricite in Crans Montana" id="logo" class="astro-DMQPWCEC">
  </a>
  <ul class="astro-DMQPWCEC">

    <li class="astro-DMQPWCEC"><a href="/electricite"${addAttribute((currentPath === "electricite" ? "selected" : "") + " astro-DMQPWCEC", "class")}>Électricité</a></li>
    <li class="astro-DMQPWCEC"><a href="/electromenager"${addAttribute((currentPath === "electromenager" ? "selected" : "") + " astro-DMQPWCEC", "class")}>Électroménager</a></li>
    <li class="astro-DMQPWCEC"><a href="/shopincrans"${addAttribute((currentPath === "shopincrans" ? "selected" : "") + " astro-DMQPWCEC", "class")}>Shop in Crans</a></li>
    <li class="astro-DMQPWCEC"><a href="/services"${addAttribute((currentPath === "services" ? "selected" : "") + " astro-DMQPWCEC", "class")}>Services</a></li>
    <li class="astro-DMQPWCEC"><a href="/contact"${addAttribute((currentPath === "contact" ? "selected" : "") + " astro-DMQPWCEC", "class")}>Contact</a></li>
  </ul>
  <ul class="astro-DMQPWCEC">
    <li class="astro-DMQPWCEC"><a href="#" class="astro-DMQPWCEC">it</a></li>
    <li class="astro-DMQPWCEC"><a href="#" class="astro-DMQPWCEC">en</a></li>
  </ul>
</nav>`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/components/Nav.astro");

const $$Astro$4 = createAstro();
const $$Foot = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Foot;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-YI6PQC3L">
  <div class="izq astro-YI6PQC3L">
    <img src="/jpbarras-logo-ompleto-footer.svg" alt="JP Barrass Electricité SA, Shop in Crans" class="astro-YI6PQC3L">
  </div>
  <div class="der astro-YI6PQC3L">
    <div class="astro-YI6PQC3L">

      <a href="tel:0274813956" class="tel astro-YI6PQC3L">027 481 39 56</a>
      <ul class="astro-YI6PQC3L">
        <li class="astro-YI6PQC3L">
          <img src="/icon-email.svg" alt="email J.P. Barras" class="astro-YI6PQC3L"><a href="mailto:shopincrans@jpbarras.ch" class="astro-YI6PQC3L">shopincrans@jpbarras.ch</a>
        </li>
        <li class="astro-YI6PQC3L">
          <img src="/icon-marker.svg" alt="J.P. Barras location" class="astro-YI6PQC3L"><a href="https://www.google.com/search?sxsrf=ALiCzsYK4HDvAZ9dYvH9HckPt2-Nf_Ll0g:1670368023075&q=Quincaillerie+Shop+in+Crans+%26+Jean-Paul+Barras+Electricit%C3%A9&ludocid=14600633811878628485&gsas=1&lsig=AB86z5V-lhW7-NM2PJ3RCKNadcMz&sa=X&ved=2ahUKEwij_aLljeb7AhVML0QIHUw9Ce8QoAJ6BAgTEAw&biw=1706&bih=883&dpr=2.25" target="_blank" class="astro-YI6PQC3L">Grand-Place 7 - Crans-Montana</a>
        </li>
      </ul>
      <ul class="astro-YI6PQC3L">
        <li class="astro-YI6PQC3L">
          <a href="#" target="_blank" class="astro-YI6PQC3L">
            <img src="/icon-facebook.svg" alt="facebook" class="astro-YI6PQC3L">
          </a>
          <a href="#" target="_blank" class="astro-YI6PQC3L">
            <img src="/icon-instagram.svg" alt="instagram" class="astro-YI6PQC3L">
          </a>
          <h4 class="astro-YI6PQC3L">Suivez-nous</h4>
        </li>
      </ul>
    </div>
  </div>
</footer>`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/components/Foot.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="fr">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/svg+xml" href="/favicon.svg">\n		<meta name="generator"', '>\n		<meta name="description"', ">\n		<title>", "</title>\n	", '</head>\n	<body>\n		<div class="bandeja">\n			', "\n		</div>\n		", "\n		", '\n	<script src="/app.js"><\/script>\n</body></html>'])), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), title, renderHead($$result), renderComponent($$result, "Nav", $$Nav, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Foot", $$Foot, {}));
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/layouts/Layout.astro");

const $$Astro$2 = createAstro();
const $$Carrusel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Carrusel;
  return renderTemplate`${maybeRenderHead($$result)}<div class="scroll-image swiper astro-SXGVWAZN">
  <div class="swiper-wrapper astro-SXGVWAZN">
    <img src="carrusel-home-jpbarras-1.webp" alt="JPBarras Crans montana" class="swiper-slide astro-SXGVWAZN">
    <img src="carrusel-home-jpbarras-2.webp" alt="JPBarras Crans montana" class="swiper-slide astro-SXGVWAZN">
    <img src="carrusel-home-jpbarras-3.webp" alt="JPBarras Crans montana" class="swiper-slide astro-SXGVWAZN">
  </div>
</div>`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/components/Carrusel.astro");

const $$Astro$1 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { encabezado, parrafo, imagenurl, home } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section id="hero" class="astro-BBE6DXRZ">
  <div class="izq astro-BBE6DXRZ">
    <div class="bandeja astro-BBE6DXRZ">
      <h1 class="astro-BBE6DXRZ">${unescapeHTML(encabezado)}</h1>
      <p class="astro-BBE6DXRZ">${unescapeHTML(parrafo)}</p>
    </div>
  </div>
  <div class="der astro-BBE6DXRZ">
    ${home === "true" ? renderTemplate`${renderComponent($$result, "Carrusel", $$Carrusel, { "class": "astro-BBE6DXRZ" })}` : renderTemplate`<img${addAttribute(imagenurl, "src")}${addAttribute(encabezado, "alt")} class="astro-BBE6DXRZ">`}
 
  
    
  </div>
</section>`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/components/Hero.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const lat = "46.307450";
  const lang = "7.471120";
  changeLanguage("fr");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "J.P. Barras Electricit\xE9 SA | Contact", "description": "Lorem ipsum dolor sit amet consectetur. Tincidunt ac et leo leo arcu commodo id vitae aliquam", "class": "astro-UW5KDBXL" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["\n  ", "\n\n  ", '<div class="bandeja astro-UW5KDBXL">\n    <div id="contacto" class="astro-UW5KDBXL">\n      <div id="contaizq" class="astro-UW5KDBXL">\n        <img src="/jpbarras-isotipo.svg" alt="JP Barras contact" class="astro-UW5KDBXL">\n      </div>\n      <div id="contader" class="astro-UW5KDBXL">\n        <div class="conte astro-UW5KDBXL">\n          <h2 class="astro-UW5KDBXL">Heures d\u2019ouverture</h2>\n          <span class="astro-UW5KDBXL">(varie selon la saison)</span>\n          <ul class="astro-UW5KDBXL">\n            <li class="astro-UW5KDBXL">\n              <b class="astro-UW5KDBXL">Du lundi au vendredi :</b>\n              <br class="astro-UW5KDBXL">\n              8h00 -12h30 14h30-19h00\n            </li>\n            <li class="astro-UW5KDBXL">\n              <b class="astro-UW5KDBXL">Samedi</b>\n              <br class="astro-UW5KDBXL">\n              8h00 -12h30 14h30-18h30\n            </li>\n          </ul>\n        </div>\n        <div class="conte astro-UW5KDBXL">\n          <ul class="astro-UW5KDBXL">\n            <li class="astro-UW5KDBXL">\n              <a href="mailto:shopincrans@jpbarras.ch" class="astro-UW5KDBXL"><img src="/icon-email.svg" alt="JP Barras email" class="astro-UW5KDBXL">\n                <b class="astro-UW5KDBXL">shopincrans@jpbarras.ch</b>\n              </a>\n            </li>\n            <li class="astro-UW5KDBXL">\n              <a href="#" class="astro-UW5KDBXL">\n                <img src="/icon-facebook.svg" alt="JP Barras Facebook" class="astro-UW5KDBXL">\n                <b class="astro-UW5KDBXL">/suivez-nous sur</b>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div id="contacto2" class="astro-UW5KDBXL">\n      <div id="mapa" class="astro-UW5KDBXL">aqui el mapa</div>\n      <div id="formulario" class="astro-UW5KDBXL">\n        <div class="conte astro-UW5KDBXL">\n          <p class="astro-UW5KDBXL">\n            <b class="astro-UW5KDBXL"> Lorem ipsum dolor sit amet</b> consectetur adipisicing elit. Dolorem\n            doloribus perspiciatis quisquam.\n          </p>\n          <div class="formu astro-UW5KDBXL">\n            <input type="text" name="prenom" id="prenom" placeholder="Pr\xE9nom" class="astro-UW5KDBXL">\n            <input type="text" name="nom" id="nom" placeholder="Nom" class="astro-UW5KDBXL">\n            <input type="text" name="adresse" id="adresse" placeholder="Adresse" class="astro-UW5KDBXL">\n            <input type="text" name="ville" id="ville" placeholder="Ville" class="astro-UW5KDBXL">\n            <input type="text" name="email" id="email" placeholder="Email" class="astro-UW5KDBXL">\n            <textarea name="commentaires" id="commentaires" cols="30" rows="10" placeholder="Commentaires" class="astro-UW5KDBXL"></textarea>\n            <button class="boton astro-UW5KDBXL">Envoyer</button>\n            <!-- Nous vous remercions pour votre message. Notre \xE9quipe vous contactera dans les meilleures d\xE9lais. -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \n\n  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==" crossorigin="">\n\n  <script src="/leaflet.js"><\/script>\n\n  <script>(function(){', `
    var map = L.map("mapa").setView([lat, lang], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    var circle = L.circle([lat, lang], {
      color: "red",
      fillColor: "#E76128",
      fillOpacity: 0.5,
      radius: 100,
    }).addTo(map);
  })();<\/script>
`])), renderComponent($$result2, "Hero", $$Hero, { "encabezado": "Contact", "parrafo": "Lorem ipsum dolor sit amet consectetur. Tincidunt ac et leo leo arcu commodo id vitae aliquam", "imagenurl": "/contact-main-section.webp", "home": "false", "class": "astro-UW5KDBXL" }), maybeRenderHead($$result2), defineScriptVars({ lat, lang })) })}`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/pages/contact.astro");

const $$file = "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
      __proto__: null,
      default: $$Contact,
      file: $$file,
      url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, $$Layout as a, contact as c };

import { $ as $$Hero, a as $$Layout } from './contact.astro.9301da54.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.1579373f.mjs';
import { $ as $$BannerNav } from './electricite.astro.3fb3da97.mjs';
import { $ as $$Bloque } from './index.astro.dcd0b3ca.mjs';
import { changeLanguage } from 'i18next';
/* empty css                              */import 'i18next-fs-backend';
import 'module';
import 'path';
import 'url';
import '@proload/core';
import '@proload/plugin-tsm';
/* empty css                             *//* empty css                             */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
/* empty css                                 *//* empty css                                 *//* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  changeLanguage("fr");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "J.P. Barras Electricit\xE9 SA | Services", "description": "Service de gravure, de copie de cl\xE9s minute et de d\xE9p\xF4t de gaz", "class": "astro-UCD2PS2B" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, { "encabezado": "Services", "parrafo": "Nous offrons \xE9galement, au sein de notre magasin Shop in Crans, un <b>service de gravure, de copie de cl\xE9s minute et de d\xE9p\xF4t de gaz.</b>", "imagenurl": "/services-main-section.webp", "home": "false", "class": "astro-UCD2PS2B" })}


    ${maybeRenderHead($$result2)}<div class="bandeja astro-UCD2PS2B">
      <div class="zigzag astro-UCD2PS2B">

        
        ${renderComponent($$result2, "Bloque", $$Bloque, { "imagen": "/service-gravure.webp", "encabezado": "Gravure", "parrafo": "<b>Nos sp\xE9cialistes vous proposent un service de gravure</b> de qualit\xE9 sur diff\xE9rents supports comme par exemple :  <ul class='disc'> <li> plaquette de bo\xEEte aux lettres </li> <li>plaquette de sonnette et interphone </li> <li>plaquette \xE0 la d\xE9coupe sur mesure </li> <li>gravure de m\xE9dailles pour animaux </li></ul>", "liga": "#", "class": "astro-UCD2PS2B" })}
        
        ${renderComponent($$result2, "Bloque", $$Bloque, { "imagen": "/service-copie-de-cles-minute.webp", "encabezado": "Copie de cl\xE9s minute", "parrafo": "Vous avez besoin d\u2019un double de cl\xE9? <b>Chez Shop In Crans nous reproduisons vos cl\xE9s</b> selon nos nombreux mod\xE8les disponibles sur place. Qu\u2019il s\u2019agisse d\u2019une porte d\u2019entr\xE9e, une porte de cave ou d\u2019une bo\xEEte aux lettres, nous r\xE9pondons \xE0 vos besoins. </br><b>Nous pouvons \xE9galement commander vos cl\xE9s sp\xE9ciales ou s\xE9curis\xE9es</b> (uniquement sur pr\xE9sentation des documents exig\xE9s).", "liga": "#", "class": "astro-UCD2PS2B" })}
        
        ${renderComponent($$result2, "Bloque", $$Bloque, { "imagen": "/service-shop-in-crans-depot-de-gaz.webp", "encabezado": "D\xE9p\xF4t de gaz", "parrafo": "Gr\xE2ce au service d\xE9p\xF4t-gaz de Shop in Crans vous ne tomberez plus \xE0 court de gaz pendant la cuisson de votre entrec\xF4te. <b>Vous pouvez acheter ou \xE9changer, dans notre magasin, vos bouteilles de gaz</b> m\xE9talliques ou plastiques. Diff\xE9rentes tailles sont disponibles.", "liga": "#", "class": "astro-UCD2PS2B" })}
        
      </div>
     
 


    ${renderComponent($$result2, "BannerNav", $$BannerNav, { "encabezado": "Contact", "parrafo": "Lorem ipsum dolor sit amet consectetur. Tincidunt ac et leo leo arcu commodo id vitae aliquam", "liga": "/contact", "imagen": "/contact-main-section.webp", "class": "astro-UCD2PS2B" })}
  </div>
` })}`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/pages/services.astro");

const $$file = "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };

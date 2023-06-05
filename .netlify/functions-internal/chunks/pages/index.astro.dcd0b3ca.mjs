import { $ as $$Hero, a as $$Layout } from './contact.astro.9301da54.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, d as renderComponent } from '../astro.1579373f.mjs';
import { changeLanguage, t } from 'i18next';
/* empty css                           *//* empty css                           */
const $$Astro$3 = createAstro();
const $$Bloque = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Bloque;
  const { imagen, encabezado, parrafo, liga } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="bloque astro-F3ZILCNT">
  <div class="izq astro-F3ZILCNT">
    <img${addAttribute(imagen, "src")}${addAttribute(encabezado, "alt")} class="astro-F3ZILCNT">
  </div>
  <div class="der astro-F3ZILCNT">
    <div class="conte astro-F3ZILCNT">
      <h2 class="astro-F3ZILCNT">${encabezado}</h2>
      <p class="astro-F3ZILCNT">${unescapeHTML(parrafo)}</p>
    ${liga === "#" ? "" : renderTemplate`<a${addAttribute(liga, "href")} class="cta astro-F3ZILCNT">en savoir plus</a>`}
    
    </div>
  </div>
</div>`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/components/Bloque.astro");

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  changeLanguage("fr");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "J.P. Barras Electricit\xE9 SA", "description": "J.P. Barras Electricit\xE9 SA vous propose diff\xE9rents services dans le domaine de l\u2019\xE9lectricit\xE9 comme de l\u2019\xE9lectrom\xE9nager ainsi qu\u2019un magasin, le Shop in Crans," }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, { "encabezado": "<span class='reset'>Tout pour</span> chez vous", "parrafo": "<b>J.P. Barras Electricit\xE9 SA</b> vous propose diff\xE9rents <b>services</b> dans le domaine de <b>l\u2019\xE9lectricit\xE9 comme de l\u2019\xE9lectrom\xE9nager ainsi qu\u2019un magasin, le Shop in Crans</b>, situ\xE9 au c\u0153ur de la station d\xE9di\xE9 notamment \xE0 la quincaillerie et \xE0 <b>l\u2019art de la table</b>.", "imagenurl": "/carrusel-home-jpbarras-1.webp", "home": "true" })}

  ${maybeRenderHead($$result2)}<div class="bandeja">
    <h2>Shop in Crans - Actualités</h2>
  </div>
  ${renderComponent($$result2, "Shopcard", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/components/Shopcard.jsx", "client:component-export": "default" })}
  
  <div class="bandeja zigzag">
    ${renderComponent($$result2, "Bloque", $$Bloque, { "imagen": "/electricite-home-jpbarras.webp", "encabezado": "\xC9lectricite", "parrafo": "<b>Notre \xE9quipe vous accompagne</b> dans tous vos projets et besoins li\xE9s \xE0 l\u2019\xE9lectricit\xE9. ", "liga": "/electricite" })}

    ${renderComponent($$result2, "Bloque", $$Bloque, { "imagen": "/electromenager-home-jpbarras.webp", "encabezado": "\xC9lectrom\xE9nager", "parrafo": "Nous vous conseillons dans le choix de vos appareils, <b>assurons la pose et l\u2019entretien de votre \xE9lectrom\xE9nager.</b>  ", "liga": "/electromenager" })}

    ${renderComponent($$result2, "Bloque", $$Bloque, { "imagen": "/shop-in-crans-home.webp", "encabezado": "Shop in Crans", "parrafo": "<b>Plus de 10'000 articles, un service de qualit\xE9 et personnalis\xE9</b>, voici ce que vous trouverez dans notre magasin de 600m2 Shop in Crans au centre de la station de Crans Montana.  ", "liga": "/shopincrans" })}

    ${renderComponent($$result2, "Bloque", $$Bloque, { "imagen": "/services-jpbarras.webp", "encabezado": "Service", "parrafo": "Nous offrons \xE9galement, dans notre magasin, un <b>service de gravure, de copie de cl\xE9s minute</b> et de d\xE9p\xF4t de gaz.", "liga": "/services" })}
  </div>
` })}`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/pages/index.astro");

const $$file$1 = "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Shopcards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Shopcards;
  return renderTemplate`${maybeRenderHead($$result)}<section id="shophome" class="astro-EORQFDCJ">
  <div class="slide astro-EORQFDCJ">
    <div class="glide__track astro-EORQFDCJ" data-glide-el="track">
      <div class="glide__slides astro-EORQFDCJ">
        ${renderComponent($$result, "Cards", null, { "client:only": true, "client:component-hydration": "only", "class": "astro-EORQFDCJ", "client:component-path": "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/components/Cards", "client:component-export": "default" })}
      </div>
    </div>

    <div data-glide-el="controls" class="astro-EORQFDCJ">
      <button data-glide-dir="<" class="btn astro-EORQFDCJ">
        <img src="der.svg" alt="arrow jpbarras" class="astro-EORQFDCJ">
      </button>
      <button data-glide-dir=">" class="btn astro-EORQFDCJ">
        <img src="der.svg" alt="arrow jpbarras" class="astro-EORQFDCJ">
      </button>
    </div>
  </div>
</section>

<!-- los estilos de card estan en globales  -->`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/components/Shopcards.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "J.P. Barras Electricit\xE9 SA", "description": "J.P. Barras Electricit\xE9 SA vous propose diff\xE9rents services dans le domaine de l\u2019\xE9lectricit\xE9 comme de l\u2019\xE9lectrom\xE9nager ainsi qu\u2019un magasin, le Shop in Crans," }, { "default": ($$result2) => renderTemplate`
	
	${renderComponent($$result2, "Hero", $$Hero, { "encabezado": t("home.h1"), "parrafo": "EN <b>J.P. Barras Electricit\xE9 SA</b> vous propose diff\xE9rents <b>services</b> dans le domaine de <b>l\u2019\xE9lectricit\xE9 comme de l\u2019\xE9lectrom\xE9nager ainsi qu\u2019un magasin, le Shop in Crans</b>, situ\xE9 au c\u0153ur de la station d\xE9di\xE9 notamment \xE0 la quincaillerie et \xE0 <b>l\u2019art de la table</b>.", "imagenurl": "carrusel-home-jpbarras-1.webp" })}

	${maybeRenderHead($$result2)}<div class="bandeja">
		<h2> ${t("home.actualites")}</h2>
	</div>
${renderComponent($$result2, "Shopcards", $$Shopcards, {})}
<div class="bandeja zigzag">

	${renderComponent($$result2, "Bloque", $$Bloque, { "imagen": "electricite-home-jpbarras.webp", "encabezado": "\xC9lectricite", "parrafo": "<b>Notre \xE9quipe vous accompagne</b> dans tous vos projets et besoins li\xE9s \xE0 l\u2019\xE9lectricit\xE9. ", "liga": "#" })}

	${renderComponent($$result2, "Bloque", $$Bloque, { "imagen": "electromenager-home-jpbarras.webp", "encabezado": "\xC9lectrom\xE9nager", "parrafo": "Nous vous conseillons dans le choix de vos appareils, <b>assurons la pose et l\u2019entretien de votre \xE9lectrom\xE9nager.</b>  ", "liga": "#" })}

	${renderComponent($$result2, "Bloque", $$Bloque, { "imagen": "shop-in-crans-home.webp", "encabezado": "Shop in Crans", "parrafo": "<b>Plus de 10'000 articles, un service de qualit\xE9 et personnalis\xE9</b>, voici ce que vous trouverez dans notre magasin de 600m2 Shop in Crans au centre de la station de Crans Montana.  ", "liga": "#" })}

	${renderComponent($$result2, "Bloque", $$Bloque, { "imagen": "services-jpbarras.webp", "encabezado": "Service", "parrafo": "Nous offrons \xE9galement, dans notre magasin, un <b>service de gravure, de copie de cl\xE9s minute</b> et de d\xE9p\xF4t de gaz.", "liga": "#" })}
</div>
` })}`;
}, "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/pages/en/index.astro");

const $$file = "C:/Users/claud/OneDrive/Escritorio/jpbarras/src/pages/en/index.astro";
const $$url = "/en";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Bloque as $, index as a, index$1 as i };

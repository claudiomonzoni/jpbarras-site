/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "fr",
  locales: ["fr", "en", "it"],
  routes: {
    en: {
      electricite: "electricity",
      electromenager: "home-appliance",
      shopincrans : "shopincrans",
      services : "services",
      contact : "contacts",
    },
    it: {
      electricite: "elettricita",
      electromenager: "elettrodomestico",
      shopincrans : "shopincrans",
      services : "servizi",
      contact : "contatto",
    },
  },
};

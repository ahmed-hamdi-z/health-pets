// import lztPdf from "../assets/pdf/lzt.pdf";
// import catalogPdf from "../assets/pdf/dar-alnawati-catalog.pdf";
// import brinePdf from "../assets/pdf/brine.pdf";
// import tubesPdf from "../assets/pdf/tubes.pdf";
// import venturePdf from "../assets/pdf/venture.pdf";

const appRoutes = {
  home: "/",
  about: "/about-us",
  products: "/our-products",
  services: "/our-services",
  treatments: "/our-treatments",
  blogs: "/blogs",
  articlesQuery: {
    ref: "/articles?ref=",
    path: "/articles",
  },
  partners: "/partners",
  contact: "/contact",
};

const apiRoutes = {
  contact: "/contact",
};

const info = {
  email: "info@healthypets.com.sa",
  phone: "+966 00 000 000",
  whatsapp: "https://wa.me/0000 00 00",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  location: {
    en: "",
    ar: "",
    maps: "https://maps.app.goo.gl/",
  },
  // products: {
  //   catalog: catalogPdf,
  //   lzt: lztPdf,
  //   brine: brinePdf,
  //   tubes: tubesPdf,
  //   venture: venturePdf,
  // },
};

export { appRoutes, info, apiRoutes };

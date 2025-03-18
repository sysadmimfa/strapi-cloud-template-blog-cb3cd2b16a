module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  //'strapi::cors',
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://imfa-website.vercel.app",
        "https://www.imfa-website.vercel.app",
        "http://localhost:3000",
        "http://localhost:3001",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: "*",
      // headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

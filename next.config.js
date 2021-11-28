const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    locales: ["en", "ru"],
    defaultLocale: "ru",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

// const configs = require("@snowcoders/renovate-config");

module.exports = {
  // The below is the same as spreading this object, I'm typing it out here to be easier to debug
  //   ...configs.jest,
  collectCoverage: true,
  preset: "ts-jest",
  roots: ["<rootDir>/src/"],
  testURL: "http://localhost/",

  moduleNameMapper: {
    "\\.(scss)$": "<rootDir>/mocks/style-mock.js",
  },
};

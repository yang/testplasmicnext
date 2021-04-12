const plasmic = require("@plasmicapp/loader/next");
const withPlasmic = plasmic({
  dir: __dirname,                           // The root directory of your project.
  projects: ["asqKkLevLrSacxedRcECnU"],   // An array of project ids.
});

module.exports = withPlasmic({
  // Your NextJS config.
  target: "serverless",
});

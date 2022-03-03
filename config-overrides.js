// eslint-disable-next-line @typescript-eslint/no-var-requires
const rewireStyledComponents = require("react-app-rewire-styled-components");

module.exports = {
  webpack: function (config, env) {
    if (env === "development") {
      config = rewireStyledComponents(config, env);
    }

    return config;
  },
};

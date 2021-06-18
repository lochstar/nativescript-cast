const webpackConfig = require("./webpack.config");

module.exports = env => {
  env = env || {};
  env.appComponents = env.appComponents || [];
  if (env.android) {
    env.appComponents.push("@codelab/nativescript-cast/cast-options-provider");
  }

  const config = webpackConfig(env);
  return config;
};

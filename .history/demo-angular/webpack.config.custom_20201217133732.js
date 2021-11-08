const webpackConfig = require("./webpack.config");

module.exports = env => {
  env = env || {};
  env.appComponents = env.appComponents || [];
  if (env.android) {
    console.log('pushit!')
    console.log('pushit!')
    console.log('pushit!')
    console.log('pushit!')
    console.log('pushit!')
    console.log('pushit!')
    console.log('pushit!')
    console.log('pushit!')
    console.log('pushit!')
    console.log('pushit!')
    env.appComponents.push("@codelab/nativescript-cast/cast-options-provider.android");
  }

  const config = webpackConfig(env);
  return config;
};

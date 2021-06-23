/**
 * This optionally provides typehints
 * this requires "@nativescript/webpack" to be a dependency (dev)
 *
 * @param {typeof import("@nativescript/webpack")} webpack
 */
 module.exports = webpack => {
   const { env } = webpack

  if (env.android) {
    env.appComponents = (env.appComponents || []).concat(['@codelab/nativescript-cast/cast-options-provider.android'])
  }
}

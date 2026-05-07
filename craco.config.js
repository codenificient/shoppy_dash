// craco.config.js
//
// 1. PostCSS / Tailwind wiring (existing).
// 2. Drop fork-ts-checker-webpack-plugin from CRA's webpack pipeline.
//
//    Why: this project has zero TypeScript files (.ts / .tsx). CRA v5 still
//    bundles fork-ts-checker-webpack-plugin@6.5.3 unconditionally and that
//    plugin's transitive ajv@6 + ajv-keywords@3 chain crashes on Node 22 at
//    extendFormats (Cannot read properties of undefined (reading 'date')).
//    Forcing schema-utils@4 into the chain breaks fork-ts-checker's old
//    default-export `validateOptions` import. Easiest fix is to remove a
//    plugin that does no work for a JS-only project.

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins = (webpackConfig.plugins || []).filter(
        (p) => p && p.constructor && p.constructor.name !== "ForkTsCheckerWebpackPlugin"
      )
      return webpackConfig
    },
  },
}

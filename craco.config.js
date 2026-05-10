// craco.config.js
//
// Single-purpose: drop fork-ts-checker-webpack-plugin from CRA's webpack
// pipeline.
//
// Why: this project has zero TypeScript files (.ts / .tsx). CRA v5 still
// bundles fork-ts-checker-webpack-plugin@6.5.3 unconditionally and that
// plugin's transitive ajv@6 + ajv-keywords@3 chain crashes on Node 22 at
// extendFormats (Cannot read properties of undefined (reading 'date')).
// Forcing schema-utils@4 into the chain breaks fork-ts-checker's old
// default-export `validateOptions` import. Easiest fix is to remove a
// plugin that does no work for a JS-only project.
//
// PostCSS / Tailwind wiring lives in ./postcss.config.js — NOT here. The
// previous incarnation declared style.postcss.plugins too, but with
// @craco/craco@7 + react-scripts@5 that injection silently no-ops on
// production builds (dev's loader resolves config differently, so dev
// looked fine). Result was index.css's @tailwind directives passing
// through unprocessed and the production CSS bundle dropping to 1.3KB
// with zero utility classes. Defining the pipeline in postcss.config.js
// — which CRA's postcss-loader unconditionally reads — restores it.
// Don't add style.postcss back here without re-testing production output.

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins = (webpackConfig.plugins || []).filter(
        (p) => p && p.constructor && p.constructor.name !== "ForkTsCheckerWebpackPlugin"
      )
      return webpackConfig
    },
  },
}

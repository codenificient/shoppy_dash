// Top-level PostCSS config consumed by CRA v5's postcss-loader.
//
// Why this exists when craco.config.js already declares the same plugins:
// craco's `style.postcss.plugins` setting *should* inject these into CRA's
// PostCSS pipeline, but in practice with @craco/craco@7 + react-scripts@5
// the injection silently no-ops on the production build (development build
// works because dev's postcss-loader has different option resolution).
// Result was that `@tailwind base/components/utilities` directives in
// index.css passed through unprocessed and the entire utility set was
// missing from the production CSS bundle (1.3KB total, 0 utility classes).
//
// CRA's postcss-loader unconditionally reads ./postcss.config.js if it
// exists, regardless of craco. Defining the chain here makes the fix
// robust to whatever craco may or may not be doing.
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

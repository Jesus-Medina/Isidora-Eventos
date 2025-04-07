import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"
import { resolve } from "path"

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        menu: resolve(__dirname, "pages/menu.html"),
        // Agrega aquí otros archivos HTML que necesites construir
        legal: resolve(__dirname, "pages/legal.html"),
      },
    },
  },
  plugins: [
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
  ],
})


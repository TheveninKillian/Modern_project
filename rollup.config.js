import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import {
  terser
} from "rollup-plugin-terser";

export default {
  input: "js/index.js",
  output: {
    format: "esm",
    file: "dist/index.esm.js",
  },
  external: ["smartcrop"],
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    terser()
  ]
};
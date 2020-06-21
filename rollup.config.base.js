import scss from "rollup-plugin-scss";
import common from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  external: ["react", "react-dom", "tslib"],
  input: "./src/component.tsx",
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].js",
      format: "es",
    },
  ],
  plugins: [
    resolve(),
    common(),
    scss({
      output: "./dist/styles.css",
    }),
  ],
};

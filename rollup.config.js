import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const pkg = require("./package.json");

const {
    name,
    main,
    module : esm,
} = pkg;

export default {
    input    : "index.js",
    external : [ /@babel\/runtime/ ],
    output   : [
        {
            file   : esm,
            format : "es",
        },
        {
            file    : main,
            format  : "cjs",
            name,
            exports : "default",
        },
    ],
    plugins : [
        resolve({
            browser : false,
        }),
        commonjs(),
        terser(),
        json(),
        babel(),
    ],
};

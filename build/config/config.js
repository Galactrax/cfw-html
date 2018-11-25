import resolve from 'rollup-plugin-node-resolve';

const output = [{
        name: "html",
        file: "./build/html.js",
        format: "iife",
        exports:"named"
    },{
        name: "html_cjs",
        file: "./build/html-cjs.js",
        format: "cjs",
        exports:"named"
    }]

export default {
    input: "./source/html.mjs",
    treeshake: false,
    output,
    plugins: [resolve({jail:"",modulesOnly: true})]
};

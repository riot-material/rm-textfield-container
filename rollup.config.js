const riot = require("rollup-plugin-riot");

export default [
    {
        input: "src/index.riot",
        plugins: [
            riot()
        ],
        output: [
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                name: "riotMaterial.components.textfieldContainer",
                file: "dist/index.js",
                format: "umd"
            }
        ]
    }
];
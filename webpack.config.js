var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist" ),
        filename: "bundle.js",
    },
    watch: true,
    module: {
        loaders: [
            {
                loader: "babel-loader",
                test: path.join(__dirname, "src"),
                query: {
                    presets: "es2015",
                },
            },
        ],
    },
    stats: {
        colors: true,
    },
    devtool: "source-map",
};

/**
 * webpack.config.dist.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname,"js"),
    entry: [
        "./boxes"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "boxes.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel?presets[]=es2015"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

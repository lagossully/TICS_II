const NodePolyfillPlugin = require("node-polyfill-webpack-plugin") //npm install node-polyfill-webpack-plugin
module.exports = {
    entry:"./src/app/index.js",
    output:{
        path:__dirname + "/src/public",
        filename:"bundle.js"
    },
    module:{
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
		new NodePolyfillPlugin()
	]
};
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
                test: /\.js$/ || /\.js.map$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
		new NodePolyfillPlugin()
	],
    
    ignoreWarnings: [{message:/DevTools failed to load source map/}],
};
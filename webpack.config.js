const path = require("path");
    
module.exports = {
	mode: "development",
	watch: true,
    entry: "./public/javascripts/src/app.js",
    output: {
    	path: path.join(__dirname, "/public/dist"),
    	filename: "bundle.js",
    	publicPath: "/public/dist",
    },
    devServer: {
    	proxy: {
    		"/": "http://localhost:3000"
    	}
    }
};
var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/public/script/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
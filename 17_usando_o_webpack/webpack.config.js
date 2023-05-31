// const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js',
        // hello: './src/hello.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
    // output: {
    //     path: path.resolve(__dirname, 'public'),
    //     filename: '[name].bundle.min.js'
    // }
}
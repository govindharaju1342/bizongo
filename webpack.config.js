module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: './bundle.js'
    },
    node: {
        fs: "empty",
        path: true
    },
    module: {
        loaders: [{ 
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
        }]
    }
}

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
    entry: {
        'bundle': [path.resolve(__dirname, 'src/index.ts')],
        'polyfills': [path.resolve(__dirname, 'src/polyfills.ts')],
        'service-worker': [path.resolve(__dirname, 'src/service/service-worker.js')]
    },
    context: __dirname,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/es-next'),
    },
    devtool: "inline-source-map",
    mode: "production",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.css']
    },

    module: {
        rules: [{test: /\.tsx?$/, loader: 'ts-loader'}, {test: /\.css?$/, loader: 'raw-loader'}],
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ],
    devServer: {
        https: true,
        port: 8092,
        hot: false,
        inline: false
    }
};

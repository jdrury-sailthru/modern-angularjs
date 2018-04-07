const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // the main file through which all dependencies are traced
    entry: path.resolve(__dirname, '../src/index.ts'),

    // create inline-source maps for ts files
    devtool: 'inline-source-map',

    module: {
        rules: [
            // instruct webpack how to compile typescript files
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, '../src'),
                loader: 'awesome-typescript-loader',
                query: {
                    // Use this to point to your tsconfig.json.
                    configFileName: './config/tsconfig.json'
                }
            }
        ]
    },

    resolve: {
        // import files without specifying extension
        extensions: ['.ts', '.tsx', '.js']
    },

    plugins: [
        // wipe dist directory before each build
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '..')
        }),
    ],

    output: {
        // output filename and directory
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, '../dist'),
    }
};

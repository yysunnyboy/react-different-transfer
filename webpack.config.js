module.exports = {
    devtool: 'source-map',//配置生成Source Maps，选择合适的选项
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
            },
        ]
    }
};

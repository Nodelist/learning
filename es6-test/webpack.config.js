const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 入口文件：作为构建其内部依赖图的开始
    // entry: './src/index.js',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    // 使用sourceMap 将编译后的代码映射回原始源代码
    devtool: 'inline-source-map',
    // 使用 webpack-dev-server 启动项目 
    devServer: {
        contentBase: path.join(__dirname, "dist"), // 在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
        compress: true, // 一切服务都启用gzip 压缩
        port: 9000,
    },

    // 插件配置
    plugins: [
        // 清理output.path文件夹
        new CleanWebpackPlugin(),
        // 默认生成 index.html 文件
        new HtmlWebpackPlugin({
            title: '练习webpack与es6'
        }),
        /*
            压缩JS：Webpack内置UglifyJS插件、ParallelUglifyPlugin
            使用webpack --optimize-minimize 启动webpack，可以注入默认配置的UglifyJSPlugin
        */
        // new UglifyJSPlugin({
        //     compress: {
        //         warnings: false, //删除无用代码时不输出警告
        //         drop_console: true, //删除所有console语句，可以兼容IE
        //         collapse_vars: true, //内嵌已定义但只使用一次的变量
        //         reduce_vars: true, //提取使用多次但没定义的静态值到变量
        //     },
        //     output: {
        //         beautify: false, //最紧凑的输出，不保留空格和制表符
        //         comments: false, //删除所有注释
        //     }
        // }),

        /*
            压缩ES6：第三方UglifyJS插件
            防止babel-loader转换ES6代码，要在.babelrc中去掉babel-preset-env，因为babel-preset-env负责把ES6转换为ES5
        */
        // new UglifyESPlugin({
        //     uglifyOptions: { //比UglifyJS多嵌套一层
        //         compress: {
        //             warnings: false,
        //             drop_console: true,
        //             collapse_vars: true,
        //             reduce_vars: true
        //         },
        //         output: {
        //             beautify: false,
        //             comments: false
        //         }
        //     }
        // })
    ],

    // 输出配置
    output: {
        // filename: 'bundle.js', // 输出的文件名
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // 输出在哪个路径下 ./dist是默认路径
        publicPath: '/index'
    },

    /*
        资源管理配置
    */
    module: {
        // test 属性: 用于标识出应该被对应的 loader 进行转换的某个或某些文件。
        // use 属性，表示进行转换时，应该使用哪个 loader。
        rules: [{
                test: /\.css$/, // css文件
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|woff|woff2|eot|ttf|otf)$/, // 图片文件
                use: [
                    'file-loader'
                ]
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/, // 字体文件
            //     use: [
            //         'file-loader'
            //     ]
            // }
        ]
    },

    mode: 'development'
}
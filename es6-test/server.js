/*
    使用 webpack-dev-middleware 启动项目
*/
// const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

// const app = express();
// const config = require('./webpack.config.js');
// const compiler = webpack(config);

// // Tell express to use the webpack-dev-middleware and use the webpack.config.js
// // configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath
// }));

// // Serve the files on port 3000.
// app.listen(10023, function() {
//     console.log('Example app listening on port 10023!\n');
// });

/*
    使用 webpack-dev-server 与 node.js API 启动
*/
// const WebpackDevServer = require('webpack-dev-server')
// const webpack = require('webpack')
// const config = require('webpack.config.js')

// const options = {
//     contentBase: './dist',
//     hot: true,
//     host: 'localhost'
// };

// WebpackDevServer.addDevServerEntrypoints(config, options);
// const compiler = webpack(config);
// const server = new WebpackDevServer(compiler, options)

// server.listen(5000, 'localhost', () => {
//     console.log('dev server listening on port 5000')
// })
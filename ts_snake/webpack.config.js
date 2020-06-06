const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = [
  {
    mode: `development`,
    entry: `./src/App.tsx`,
    target: `electron-renderer`,
    devtool: `source-map`,
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: `babel-loader` }],
        },
      ],
    },
    output: {
      path: `${__dirname}/dist`,
      filename: `app.js`,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `./index.html`,
      }),
    ],
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
  },
];

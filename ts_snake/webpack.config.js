const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const ScriptExtHtmlWebpackPlugin = require(`script-ext-html-webpack-plugin`);
const TerserPlugin = require(`terser-webpack-plugin`);

module.exports = (_env, argv) => {
  const PROD = argv.mode.toString().trim().toLowerCase() === `production`;
  return {
    entry: [`./src/index.ts`],
    target: `electron-renderer`,
    devtool: !PROD && `source-map`,
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js)$/,
          exclude: /(node_modules)/,
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
        template: `./template.html`,
        inject: `head`,
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: "defer",
      }),
    ],
    optimization: {
      minimize: PROD,
      minimizer: [
        new TerserPlugin({
          parallel: 4,
          sourceMap: false,
        }),
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
  };
};

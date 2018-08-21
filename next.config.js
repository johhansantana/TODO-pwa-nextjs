const withTypescript = require("@zeit/next-typescript");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = withTypescript({
  webpack: config => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: "networkFirst",
            urlPattern: /^https?.*/
          }
        ]
      })
    );

    return config;
  }
});

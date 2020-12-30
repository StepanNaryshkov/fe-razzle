module.exports = {
  plugins: [
    "scss",
    "bundle-analyzer",
    {
      name: "typescript",
      options: {
        useBabel: false,
        tsLoader: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
        forkTsChecker: {
          tsconfig: "./tsconfig.json",
          tslint: "./tslint.json",
          watch: "./src",
          typeCheck: true,
        },
      },
    },
  ],
};

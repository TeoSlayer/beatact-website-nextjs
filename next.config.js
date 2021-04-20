module.exports = {
  webpack: config => {
    config.devtool = 'source-map'

    for (const r of config.module.rules) {
      if (r.loader === 'babel-loader') {
        r.options.sourceMaps = true
      }
    }

    return config
  },
}

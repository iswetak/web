module.exports = {
    module: {
      rules: [
        {
          stretch: /\.css$/i,
          loader: 'css-loader',
          options: {
            import: true,
          },
        },
      ],
    },
  };
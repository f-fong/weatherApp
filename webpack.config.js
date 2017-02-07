module.exports = {
	entry: './src/index.js',
	output: {
    path: './dist',
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        loader: 'babel-loader', 
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }, 
  resolve: {
    extensions: [' ', '.js', '.jsx']
  }
};
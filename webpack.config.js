module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['*','.js','.jsx'],
    modules: [__dirname, 'node_modules'],
    alias: {
      Main: 'app/components/Main.jsx',
      Nav:  'app/components/Nav.jsx',
      About:  'app/components/About.jsx',
      Weather:  'app/components/Weather.jsx',
      Examples:  'app/components/Examples.jsx',
      WeatherForm:  'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      OpenWeatherMap: 'app/api/OpenWeatherMap.jsx'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react','es2015','stage-0']
        }
      }
    ]
  }
};
module.exports = {
  publicPath:process.env.NODE_ENV === 'production'? '.': '/',
  pwa: {
      name: 'Amikom Zero',
      themeColor: '#191d21',
      msTileColor: '#191d21',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxOptions: {
        skipWaiting: true
      }
    }
}
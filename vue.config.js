module.exports = {
  publicPath:process.env.NODE_ENV === 'production'? '.': '/',
  pwa: {
      name: 'Update Corona',
      themeColor: '#191d21',
      msTileColor: '#191d21',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxOptions: {
        skipWaiting: true
      }
    }
}
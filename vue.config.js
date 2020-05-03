module.exports = {
  publicPath:process.env.NODE_ENV === 'production'? '.': '/',
  pwa: {
      name: 'Amikom Zero',
      short_name: "AmikomZ",
      themeColor: '#41286b',
      msTileColor: '#41286b',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      start_url: "/",
      workboxOptions: {
        skipWaiting: true
      }
    }
}
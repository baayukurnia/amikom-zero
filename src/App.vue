<template>
  <div id="app" :class="{'performance-mode' : this.$store.state.performanceMode }">
    <div class="screen">
      <transition :name="transitionName">
        <router-view class="page-screen"/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left',
    }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.meta.depth || 0
      const fromDepth = from.meta.depth || 0
      document.title = to.meta.title

      this.transitionName = toDepth >= fromDepth ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Neuzeit Grotesk';
    src: url('/font/NeuzeitGroExt-Bla.eot');
    src: local('Neuzeit Grotesk Extra-condensed Black'), local('NeuzeitGroExt-Bla'),
        url('/font/NeuzeitGroExt-Bla.eot?#iefix') format('embedded-opentype'),
        url('/font/NeuzeitGroExt-Bla.woff2') format('woff2'),
        url('/font/NeuzeitGroExt-Bla.woff') format('woff'),
        url('/font/NeuzeitGroExt-Bla.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Neuzeit Grotesk';
    src: url('/font/NeuzeitGro-Bla.eot');
    src: local('Neuzeit Grotesk Black'), local('NeuzeitGro-Bla'),
        url('/font/NeuzeitGro-Bla.eot?#iefix') format('embedded-opentype'),
        url('/font/NeuzeitGro-Bla.woff2') format('woff2'),
        url('/font/NeuzeitGro-Bla.woff') format('woff'),
        url('/font/NeuzeitGro-Bla.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Neuzeit Grotesk';
    src: url('/font/NeuzeitGro-Reg.eot');
    src: local('Neuzeit Grotesk Regular'), local('NeuzeitGro-Reg'),
        url('/font/NeuzeitGro-Reg.eot?#iefix') format('embedded-opentype'),
        url('/font/NeuzeitGro-Reg.woff2') format('woff2'),
        url('/font/NeuzeitGro-Reg.woff') format('woff'),
        url('/font/NeuzeitGro-Reg.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Neuzeit Grotesk';
    src: url('/font/NeuzeitGro-Lig.eot');
    src: local('Neuzeit Grotesk Light'), local('NeuzeitGro-Lig'),
        url('/font/NeuzeitGro-Lig.eot?#iefix') format('embedded-opentype'),
        url('/font/NeuzeitGro-Lig.woff2') format('woff2'),
        url('/font/NeuzeitGro-Lig.woff') format('woff'),
        url('/font/NeuzeitGro-Lig.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Neuzeit Grotesk';
    src: url('/font/NeuzeitGro-Bol.eot');
    src: local('Neuzeit Grotesk Bold'), local('NeuzeitGro-Bol'),
        url('/font/NeuzeitGro-Bol.eot?#iefix') format('embedded-opentype'),
        url('/font/NeuzeitGro-Bol.woff2') format('woff2'),
        url('/font/NeuzeitGro-Bol.woff') format('woff'),
        url('/font/NeuzeitGro-Bol.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Neuzeit Grotesk';
    src: url('/font/NeuzeitGroCon-Bla.eot');
    src: local('Neuzeit Grotesk Condensed Black'), local('NeuzeitGroCon-Bla'),
        url('/font/NeuzeitGroCon-Bla.eot?#iefix') format('embedded-opentype'),
        url('/font/NeuzeitGroCon-Bla.woff2') format('woff2'),
        url('/font/NeuzeitGroCon-Bla.woff') format('woff'),
        url('/font/NeuzeitGroCon-Bla.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}



// Light default theme
body #app{
  --mainbg-color: #2b1d40;
  --mainbg-color-transparent: rgba(23, 0, 56, 0.85);
  --main-color: #866baf;
  --bg-color: #FDFCFF;
  --bg-card: #fff;
  --body-color: #1F122E;
  --secondary-color: #FFB148;
  --opacity-color: #755994;
  --icon-gradientx: #FFCF60;
  --icon-gradienty: #FF8944;
  --icon-gradient-white: rgba(255,255,255,1);
  --icon-bg: #3c285b;
  --border-color: rgba(0,0,0,.05);
  --hover-bg: rgba(0,0,0,.03);
  --active-bg: rgba(255,255,255,.2);
  --overlay: rgba(255,255,255,.2);
  --list-icon-color: #2B1D40;
  --device-color: #111;
  --shadow: rgba(33, 33, 33, .2);

  // colors
  --white: #fff;
  --red: #b92121;

  --shadow-red: rgba(221, 36, 36, .5);

  --ease: cubic-bezier(.55,0,.1,1);
  --radius: 20px;
  --blur-amount: 25px;

  &.performance-mode{
    *{
      backdrop-filter: none !important;
    }
    
    --overlay: rgba(255,255,255,.85);
    --mainbg-color-transparent: #2b1d40;
    --blur-amount: 0;
  }
}

// Override variables for Dark theme
body[data-theme="dark"] #app{
  --bg-card: #232131;
  --mainbg-color: #41286b;
  --mainbg-color-transparent: rgba(65, 40, 107, .85);
  --bg-color: #1b1921;
  --body-color: #fff;
  --opacity-color: #7a62a7;
  --icon-gradientx: #FFCF60;
  --icon-gradienty: #ec722b;
  --icon-gradient-white: rgba(255,255,255,1);
  --icon-bg: #4c2d80;
  --border-color: rgba(255,255,255,.05);
  --active-bg: rgba(0,0,0,.2);
  --hover-bg: rgba(255,255,255,.02);
  --overlay: rgba(0,0,0,.3);
  --list-icon-color: #7a62a7;
  --device-color: #eee;

  &.performance-mode{
    --overlay: rgba(0,0,0,.85);
    --mainbg-color-transparent: #41286b
  }
}

// font-sizes
body{
  --h1: 2.5rem;
  --h2: 2rem;
  --h3: 1.75rem;
  --h4: 1.5rem;
  --h5: 1.125rem;
  --h6: 1rem;
  --h7: .875rem;
  --h8: .8125rem;
  --h9: .75rem;
}
@media (max-width: 350px){
body{
  --h0: 2.5rem;
  --h1: 2rem;
  --h2: 1.75rem;
  --h3: 1.5rem;
  --h4: 1.125rem;
  --h5: 1rem;
  --h6: .875rem;
  --h7: .8125rem;
  --h8: .75rem;
}
}

html {
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  font-size: 1rem;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
 
::-webkit-scrollbar-track {
  box-shadow: none
}
 
::-webkit-scrollbar-thumb {
  background-color: slategrey;
  outline: 1px solid slategrey;
  border-radius: 10px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
a{
  text-decoration: none;
  color: var(--body-color);
  &:hover{
    opacity: .8;
  }
}
img{pointer-events: none; max-width: 100%;}

body{
  font-family: 'Neuzeit Grotesk',
  // Safari for OS X and iOS (San Francisco)
  -apple-system,
  // Chrome < 56 for OS X (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  "Roboto",
  // Basic web fallback
  "Helvetica Neue", Arial, sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  letter-spacing: .01rem;
  margin: 0;
  overflow: hidden;
  background: var(--bg-color);
  color: var(--body-color);
  transition: background-color .3s,
              color .3s,
              fill .3s;
}
@media (min-width: 576px){
  body{
    background: var(--bg-card) !important;
    color: var(--body-color);
    overflow-y: auto;
  }
}

#app{
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  scroll-behavior: smooth;
}

@media (min-width: 576px){
  #app{
    margin: 50px auto;
    width: 375px;
    height: 812px;
    position: relative;
    border-radius: 50px;

    &:after{
      content: '';
      width: 399px;
      height: 836px;
      position: absolute;
      top: -12px;
      left: -12px;
      border-radius: 50px;
      border: 12px solid var(--device-color);
      pointer-events: none;
      z-index: 999;
    }
    &:before{
      content: '';
      width: 175px;
      transform: translate(-50%);
      height: 33px;
      top: -5px;
      left: 50%;
      background: var(--device-color);
      position: absolute;
      border-radius: 0 0 20px 20px;
      z-index: 999;
    }
  }
  .screen{
    margin: 0;
    width: 375px;
    height: 812px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background: var(--bg-color);
    color: var(--body-color);
  }
}

.card{
  background: var(--bg-card);
  border-radius: var(--radius);
}
.heading{
  font-size: 	var(--h5);
  margin: 0 25px;
  padding: 10px 0 15px;
  position: relative;
  
  &:after{
      content: url('/img/suket.svg');
      position: absolute;
      right: -40px;
  }
}

.container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.flex-container {
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
}
.row {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.message{
  margin: 30px 25px;
}
.text-center{
  text-align: center;
}
.d-flex{display: flex}
.d-grid{display: grid}
.justify-content-between{justify-content: space-between}

.page-screen {
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 60px 0;
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}

@media (max-width: 350px){
  .page-screen{
    padding: 30px 0;
  }
}
@media (min-width: 576px){
  .page-screen{
    min-height: 812px;
    width: 375px;
  }
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>

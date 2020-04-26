<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
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
// Light default theme
body {
  --mainbg-color: #2B1D40;
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
  --overlay: rgba(255,255,255,.3);

  // colors
  --white: #fff;

  // font-sizes
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

// Override variables for Dark theme
body[data-theme="dark"] {
  --bg-card: #232131;
  --mainbg-color: #322449;
  --bg-color: #1e1c25;
  --body-color: #fff;
  --opacity-color: #7a62a7;
  --icon-gradientx: #FFCF60;
  --icon-gradienty: #FF8944;
  --icon-gradient-white: rgba(255,255,255,.7);
  --icon-bg: #3b2858;
  --border-color: rgba(255,255,255,.05);
  --hover-bg: rgba(255,255,255,.05);
  --overlay: rgba(0,0,0,.3);
}

html {
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  font-size: 1rem;
}

::-webkit-scrollbar {
  width: 2px;
  height: 2px;
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
img{pointer-events: none}

body{
  font-family: 'Open Sans',
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
  margin: 0;
  background: var(--bg-color);
  color: var(--body-color);
  overflow-x: hidden;
  transition: background-color .3s,
              color .3s,
              fill .3s;
}

#app{
  user-select: none;
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

.d-flex{display: flex}
.d-grid{display: grid}
.justify-content-between{justify-content: space-between}

.child-view {
  width: 100%;
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
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

<template>
  <div id="app" :class="{'performance-mode' : this.$store.state.performanceMode }">
    <div class="screen">
      <div class="border-radius top"></div>
      <StatusBar/>
      <transition :name="transitionName">
        <router-view class="page-screen"/>
      </transition>
      <div class="border-radius bottom"></div>
    </div>
  </div>
</template>

<script>
import axios from './backend'
import StatusBar from '@/components/global/StatusBar.vue'

export default {
  name: 'App',
  components: {
    StatusBar
  },
  data () {
    return {
      transitionName: 'slide-left',
    }
  },
	beforeCreate() {
		this.$store.commit('initialiseStore');
  },
  created: function(){
    axios.interceptors.response.use(undefined, function (err) {
        // if you ever get an unauthorized, logout the user
            this.$store.dispatch('AUTH_LOGOUT')
        // you can also redirect to /login if needed !
        throw err;
    });
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
@import 'scss/variables.scss';
@import 'scss/transitions.scss';
@import 'scss/base.scss';
@import 'scss/utils.scss';
@import 'scss/misc.scss';

#app{
  background: var(--bg-color);
  color: var(--body-color);
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
      width: 210px;
      transform: translate3d(-50%,0,0);
      height: 35px;
      top: -1px;
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
    height: 813px;
    position: relative;
    overflow: hidden;
    
    .border-radius{
      position: absolute;
      left:-1px;
      right: -1px;
      z-index: 99;
      pointer-events: none;

      &:before, &:after{
        content:'';
        width: 10px;
        height: 10px;
        background: var(--bg-card) !important;
        position: absolute;
        transition: background-color .3s,
                    color .3s,
                    fill .3s;
      }
      &:before{
        left:0
      }
      &:after{
        right:0
      }
      &.top{
        top: 0;
      }
      &.bottom{
        bottom:10px;
      }
    }
  }
}

.page-screen {
  background: var(--bg-color);
  color: var(--body-color);
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding-top: 25px;
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}

@media (min-width: 576px){
  .page-screen{
    padding-top: 44px;
    min-height: 812px;
    width: 375px;
  }
}
</style>

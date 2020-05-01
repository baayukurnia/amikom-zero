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
// import axios from 'axios'
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
  mounted(){
    const token = localStorage.getItem('user-token')
    if (token) {
      this.$store.dispatch('USER_REQUEST', token)
      this.$store.dispatch('USER_SCHEDULE')
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
@import 'scss/variables.scss';
@import 'scss/fonts.scss';
@import 'scss/transitions.scss';
@import 'scss/base.scss';
@import 'scss/utils.scss';

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

.heading{
  font-size: 	20px;
  margin: 0 25px;
  padding: 10px 0 15px;
  position: relative;
  
  &:after{
      content: url('/img/suket.svg');
      position: absolute;
      right: -40px;
  }
}

.message{
  margin: 30px 25px;
}

@media (max-width: 350px){
  .message{
    margin: 0 10px;
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

.btn{
    border: 0;
    padding: 15px 20px;
    border-radius: 10px;
    cursor: pointer;
    color: var(--body-color);
    font-size: var(--h6);
    background: linear-gradient(30deg, var(--icon-gradientx), var(--icon-gradienty));
    color: var(--white);
}
</style>

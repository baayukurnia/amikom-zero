<template>
    <div :class="['navigation d-grid', mode, {'transparent' : state}, {'appearance-right' : !navRight}]">
      <div class="navigation-left" @click="$router.go(-1)">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </div>
      </div>
      <h1 class="navigation-title">
        {{ title }}
      </h1>
      <div v-if='navRight' :class="['navigation-right', {'active' : showDropdown}]" @click="toggleDropdown()">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
        </div>
      </div>
      <div v-if='navRight' :class="['navigation-dropdown', {'active' : showDropdown}]">
        <CardMenu class="dropdown text-right">
          <slot/>
        </CardMenu>
      </div>
    </div>
</template>

<script>
import CardMenu from '@/components/global/CardMenu.vue'

export default {
    name: 'Navigation',
    components: {
      CardMenu
    },
    props: {
      mode: {
        type: String
      },
      title:{
        type: String
      },
      navRight:{
        type: String,
        default: null
      },
      transparentNav:{
        type: Boolean,
        default: false
      },
      scrollNav:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        showDropdown: false,
        state: this.transparentNav
      }
    },
    mounted(){
      if(this.scrollNav){
        this.init()
      }
    },
    methods: {
      toggleDropdown(){
        this.showDropdown = !this.showDropdown
      },
      navHandler () {
        var el = document.getElementById('scroll-view')
        var scrollPos = el.scrollTop
        var offset = el.offsetHeight * 0.4
        if(scrollPos > offset){
          this.state = false
        }
        else{
          this.state = true
        }
      },
      init(){
        if(this.transparentNav){
          setTimeout(() => {
            document.getElementById('scroll-view').addEventListener('scroll', this.navHandler, false)
          }, 100);
        }
      }
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.scrollHandler, false)
    },
}
</script>

<style lang="scss" scoped>
.navigation{
  position: absolute;
  grid-template-columns: 54px 1fr 54px;
  width: 100%;
  top: 0;
  z-index: 10;
  background: var(--bg-color);
  color: var(--body-color);
  transition: .5s var(--ease);

  &-left,&-right{
    padding: 0 15px;
    display: inherit;
    cursor: pointer;

    &:hover{
      opacity: .8;
    }
    &.active{
      .icon{
        background: var(--active-bg);
      }
    }
  }

  &-title{
    transition: .5s var(--ease);
    text-align: center;
    font-size: var(--h5);
    font-weight: 400;
    margin: auto;
    line-height: 50px;
    color: var(--body-color);
    text-transform: capitalize;
    white-space: nowrap;
  }

  .icon{
    border-radius: 5px;
    padding: 5px 0;
    margin: 10px 0;
    height: 34px;
    width: 24px;
    display: inline-block;
    transition: .3s;
    svg{
      color: var(--body-color);
      transition: .5s var(--ease);
    }
  }

  &-dropdown{
    display: block;
    position: absolute;
    right: 13px;
    top: 49px;
  }

  &.transparent{
    background: transparent;
    &.light{
      .icon svg, .navigation-title{
        color: #fff;
      }
    }

    &.dark{
      .icon svg{
        color: #1F122E;
      }
    }
  }

  &.appearance-right:after{
      content: url('/img/suket.svg');
      position: absolute;
      right: -15px;
      bottom: 15px;
  }
}

@media (min-width: 576px) {
  .navigation{
    padding-top: 44px;
    &-dropdown{
      top: 94px
    }
  }
}
</style>
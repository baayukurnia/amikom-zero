<template>
  <div v-bind:class="[sectionClass]" ref="block" v-bind:style="{ height: sectionHeight + '%' }">
    <div
      v-bind:class="[parallax ? parallaxClass : '', fixed ? fixedClass : '', containerClass]"
      ref="parallax"
      >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      parallax: {
        default: true,
        type: Boolean
      },
      speedFactor: {
        default: 0.15,
        type: Number
      },
      fixed: {
        default: false,
        type: Boolean
      },
      breakpoint: {
        default: '(min-width: 0px)',
        type: String
      },
      sectionHeight: {
        default: 70,
        type: Number,
        required: false
      },
      sectionClass: {
        type: String,
        default: 'Masthead'
      },
      containerClass: {
        type: String,
        default: 'Masthead__image'
      },
      parallaxClass: {
        type: String,
        default: 'is-parallax'
      },
      fixedClass: {
        type: String,
        default: 'is-fixed'
      },
      direction: {
        type: String,
        default: 'up'
      }
    },

    data () {
      return {
        el: null,
        mediaQuery: null
      }
    },

    mounted () {
      if (this.parallax && !this.fixed) {
        this.el = this.$refs.parallax
        window.requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (f) {
          setTimeout(f, 1000 / 60)
        }
        this.init()
      }
    },

    methods: {
      animateElement () {
        const parentHeight = this.$refs.block.offsetHeight
        const parallaxHeight = this.$refs.parallax.offsetHeight
        const availableOffset = parallaxHeight - parentHeight
        let animationValue = (document.getElementById('scroll-view').scrollTop * this.speedFactor)

        if (animationValue <= availableOffset && animationValue >= 0) {
          this.el.style.transform = `translate3d(0, ${animationValue * this.directionValue}px ,0)`
        }
      },

      scrollHandler () {
        window.requestAnimationFrame(() => {
          this.animateElement()
        })
      },

      isInView (el) {
        let rect = el.getBoundingClientRect()

        return (
          rect.bottom >= 0 &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        )
      },

      setupListener () {
        if (this.mediaQuery.matches) {
          document.getElementById('scroll-view').addEventListener('scroll', this.scrollHandler, false)
        } else {
          document.getElementById('scroll-view').removeEventListener('scroll', this.scrollHandler, false)
        }
      },

      init () {
        this.mediaQuery = window.matchMedia(this.breakpoint)

        if (this.mediaQuery) {
          this.mediaQuery.addListener(this.setupListener)
          this.setupListener()
        }
      }
    },

    beforeDestroy () {
      window.removeEventListener('scroll', this.scrollHandler, false)
    },

    computed: {
      directionValue () {
        return this.direction === 'down' ? -1 : +1
      }
    }
  }
</script>

<style lang="scss">
.Masthead {
  position: relative;
  min-height: rem(350);
  scroll-behavior: smooth;
  overflow: hidden;
  z-index: -1;

  &__image {
    width: 100%;
    overflow: hidden;
    height: 120%;

    > img {
      height: 100%;
      max-width: none;
      width: 100%;
      object-fit:cover;
      object-position:top;
    }

    &.is-parallax {
      left: 0;
      position: absolute;
      will-change: transform;
      right: 0;
      top: 0;

      > img {
        height: 100%;
        max-width: none;
        width: 100%;
        object-fit:cover;
        object-position:top;
      }
    }

    &.is-fixed {
      position: fixed;
      will-change: transform;

      > img {
        height: 100%;
        max-width: none;
      }
    }
  }
}
</style>
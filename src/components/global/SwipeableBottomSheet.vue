<template>
<div class="wrapper" :data-open="state === 'open' ? 1 : 0">
  <div class="bg" :class="{open : state === 'open'}" @click="() => setState('half')"></div>
  <div
    ref="card"
    class="card"
    :data-state="isMove ? 'move' : state"
    :style="{ transform: 'translate3d(0,'+ `${isMove ? y : calcY()}px` +',0)'}"
  >
    <div class="pan-area" ref="pan"><div class="bar" ref="bar"></div></div>
    <slot></slot>
  </div>
</div>
</template>

<script>
import Hammer from "hammerjs"

export default {
  props: {
    openY: {
      type: Number,
      default: 0.1
    },
    halfY: {
      type: Number,
      default: 0.8
    },
    defaultState: {
      type: String,
      default: "half"
    }
  },
  data() {
    return {
      mc: null,
      y: 0,
      startY: 0,
      isMove: false,
      state: this.defaultState,
      rect: {}
    }
  },
  mounted () {
    if (localStorage.getItem('state')) this.state = localStorage.getItem('state');

    window.onresize = () => {
      this.rect = this.$refs.card.getBoundingClientRect()
    }
    this.rect = this.$refs.card.getBoundingClientRect()

    this.mc = new Hammer(this.$refs.pan)
    this.mc.get('pan').set({ direction: Hammer.DIRECTION_ALL })

    this.mc.on("panup pandown", (evt) => {
      if (window.matchMedia("(max-width: 567px)").matches) { // If media query matches
        this.y = evt.center.y - 16
      } else {
        this.y = evt.center.y - 75
      }
    })

    this.mc.on("panstart", (evt) => {
      this.startY = evt.center.y
      this.isMove = true
    })

    this.mc.on("panend", (evt) => {
      this.isMove = false

      switch (this.state) {
        case "half":
          if (this.startY - evt.center.y > 70) {
            this.state = "open"
          }

          else if (this.startY - evt.center.y < -120) {
            this.state = "minimize"
          }
          break;
        case "minimize":
          if (this.startY - evt.center.y > 320) {
            this.state = "open"
          }
          
          else if (this.startY - evt.center.y > 120) {
            this.state = "half"
          }
          break;
        case "open":
          if (this.startY - evt.center.y < -320) {
            this.state = "minimize"
          }
          
          else if (this.startY - evt.center.y < -120) {
            this.state = "half"
          }
          break;
      }
    })
  },
  beforeDestroy () {
    this.mc.destroy()
    window.onresize = null
  },
  methods: {
    calcY () {
      switch (this.state) {
        case "minimize":
          return this.rect.height - 40
        case "open":
          return this.rect.height * this.openY
        case "half":
          return this.rect.height * this.halfY
        default:
          return this.y
      }
    },
    setState (state) {
      this.state = state
    }
  },
  watch: {
    state: {
      handler() {
        localStorage.setItem('state', this.state);
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper .bg {
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: hidden;
  background: var(--overlay);
  opacity: 0;
  transition: .5s;
  z-index: 10;
  backdrop-filter: blur(var(--blur-amount));
}

.wrapper .bg.open{
  opacity: 1;
  visibility: visible;
}

.card {
  bottom: 0;
  padding: 0;
  transform: translate3d(0, 1000px, 0);
  width: 100%;
  height: 100%;
  position: fixed;
  background: var(--mainbg-color-transparent);
  color: var(--white);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -5px 6px rgba(31, 31, 31, 0.1);
  z-index: 10;
  backdrop-filter: blur(5px);
}

@media (min-width: 576px){
  .card{
    position: absolute;
  }
  .wrapper .bg{
    position: absolute;
  }
}

.card[data-state="half"], .card[data-state="open"], .card[data-state="minimize"] {
  transition: top .3s cubic-bezier(.8,.01,.56,1),
              transform .7s cubic-bezier(.55,0,.1,1),
              opacity .5s cubic-bezier(.55,0,.1,1)
}

.bar {
  width: 80px;
  height: 5px;
  border-radius: 6px;
  background: var(--white);
  opacity: 0.2;
  margin: 0 auto;
}

.pan-area {
  padding: 15px 0 30px;
  cursor: pointer;

  &:hover, &:active{
    .bar{
      opacity: .4;
    }
  }
}

.contents {
  overflow-y: scroll;
  max-height: 100%;
  padding-bottom: calc(100vh * 0.2);
  box-sizing: border-box;
}
</style>

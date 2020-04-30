<template>
    <div :class="['status-bar device', this.$store.state.statusBarColor, { 'scroll' : this.$store.state.statusBarScroll} ]">
        <div class="clock">
            <span v-show="hours !== null">{{ hours }}:{{ minutes }}</span>
        </div>
        <div class="space"></div>
        <div class="stats">
            <svg xmlns="http://www.w3.org/2000/svg" width="15.333" height="11" viewBox="0 0 15.333 11"><path d="M7.667,11a.314.314,0,0,1-.222-.093L5.439,8.885a.31.31,0,0,1-.094-.231.316.316,0,0,1,.1-.227,3.437,3.437,0,0,1,4.437,0,.315.315,0,0,1,.009.458L7.889,10.907A.314.314,0,0,1,7.667,11ZM11.19,7.451a.313.313,0,0,1-.215-.086,4.928,4.928,0,0,0-6.612,0,.313.313,0,0,1-.215.086.308.308,0,0,1-.22-.091L2.768,6.189a.322.322,0,0,1,0-.46,7.192,7.192,0,0,1,9.791,0,.323.323,0,0,1,.1.23.319.319,0,0,1-.095.23L11.409,7.36A.309.309,0,0,1,11.19,7.451Zm2.669-2.693a.3.3,0,0,1-.215-.088,8.68,8.68,0,0,0-11.955,0,.307.307,0,0,1-.435,0L.094,3.5a.323.323,0,0,1,0-.457,10.948,10.948,0,0,1,15.141,0,.323.323,0,0,1,0,.457l-1.161,1.17A.306.306,0,0,1,13.859,4.758Z"/></svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StatusBar',
    data () {
        return {
            hours: null,
            minutes: null,
        }
    },
    mounted () {
        this.$options.interval = setInterval(this.updateDateTime, 1000);
    },
    beforeDestroy () {
        clearInterval(this.$options.interval);
    },
    methods: {
        updateDateTime () {
            let now = new Date()
            this.hours = this.getZeroPad(now.getHours())
            this.minutes = this.getZeroPad(now.getMinutes())
        },
        getZeroPad (n) {
            return (parseInt(n, 10) >= 10 ? '' : '0') + n
        },
    },
}
</script>

<style lang="scss" scoped>
.status-bar{
    position: absolute;
    width: 100%;
    height: 44px;
    background: var(--status-bar-bg);
    border-radius: 10px 10px 0 0;
    grid-template-columns: 2fr 5fr 2fr;
    z-index: 60;
    text-align: center;
    display: grid;
    pointer-events: none;
    transition: .3s;
    color: var(--body-color);

    .clock{
        padding: 15px 10px 8px 20px;
        font-weight: 600;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue", Arial, sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    .stats{
        padding: 15px 10px 8px 20px;
        svg{
            fill: var(--body-color);
            transition: .3s;
        }
    }

    &.black{
        color: black;
        .stats svg{
            fill: black
        }
    }

    &.white{
        color: white;
        .stats svg{
            fill: white
        }
    }
    &.scroll{
        color: var(--body-color);
        .stats svg{
            fill: var(--body-color)
        }
    }
}
@media (max-width: 575px) {
    .device{
        display:none
    }
}
</style> 
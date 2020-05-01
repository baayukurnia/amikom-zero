<template>
    <div class="modal" :class='{ active : stateOpen }'>
        <div v-if="disableClose" class="modalbg"></div>
        <div v-if="!disableClose" class="modalbg" @click="close"></div>
        <div class="content" :style="{ 'bottom' : bottom+'px' }">
            <span v-if="!disableClose" class="close" @click="close">
                <div class="icon">
                    <span></span>
                    <span></span>
                </div>
            </span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        stateOpen: {
            type: Boolean,
            default: false
        },
        disableClose: {
            type: Boolean,
            default: false
        },
        bottom:{
            type: Number,
            default: 150
        }
    },
    methods: {
        close(){
            this.$parent.stateOpen = false
        }
    }
}
</script>

<style lang="scss" scoped>
.modalbg{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: crosshair;
    opacity: 0;
    transition: opacity .2s;
    background: var(--overlay);
    z-index: 10;
    backdrop-filter: blur(0px);
}

.modal{
    visibility: hidden;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 20;
}
@media (min-width: 576px) {
    .modalbg{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .modal{
        position: absolute;
    }
}
.content {
    z-index: 11;
    display: inline-block;
    margin: 0 auto;
    position: absolute;
    width: 100%;

    .close{
        background: var(--red);
        padding: 18px;
        position: absolute;
        left: 50%;
        bottom: -80px;
        border-radius: 50%;
        opacity: 0;
        transform: translate3d(-50%,20px,0);
        transition: .5s cubic-bezier(.55,0,.1,1);
        box-shadow: 0 5px 15px var(--shadow-red);
        transition-delay: .2s;
        cursor: pointer;
        z-index: 1;

        &:hover{
            box-shadow: 0 10px 40px var(--shadow-red);

            .icon{
                transition-delay: 0s;
                transform: rotate(360deg);
            }
        }

        .icon{
            transition: .5s cubic-bezier(.55,0,.1,1);
            height: 14px;
            width: 14px;
            position: relative;
            transform: rotate(0);

            span{
                width: 100%;
                border-radius: 5px;
                height: 2px;
                background: #fff;
                position: absolute;
                left: 50%;
                top: calc(50% - 1px);

                &:nth-child(1){
                    transform: translate3d(-50%,0,0)rotate(-45deg);
                }
                &:nth-child(2){
                    transform: translate3d(-50%,0,0)rotate(45deg);
                }
            }
        }
    }
}
.active{
    visibility: visible;
    .modalbg{
        transition: opacity .5s;
        backdrop-filter: blur(var(--blur-amount));
        opacity: 1;
        transform: translate3d(0,0,0);
    }
    .close{
        transition-delay: 0s;
        opacity: 1;
        transform: translate3d(-50%,0,0);
        .icon{
            transform: rotate(180deg);
        }
    }
}
</style>
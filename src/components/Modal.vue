<template>
    <div class="modal">
        <div class="modalbg" @click.prevent="closeModal"></div>
        <div class="content">
            <div class="card">
            <span class="close" @click.prevent="closeModal">
                <div class="icon">
                    <span></span>
                    <span></span>
                </div>
            </span>
            <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
.modalbg{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: crosshair;
    opacity: 0;
    transition: opacity .5s;
    background: var(--overlay);
    backdrop-filter: blur(25px);
}
.modal{
    visibility: hidden;
    transition: .5s;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.content {
    z-index: 1;
    display: inline-block;
    margin: 0 auto;

    .card{
        background: var(--bg-card);
        border-radius: 15px;
        opacity: 0;
        transform: translateY(30px);
        box-shadow: 0 30px 70px 0 rgba(130,136,171,.1);
        transition: transform .3s cubic-bezier(.55,0,.1,1),
                    opacity .2s;
    }
    .close{
        background: #dc3333;
        padding: 10px;
        position: absolute;
        right: -10px;
        top: -10px;
        border-radius: 50%;
        opacity: 0;
        transform: translateY(-20px);
        transition: .5s cubic-bezier(.55,0,.1,1);
        box-shadow: 0 5px 10px rgba(160, 33, 33, 0.5);
        cursor: pointer;
        z-index: 1;

        .icon{
            height: 14px;
            width: 14px;
            span{
                width: 12px;
                border-radius: 5px;
                height: 2px;
                background: #fff;
                position: absolute;
                left: 50%;
                top: calc(50% - 1px);

                &:nth-child(1){
                    transform: translateX(-50%)rotate(-45deg);
                }
                &:nth-child(2){
                    transform: translateX(-50%)rotate(45deg);
                }
            }
        }
    }
}
.show{
    visibility: visible;
    .card, .modalbg{
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
    }
    .close{
        opacity: 1;
        transition-delay: .2s;
        transform: translateY(0);
    }
}
</style>
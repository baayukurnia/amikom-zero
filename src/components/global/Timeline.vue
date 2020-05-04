<template>
    <ul class="timeline">
        <slot/>
    </ul>
</template>

<style lang="scss" scoped>
.timeline{
    padding: 0 15px 0 40px;
    list-style: none;

    li{
    position: relative;
    &:not(:last-child){
        margin-bottom: 35px;
        &:before{
        content: '';
        position: absolute;
        top: 30px;
        height: 100%;
        border-left: 2px dashed rgba(255, 255, 255, .1);
        left: -29px;
        }
    }
    }

    .time{
    display: inline-block;
    background: var(--secondary-color);
    padding: 5px 15px 4px;
    border-radius: 40px;
    font-size: var(--h8);
    font-weight: 700;
    }

    .status{
    position: absolute;
    width: 24px;
    height: 24px;
    left: -40px;
    top: 0;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,.1);

    &.done{
        background: var(--secondary-color);
        border: 2px solid var(--secondary-color);

        &:before{
        content: url('/img/check.svg');
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        }
    }

    &.miss{
        background: rgba(255, 255, 255, .1);
        border-color: transparent;
        &:before{
        content: '';
        position: absolute;
        height: 2px;
        width: 8px;
        background: #fff;
        left: calc(50% - 4px);
        top: calc(50% - 1px);
        }
    }
    &.untrack{
        width: 15px;
        height: 15px;
        border-color: white;
        left: -35px;
        top: 5px;
    }
    }

    h3{
    margin:15px 0 5px;
    font-size: var(--h5);
    text-transform: capitalize;
    }
    h4{
    margin:5px 0;
    font-size: var(--h6);
    text-transform: capitalize;
    }
    h5{
    margin: 0;
    font-size: var(--h8);
    font-weight: 400;
    opacity: .25;
    }
    .room{
    font-size: var(--h8);
    font-weight: 700;
    color: var(--secondary-color);
    }
}
</style>
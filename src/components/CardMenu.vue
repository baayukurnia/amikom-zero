<template>
    <ul class="card-menu">
        <slot/>
    </ul>
</template>

<script>
export default {
    name: 'CardMenu'
}
</script>

<style lang="scss" scoped>
.card-menu{
  min-width: 150px;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  font-size: var(--h7);
  font-weight: 400;
  background: var(--bg-card);
  color: var(--body-color);
  border-radius: 10px;
  opacity: 0;
  transform: translateY(10px);
  box-shadow: 0 10px 40px 0 var(--shadow);
  transition: transform .3s cubic-bezier(.55,0,.1,1),
              opacity .2s;
  z-index: 21;

  &.dropdown{
    padding: 5px 0;
    border-radius: 5px;
  }

  &.text-right{
    text-align: right;
  }

  li{
    position: relative;
    white-space: nowrap;
    &.list-icon{
      a{
        padding: 15px 120px 15px 25px;
      }
    } .icon{
      position: absolute;
      right: 20px;
      padding: 13px 0;
      top: 0;
      color: var(--list-icon-color);
      pointer-events: none;
      &-toggle{
          padding: 12px 0;
      }

      svg{
        display: block;
        height: 20px;
        width: 20px;
      }
    }
    a{
      display: block;
      padding: 15px 25px;

      &:hover{
        background: var(--hover-bg);
        opacity: 1;
      }
    }
    
    label{
      bottom: 3px;
      line-height: normal;
      position: absolute;
      font-size: .6125rem;
      text-transform: uppercase;
      letter-spacing: .1rem;
      opacity: .25;
      left: 25px;
      pointer-events: none;
    }
  }
  .divider {
    width: calc(100% - 30px);
    height: 1px;
    display: block;
    padding: 0 10px;
    background: var(--border-color);
    margin: 5px auto;
  }
}

.active .card-menu{
  opacity: 1;
  transform: translateY(0) !important;
  visibility: visible;
}

.modal .card-menu{
  transform: translateY(30px);
  transition: .3s cubic-bezier(.55,0,.1,1); 
  &:before{
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translate(-50%)rotate(-45deg);
    width: 40px;
    height: 40px;
    transition: background .3s cubic-bezier(.55,0,.1,1); 
    background: var(--bg-card);
    border-radius: 4px;
  }
}
</style>
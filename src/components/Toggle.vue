<template>
  <div class="icon icon-toggle" @click="$emit('update:active', !active)">
    <input type="checkbox" :name="name" :id="id" :checked="active" hidden aria-hidden="true">
    <div class="toggle"></div>
  </div>
</template>

<script>
  export default {
    name: 'Toggle',
    props: {
      name: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: () => {
          return  'toggle-' + Math.random().toString(36).substr(2, 9);
        }
      },
      active: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .toggle {
    border: 2px solid var(--list-icon-color);
    border-radius: 12px;
    cursor: pointer;
    display: inline-block;
    height: 22px;
    position: relative;
    transition: all;
    vertical-align: middle;
    width: 35px;
    pointer-events: none;
  }
  .toggle:after {
    background-color: var(--list-icon-color);
    border-radius: 10px;
    content: '';
    display: block;
    position: absolute;
    right: 14px;
    height: 14px;
    top: 2px;
    transition: all .4s;
    width: 14px;
  }
  input:checked + .toggle {
    background-color: var(--list-icon-color);
    border: 2px solid var(--list-icon-color);
  }
  input:checked + .toggle:after {
    background-color: #fff;
    right: 2px;
  }
</style>
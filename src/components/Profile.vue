<template>
  <div class="profile">
    <div class="container d-flex justify-content-between">
      <User/>
      <Setting/>
    </div>
  </div>
</template>

<script>
import User from '@/components/User.vue'
import Setting from '@/components/Setting.vue'

export default {
  name: 'Profile',
  components: {
    User,
    Setting
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile{
  padding: 10px;
  position: relative;

  &:before{
    content: url('/img/dots.svg');
    position: absolute;
    left: 10px;
    top: -5px;
    z-index: -1;
  }
}
</style>

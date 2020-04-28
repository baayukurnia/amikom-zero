<template>
  <Parallax class="profile-image" :speed-factor="0.6" :sectionHeight="80">
    <img src="/img/womanfull.jpg">
  </Parallax>
</template>

<script>
import Parallax from '@/components/Parallax.vue'

export default {
  name: 'ProfileImage',
  components:{
    Parallax
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile-image{
  z-index: 1;
  mask-image: linear-gradient(to bottom, black 70%, transparent);
  img{
    width: 100%;
  }
}
</style>

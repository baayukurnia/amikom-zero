<template>
  <Parallax class="profile-image" :speed-factor="0.6" :sectionHeight="80">
    <img v-if="$store.state.profile.Mhs.Npm" :src="'https://images.weserv.nl/?url='+$store.state.profile.Mhs.NpmImg" :alt="$store.state.profile.Mhs.Npm">
  </Parallax>
</template>

<script>
import Parallax from '@/components/global/Parallax.vue'

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
  min-height: 450px;
  z-index: 1;
  mask-image: linear-gradient(to bottom, black 70%, transparent);
  img{
    width: 100%;
  }
}
</style>

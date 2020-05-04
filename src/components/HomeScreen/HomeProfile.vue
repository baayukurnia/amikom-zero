<template>
  <div class="home-profile">
    <div class="d-flex justify-content-between">
      <router-link to="/profil">
      <span class="hidden">Profil Saya</span>
      <keep-alive>
        <User/>
      </keep-alive>
      </router-link>
      <Notification/>
      <Setting/>
    </div>
  </div>
</template>

<script>
import Notification from '@/components/global/Notification.vue'
import Setting from '@/components/global/Setting.vue'
import User from '@/components/HomeScreen/User.vue'

export default {
  name: 'HomeProfile',
  components: {
    User,
    Setting,
    Notification
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-profile{
  padding: 10px 25px;

  &:after{
    content: url('/img/dots.svg');
    position: absolute;
    transform: translate(-13px, -67px)
  }

  &-image{
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    width: 54px;
    height: 54px;
    z-index: 1;

    img{
      width: 100%;
    }
  }

  &-user{
    display: inline-block;
    font-weight: 600;
    margin-left: 10px;
    padding: 4px 0;
    .name{
      margin: 0;
      display: block;
      font-size: var(--h5);
    }
    .nim{
      margin: 0;
      display: block;
      font-size: 0.75rem;
      opacity: .5;
      color: var(--opacity-color);
    }
  }
}
</style>

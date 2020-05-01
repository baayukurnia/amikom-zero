<template>
  <div class="duhh">
    <Navigation/>
    <ScrollView>
    <div class="flex-container">
        <div class="message text-center">
          <img src="/img/yah.png">
          <h1>Duhh!</h1>
          <p>..tunggu update selanjutnya.</p>
          <router-link class="btn" to="/">Kembali ke Dashboard</router-link>
        </div>
    </div>
    </ScrollView>
    </div>
</template>

<script>
import ScrollView from '@/components/global/ScrollView.vue'
import Navigation from '@/components/global/Navigation.vue'

export default {
  name: 'DuhScreen',
  components: {
    Navigation,
    ScrollView
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 64px;
}
h1{
  margin: 10px 0 5px 0;
}
p{
  margin: 0 0 50px
}

.btn{
  padding: 15px 20px;
  border-radius: 15px;
  cursor: pointer;
  color: var(--body-color);
  font-size: var(--h6);
  background: linear-gradient(30deg, var(--icon-gradientx), var(--icon-gradienty));
  color: var(--white);
}
</style>
 
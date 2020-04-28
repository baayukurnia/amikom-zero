<template>
  <div class="about">
    <Navigation title="Tentang Aplikasi">
      <li class="list-icon">
          <router-link to="/profile/edit">Ubah</router-link>
      </li>
    </Navigation>
    
    <ScrollView>
    <div class="flex-container">
      <div class="card message">
        <h1>Amikom Zero.</h1>
        <p><code>Amikom Zero</code> adalah aplikasi alternatif bagi pengguna iOS yang tidak bisa menggunakan Amikom One.</p>
        <p>Karena berbasis web jadi kalian bisa <strong>buka</strong> dan <strong>install</strong> <code>Amikom Zero</code> di iOS, PC, Mac, Android, di mana saja.</p>
        <p><code>Amikom Zero</code> tidak resmi dari pihak Amikom tapi kalian bisa membantu aplikasi ini menjadi lebih baik dengan cara langsung terjun ke source code maupun sekedar memberi ide dan saran kalian.</p>
        <p>Jangan di install dulu.</p>
      </div>
      </div>
    </ScrollView>
</div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'AboutScreen',
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900');

.message{
  font-family: -apple-system,
  // Chrome < 56 for OS X (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  "Roboto",
  // Basic web fallback
  "Helvetica Neue", Arial, sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
  margin: 50px 15px;
  padding: 25px;
  letter-spacing: 0;
  line-height: 1.2;
  background: var(--mainbg-color-transparent);
  color: var(--white);
}
p{
  text-align: justify;
}
h1, code{
  font-family: "Playfair Display";
  font-weight: 900;
  background: linear-gradient(-45deg, #FFCF60, rgb(255, 117, 37));
  background-size: 150% 150%;
  -webkit-animation: gradient 10s ease infinite alternate;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
 
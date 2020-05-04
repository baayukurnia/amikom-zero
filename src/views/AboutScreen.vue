<template>
  <div class="about">
    <Navigation title="Tentang Aplikasi">
      <li class="list-icon">
          <router-link to="/profile/edit">Ubah</router-link>
      </li>
    </Navigation>
    
    <ScrollView>
      <Card class="message">
        <h1 class="heading">Amikom Zero.</h1>
        <p><strong>Amikom Zero</strong> adalah aplikasi alternatif bagi pengguna iOS yang tidak bisa menggunakan Amikom One.</p>
        <p>Karena berbasis web jadi kalian bisa <b>buka</b> dan <b>install</b> <strong>Amikom Zero</strong> di iOS, PC, Mac, Android, di mana saja. <strong>Amikom Zero</strong> jalan walau di kondisi offline.</p>
        <p><strong>Amikom Zero</strong> tidak resmi dari pihak Amikom tapi kalian bisa membantu aplikasi ini menjadi lebih baik dengan cara langsung terjun ke source code maupun sekedar memberi ide dan saran kalian.</p>
        <p>Silahkan install dan informasikan ke teman-teman di Amikom, tunggu update versi selanjutnya.</p>
        <p>Big thanks ---- <a href="https://www.instagram.com/febridwi_k/">Febri Dwi</a> API backend nya.</p>

        <p class="credit">------ <a href="https://instagram.com/baayukurnia">Bayu Kurnia</a></p>
      </Card>
    </ScrollView>
</div>
</template>

<script>
import Card from '@/components/global/Card.vue'
import Navigation from '@/components/global/Navigation.vue'
import ScrollView from '@/components/global/ScrollView.vue'

export default {
  name: 'AboutScreen',
  components: {
    Navigation,
    ScrollView,
    Card
  }
}
</script>

<style lang="scss" scoped>
.about{
  padding-top: 54px;
  &:after{
    content: url('/img/moredots.svg');
    position: absolute;
    bottom: 50px;
    left: 15px;
    pointer-events: none;
  }
}
.message{
  margin-top: 50px;
  margin-bottom: 130px;
  font-weight: 100;
  letter-spacing: 0;
  background: var(--mainbg-color-transparent);
  color: var(--white);
  z-index: 99;
  line-height: 1.2;
  box-shadow: var(--card-shadow);
  z-index: 2;
  a{
    color: var(--link-color);
    font-weight: 400;
  }
}
p{
  text-align: justify;
  &.credit{
    margin-top: 40px;
    text-align: right;
  }
}
h1.heading{
  margin: 0;
  font-weight: 900;
  font-size: var(--h2);
  letter-spacing: -.15rem;
}
strong{
letter-spacing: -.05rem;
}
h1, strong{
  font-weight: 900;
  background: linear-gradient(-45deg, rgb(255, 207, 48), rgb(255, 99, 37));
  background-size: 200% 200%;
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
 
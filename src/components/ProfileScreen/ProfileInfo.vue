<template>
  <Card class="profile-info">
    <CardHeader>
      <h2 class="title overmask">{{ $store.state.profile.Mhs.Nama.toLowerCase() }}</h2>
      <span class="subtitle">Semester {{ $store.state.profile.PeriodeAkademik.Semester }} - {{ $store.state.profile.PeriodeAkademik.TahunAkademik }}</span>
    </CardHeader>
    <ul class="user-info">
      <li class="list-icon icon-left">
        <div class="icon">
          <CreditCardIcon/>
        </div>
        <div class="data">
          <label>Nim</label>
          <span>{{ $store.state.profile.Mhs.Npm }}</span>
        </div>
      </li>
      <li class="list-icon icon-left overmask">
        <div class="icon">
          <MailIcon/>
        </div>
        <div class="data">
          <label>Email</label>
          <span>{{ $store.state.profile.Mhs.EmailAmikom }}</span>
        </div>
      </li>
      <li class="list-icon icon-left">
        <div class="icon">
          <KeyIcon/>
        </div>
        <div class="data">
          <label>Kata Sandi Email</label> 
          <span class="password">{{ password }}</span>
          <span class="toggle-pass" @click="togglePassword()">
            <span v-if="!showPass">Lihat Sandi</span>
            <span v-if="showPass">Sembunyikan</span>
          </span>
        </div>
      </li>
    </ul>
  </Card>
</template>

<script>
import Card from '@/components/global/Card.vue'
import CardHeader from '@/components/global/CardHeader.vue'
import { CreditCardIcon, MailIcon, KeyIcon } from 'vue-feather-icons'

export default {
  name: 'ProfileInfo',
  components: {
    CreditCardIcon, MailIcon, KeyIcon,
    Card, CardHeader
  },
  data(){
    return {
      showPass: false,
      password: '******'
    }
  },
  methods: {
    togglePassword(){
      this.showPass = !this.showPass
      if(this.showPass){
        this.password = this.$store.state.profile.Mhs.PassEmail
      }
      else{
        this.password = '******'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile-info{
  margin: 0 15px;
  margin-top: -150px;
  position:relative;
  background: var(--mainbg-color-transparent);
  backdrop-filter: blur(var(--blur-amount));
  color: var(--white);
  z-index: 1;
}

@media (max-width: 350px) {
  .profile-info{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: -100px;
  }
}

.user-info{
  list-style: none;
  padding: 0;
  margin: 0;

  li{
    position: relative;
    line-height: 50px;
    overflow: hidden;

    &.list-icon{
      padding-left: 35px;

      svg{
        display: inherit;
        width: 20px;
        height: 20px;
      }
      .icon{
        position: absolute;
        height: 24px;
        width: 24px;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--white);
      }
      &.icon-left .icon{
        left: 0;
        right: auto;
      }
    }
    label{
      top: 2px;
      line-height: normal;
      position: absolute;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: .1rem;
      opacity: .3;
    }
    span{
      font-size: var(--h6);
      &.password{
        letter-spacing: .05rem;
      }
      &.toggle-pass {
        color: var(--main-color);
        display: inline-block;
        position: absolute;
        right: 0;
        line-height: 20px;
        padding: 10px;
        margin: 5px 0;
        cursor: pointer;
        &:hover{
          opacity: 0.8;
        }
      }
    }
  }
}
</style>

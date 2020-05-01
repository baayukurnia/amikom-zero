<template>
  <div class="card profile-info">
    <div class="card-header">
      <h2 class="nama overmask">{{ $store.state.profile.data.Mhs.Nama.toLowerCase() }}</h2>
      <span class="nim">Semester {{ $store.state.profile.data.PeriodeAkademik.Semester }} - {{ $store.state.profile.data.PeriodeAkademik.TahunAkademik }}</span>
      <div class="appearance oval">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="69.895" height="69.895" viewBox="0 0 69.895 69.895"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0.149"/></linearGradient></defs><path d="M34.947,69.895a34.957,34.957,0,0,1-13.6-67.148,34.956,34.956,0,0,1,27.206,64.4A34.728,34.728,0,0,1,34.947,69.895Zm0-54.122A19.174,19.174,0,1,0,54.121,34.947,19.2,19.2,0,0,0,34.947,15.773Z" fill="url(#a)"/></svg>
      </div>
      <div class="appearance square">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="61.425" height="61.425" viewBox="0 0 61.425 61.425"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0.149"/></linearGradient></defs><path d="M59.425,61.425H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H59.425a2,2,0,0,1,2,2V59.425A2,2,0,0,1,59.425,61.425Zm-41.85-44.85a1,1,0,0,0-1,1V45.8a1,1,0,0,0,1,1H45.8a1,1,0,0,0,1-1V17.575a1,1,0,0,0-1-1Z" fill="url(#a)"/></svg>
      </div>
    </div>
    <ul class="user-info">
      <li class="list-icon icon-left">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
        </div>
        <div class="data">
          <label>Nim</label>
          <span>{{ $store.state.profile.data.Mhs.Npm }}</span>
        </div>
      </li>
      <li class="list-icon icon-left overmask">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </div>
        <div class="data">
          <label>Email</label>
          <span>{{ $store.state.profile.data.Mhs.EmailAmikom }}</span>
        </div>
      </li>
      <li class="list-icon icon-left">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
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
  </div>
</template>

<script>

export default {
  name: 'ProfileInfo',
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
        this.password = this.$store.state.profile.data.Mhs.PassEmail
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

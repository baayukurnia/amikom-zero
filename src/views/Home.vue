<template>
  <div class="home">
    <div class="container">
      <div class="profile">
        <div class="d-flex justify-content-between">
          <div class="user d-flex">
            <div class="profile-image">
              <img src="img/people.png">
            </div>
            <div class="profile-user">
              <h1 class="name">Muhammad Bayu K P</h1>
              <h2 class="nim">19.11.3286</h2>
            </div>
          </div>
          <div class="setting">
              <button @click.prevent="openModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </button>
          </div>
        </div>
      </div>
      <div class="launcher d-grid">
        <div class="item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="78" viewBox="0 0 78 78"><defs><linearGradient id="s" y1="1" x2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="var(--icon-gradientx)"/><stop offset="1" stop-color="var(--icon-gradienty)"/></linearGradient><linearGradient id="sx" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="var(--icon-gradient-white)"/><stop offset="1" stop-color="var(--icon-gradient-white)" stop-opacity="0.149"/></linearGradient></defs><rect width="78" height="78" rx="20" fill="url(#s)"/><g transform="translate(0 0)" opacity="0.15"><path d="M2577-59.366V-77.873a2,2,0,0,1,2-2h37v.507a19.973,19.973,0,0,1-8.09,16.069h-13.334a1,1,0,0,0-1,1v2.931Z" transform="translate(-2538 137.365)" fill="url(#sx)"/><path d="M2568.072-67.807V-83.872a19.135,19.135,0,0,0,4.875.628,19.2,19.2,0,0,0,19.174-19.174,19.183,19.183,0,0,0-.392-3.868h15.955a35.506,35.506,0,0,1,.21,3.868,34.722,34.722,0,0,1-2.746,13.6,34.84,34.84,0,0,1-7.49,11.109,34.838,34.838,0,0,1-11.109,7.49,34.721,34.721,0,0,1-13.6,2.746A35.358,35.358,0,0,1,2568.072-67.807Z" transform="translate(-2568.072 106.286)" fill="url(#sx)"/></g><g transform="translate(29.346 29.346)"><path d="M8.556,3H5.222A2.222,2.222,0,0,0,3,5.222V8.556m20,0V5.222A2.222,2.222,0,0,0,20.778,3H17.444m0,20h3.333A2.222,2.222,0,0,0,23,20.778V17.444m-20,0v3.333A2.222,2.222,0,0,0,5.222,23H8.556" transform="translate(-3 -3)" fill="none" stroke="#fff" stroke-width="2.5"/></g></svg>
          </div>
          <span>
            Scan QR
          </span>
        </div>
        <div class="item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="78" viewBox="0 0 78 78"><defs><linearGradient id="m" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="var(--icon-gradient-white)"/><stop offset="1" stop-color="var(--icon-gradient-white)" stop-opacity="0.149"/></linearGradient></defs><rect width="78" height="78" rx="20" fill="var(--icon-bg)"/><g transform="translate(0 0)" opacity="0.05"><path d="M2595-95.448a2,2,0,0,1-2-2v-39.918h3a19.927,19.927,0,0,1,13.575,5.313v20.979a1,1,0,0,0,1,1H2616v14.625Z" transform="translate(-2538 137.365)" fill="url(#m)"/><path d="M2593.672-28.286a19.16,19.16,0,0,0,.448-4.132,19.2,19.2,0,0,0-19.174-19.175,19.077,19.077,0,0,0-6.875,1.274V-66.692a35.1,35.1,0,0,1,6.875-.674,34.728,34.728,0,0,1,13.6,2.747,34.816,34.816,0,0,1,11.108,7.489,34.836,34.836,0,0,1,7.49,11.109,34.723,34.723,0,0,1,2.746,13.6,35.494,35.494,0,0,1-.24,4.132Z" transform="translate(-2568.072 106.286)" fill="url(#a)"/></g><path d="M17.2,0,10.775-16.675H6.325L-.125,0h4.05l1.05-2.825h7.15L13.15,0ZM11.15-5.95H5.95l2.6-7.175ZM28.6,0V-7.8c0-3.475-2.525-4.575-5.275-4.575a7.921,7.921,0,0,0-5.275,1.9l1.2,2.125a5.081,5.081,0,0,1,3.525-1.425c1.6,0,2.65.8,2.65,2.025v1.625A4.967,4.967,0,0,0,21.6-7.6c-1.925,0-4.2,1.075-4.2,3.9a4.023,4.023,0,0,0,4.2,4,5,5,0,0,0,3.825-1.55V0ZM22.875-1.85c-1.25,0-2.275-.65-2.275-1.775,0-1.175,1.025-1.825,2.275-1.825a3.176,3.176,0,0,1,2.55,1.05v1.5A3.176,3.176,0,0,1,22.875-1.85Z" transform="translate(25 46.635)" fill="#fff"/></svg>
          </div>
          <span>
            Absen Kode
          </span>
        </div>
        <div class="item">
          <div class="icon notif">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="78" viewBox="0 0 78 78"><defs><linearGradient id="m" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="var(--icon-gradient-white)"/><stop offset="1" stop-color="var(--icon-gradient-white)" stop-opacity="0.149"/></linearGradient></defs><rect width="78" height="78" rx="20" fill="var(--icon-bg)"/><g transform="translate(0 0)" opacity="0.05"><path d="M2538-103.448v-13.918q0-.355.012-.707h5.787a1,1,0,0,0,1-1v-13.318a19.924,19.924,0,0,1,13.2-4.975h1.425v31.918a2,2,0,0,1-2,2Z" transform="translate(-2538 137.365)" fill="url(#m)"/><path d="M2633.235-32.707a34.814,34.814,0,0,1-7.489-11.109,34.723,34.723,0,0,1-2.747-13.6,34.727,34.727,0,0,1,2.747-13.6,34.814,34.814,0,0,1,7.489-11.109,34.834,34.834,0,0,1,11.109-7.489q.673-.284,1.353-.54a20.094,20.094,0,0,1,.375,3.872v13.824a19.15,19.15,0,0,0-7.3,15.045,19.135,19.135,0,0,0,6.584,14.45,20.052,20.052,0,0,1-9.867,12.33Q2634.323-31.619,2633.235-32.707Z" transform="translate(-2568.072 106.286)" fill="url(#m)"/></g><g transform="translate(29.03 27.117)"><rect width="20" height="19.88" rx="2" transform="translate(0 2.342)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="none"/><line y2="4.684" transform="translate(14.444)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="none"/><line y2="4.684" transform="translate(5.556)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="none"/><line x2="20" transform="translate(0 8.889)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="none"/></g></svg>          </div>
          <span>
            Jadwal
          </span>
        </div>
        <div class="item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="78" viewBox="0 0 78 78"><defs><linearGradient id="m" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="var(--icon-gradient-white)"/><stop offset="1" stop-color="var(--icon-gradient-white)" stop-opacity="0.149"/></linearGradient></defs><rect width="78" height="78" rx="20" fill="var(--icon-bg)"/><g transform="translate(0 0)" opacity="0.05"><path d="M2538-116.447v-.918a19.928,19.928,0,0,1,5.436-13.707H2565.8a1,1,0,0,0,1-1v-5.293h14.625v18.918a2,2,0,0,1-2,2Z" transform="translate(-2538 137.365)" fill="url(#m)"/><path d="M2588.072-28.286A20.082,20.082,0,0,1,2584-28.7a34.732,34.732,0,0,1,2.745-13.321,34.837,34.837,0,0,1,7.49-11.108,34.833,34.833,0,0,1,11.108-7.49,34.73,34.73,0,0,1,13.6-2.746,34.731,34.731,0,0,1,13.6,2.746,34.83,34.83,0,0,1,11.108,7.49,35.354,35.354,0,0,1,2.414,2.672v2.171a19.975,19.975,0,0,1-8.3,16.222,19.207,19.207,0,0,0-18.826-15.528,19.2,19.2,0,0,0-19.175,19.174c0,.044,0,.088,0,.132Z" transform="translate(-2568.072 106.286)" fill="url(#m)"/></g><g transform="translate(29.251 26.572)"><path d="M16.5,2H6.5A2.5,2.5,0,0,0,4,4.5v20A2.5,2.5,0,0,0,6.5,27h15A2.5,2.5,0,0,0,24,24.5V9.5Z" transform="translate(-4 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M14,2V9.024h7.024" transform="translate(-1.024 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line x1="6.827" transform="translate(6.587 13.75)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="none"/><line x1="6.827" transform="translate(6.587 18.75)" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M10.341,9H8" transform="translate(-2.955 -0.25)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
          </div>
          <span>
            KHS
          </span>
        </div>
        <div class="item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="78" viewBox="0 0 78 78"><defs><linearGradient id="m" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="var(--icon-gradient-white)"/><stop offset="1" stop-color="var(--icon-gradient-white)" stop-opacity="0.149"/></linearGradient></defs><rect width="78" height="78" rx="20" fill="var(--icon-bg)"/><g transform="translate(0 0)" opacity="0.05"><path d="M2558-59.366a19.906,19.906,0,0,1-11.2-3.428V-80.3a1,1,0,0,0-1-1H2538V-97.872h21.426a2,2,0,0,1,2,2v36.507Z" transform="translate(-2538 137.365)" fill="url(#m)"/><path d="M2618.344-77.217a34.834,34.834,0,0,1-11.109-7.49,34.825,34.825,0,0,1-7.489-11.108,34.623,34.623,0,0,1-2.609-10.471h15.892a19.2,19.2,0,0,0,18.919,16.042,19.085,19.085,0,0,0,12.274-4.455,19.921,19.921,0,0,1,1.851,8.413v8.843q-.26.115-.522.226a34.726,34.726,0,0,1-13.6,2.746A34.724,34.724,0,0,1,2618.344-77.217Z" transform="translate(-2568.072 106.286)" fill="url(#m)"/></g><g transform="translate(29 29.373)"><path d="M10.939,4H3.987A1.987,1.987,0,0,0,2,5.987V19.892a1.987,1.987,0,0,0,1.987,1.987H17.892a1.987,1.987,0,0,0,1.987-1.987V12.939" transform="translate(-2 -1.879)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M18.5,2.5a2.121,2.121,0,0,1,3,3L12,15,8,16l1-4Z" transform="translate(-2.121 -1.879)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
          </div>
          <span>
            KRS
          </span>
        </div>
        <div class="item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="78" viewBox="0 0 78 78"><defs><linearGradient id="m" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="var(--icon-gradient-white)"/><stop offset="1" stop-color="var(--icon-gradient-white)" stop-opacity="0.149"/></linearGradient></defs><rect width="78" height="78" rx="20" fill="var(--icon-bg)"/><g transform="translate(0 0)" opacity="0.05"><path d="M2596-98.447a2,2,0,0,1-2-2v-36.918h2a19.945,19.945,0,0,1,14.575,6.3v16.988a1,1,0,0,0,1,1H2616v14.625Z" transform="translate(-2538 137.365)" fill="url(#m)"/><path d="M2573.441-34.651a19.06,19.06,0,0,0,2.68-9.768,19.162,19.162,0,0,0-8.049-15.608V-77.559q1.253.421,2.479.939a34.833,34.833,0,0,1,11.108,7.49,34.836,34.836,0,0,1,7.49,11.109,34.722,34.722,0,0,1,2.746,13.6,34.727,34.727,0,0,1-2.746,13.6q-.546,1.292-1.19,2.529A19.945,19.945,0,0,1,2573.441-34.651Z" transform="translate(-2568.072 106.286)" fill="url(#m)"/></g><path d="M11.664,0V-3.312h2.064v-3H11.664v-9.7H6.96L.6-6v2.688H8.256V0ZM8.256-6.312H3.936l4.32-6.672ZM18.288-1.176a2.232,2.232,0,0,0-2.16-2.448A1.916,1.916,0,0,0,14.256-1.7,1.629,1.629,0,0,0,15.888.024a1.8,1.8,0,0,0,.456-.072A4.076,4.076,0,0,1,14.5,2.208l1.32,1.08A5.6,5.6,0,0,0,18.288-1.176ZM25.008.288c4.56,0,6.624-4.152,6.624-8.28s-2.064-8.256-6.624-8.256c-4.584,0-6.624,4.128-6.624,8.256S20.424.288,25.008.288Zm0-3.024c-2.3,0-3.168-2.3-3.168-5.256s.864-5.232,3.168-5.232c2.28,0,3.144,2.28,3.144,5.232S27.288-2.736,25.008-2.736Z" transform="translate(23 47)" fill="#fff"/></svg>
          </div>
          <span>
            Transkip Nilai
          </span>
        </div>
      </div>
      <!-- <div class="news">
        <div class="latest-news">
          <ul>
            <li>
              <div class="thumbnail">
                <img src="/img/news/c9af6615-b1e0-4c07-b526-aef1d0440caa-400x250.jpg">
              </div>
              <div class="content">
                <h3>Kebijakan Perkuliahan Daring Terkait Covid-19</h3>
                <div class="meta">
                  <span class="date">30 Mar 2020</span>
                </div>
              </div>
            </li>
            <li>
              <div class="thumbnail">
                <img src="/img/news/WhatsApp-Image-2020-03-06-at-17.59.30-2-400x250.jpeg">
              </div>
              <div class="content">
                <h3>MoU dengan Perguruan Tinggi di India</h3>
                <div class="meta">
                  <span class="date">7 Mar 2020</span>
                </div>
              </div>
            </li>
            <li>
              <div class="thumbnail">
                <img src="/img/news/Untitled-400x250.jpg">
              </div>
              <div class="content">
                <h3>Amikom Pecahkan Rekor Dunia Wanita Berkebaya</h3>
                <div class="meta">
                  <span class="date">26 Feb 2020</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div> -->
      <TodaySchedule />
      <Modal :class='{ show : showModal }' @close="closeModal">
        <ul class="menu">
          <li><router-link to="/setting">Profil Saya</router-link></li>
          <li>
            <a href="#" @click.prevent="toggleTheme">Mode Gelap</a>
            <div class="list-icon">
              <Toggle :active.sync="darkTheme"/>
            </div>
          </li>
          <span class="divider"></span>
          <li><a href="#">Keluar</a></li>
        </ul>
      </Modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodaySchedule from '@/components/TodaySchedule.vue'
import Modal from '@/components/Modal.vue'
import Toggle from '@/components/Toggle.vue'

export default {
  name: 'Home',
  components: {
    TodaySchedule,
    Modal,
    Toggle
  },
  data(){
    return {
      showModal: false,
      toggleActive: true,
      darkTheme: false
    }
  },
  methods: {
    openModal(){
      this.showModal = true
    },
    closeModal(){
      this.showModal = false
    },
    toggleTheme() {
      this.darkTheme = !this.darkTheme

      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.darkTheme = true
  }
}
</script>

<style lang="scss" scoped>
.home{
  padding-top: 30px;
  min-height: 100vh;
}

.profile{
  padding: 10px 25px;
  position: relative;

  &:before{
    content: url('/img/dots.svg');
    position: absolute;
    left: 10px;
    top: -5px;
    z-index: -1;
  }

  &-image{
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    width: 54px;
    height: 54px;

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
      font-size: 1.125rem;
      letter-spacing: -.03rem;
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

.setting{
    background: var(--bg-color);
    display: block;
    height:40px;
    position: relative;

    &:before{
        content: url('/img/moredots.svg');
        position: absolute;
        top: 23px;
        right: -7px;
        z-index: -1;
    }
    button{
        cursor: pointer;
        color: var(--opacity-color);
        border:0;
        background: none;
        padding: 10px;
        opacity: .5;
        outline: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        &:hover{
            opacity: 1;
        }

        svg{
            width:20px;
            height:20px;
        }
    }
}

.launcher{
  margin: 2.4rem 30px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem 1rem;
  position: relative;

  &:after{
      content: url('/img/suket.svg');
      position: absolute;
      left: -45px;
      bottom: -45px;
  }

  .item{
    text-align: center;

    .icon{
      display: inline-block;
      margin: 0 auto;
      position: relative;
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      &:hover{
        opacity: .8;
      }

      &.notif:before{
        content: '';
        position: absolute;
        top: -3px;
        right: -3px;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        border: 3px solid var(--bg-color);
        background: var(--secondary-color);
      }
    }

    span{
      display: block;
      font-weight: 700;
      font-size: var(--h8);
      letter-spacing: -.02rem;
    }
  }
}

.latest-news{
  position: relative;
  padding-top: 20px;

  &:before{
    content: 'Latest News';
    position: absolute;
    transform: rotate(-90deg);
    left: -20px;
    top: 60px;
    font-size: var(--h7);
    font-weight: 700;
  }
  ul {
    list-style: none;
    margin-left: 50px;
    padding: 0 15px;
    border-left: 1px solid #eee;

  li {
      display: flex;
  }

  .thumbnail {
      width: 175px;
      border-radius: 15px;
      overflow: hidden;
      img {
        max-width: 100%;
      }
  } 

  .content{
    h3{
      font-size: var(--h6);
      font-family: 'Playfair Display';
      font-weight: 400;
    }
    .date{
      font-size: var(--h9);
      font-weight: 700;
    }
  }
}  
}



.menu{
  list-style: none;
  padding: 10px 0;
  margin: 0;
  font-size: var(--h7);
  font-weight: 600;

  li{
    position: relative;
    .list-icon{
      position: absolute;
      right: 20px;
      top: 0;
      padding: 14px 0;
      z-index: -1;
    }
    a{
      display: block;
      padding: 15px 100px 15px 25px;

      &:hover{
        background: var(--hover-bg);
        opacity: 1;
      }
    }
  }
  .divider {
    width: calc(100% - 30px);
    height: 1px;
    display: block;
    padding: 0 10px;
    background: var(--border-color);
    margin: 5px auto;
  }
}
</style>

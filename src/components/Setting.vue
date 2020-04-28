<template>
    <div class="setting">
        <button @click.prevent="openModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
        <Modal :class='{ active : showModal }' @close="closeModal">
            <CardMenu>
              <li class="list-icon">
                  <router-link to="/profil">Profil Saya</router-link>
                  <div class="icon">
                    <UserIcon/>
                  </div>
              </li>
              <li class="list-icon">
                  <a href="#" @click.prevent="toggleTheme">Mode Gelap</a>
                  <Toggle :active.sync="this.$store.state.darkTheme"/>
              </li>
              <li class="list-icon">
                  <label>Utamakan Performa</label>
                  <a href="#" @click.prevent="toggleBlur">Disable Blur</a>
                  <Toggle :active.sync="this.$store.state.performanceMode"/>
              </li>
              <li class="list-icon">
                  <a href="https://instagram.com/baayukurnia">Feedback via DM</a>
                  <div class="icon">
                    <CoffeeIcon/>
                  </div>
              </li>
              <li class="list-icon">
                  <router-link to="/tentang">Tentang Aplikasi</router-link>
                  <div class="icon">
                    <InfoIcon/>
                  </div>
              </li>
              <span class="divider"></span>
              <li class="list-icon">
                <a href="#">Keluar</a>
                <div class="icon">
                  <PowerIcon/>
                </div>
              </li>
            </CardMenu>
        </Modal>
    </div>
</template>

<script>
import { UserIcon, CoffeeIcon, InfoIcon, PowerIcon } from 'vue-feather-icons'
import Modal from '@/components/Modal.vue'
import Toggle from '@/components/Toggle.vue'
import CardMenu from '@/components/CardMenu.vue'

export default {
  name: 'Setting',
  components: {
    Modal,
    Toggle,
    CardMenu,
    UserIcon,
    CoffeeIcon,
    InfoIcon,
    PowerIcon
  },
  data(){
    return {
      showModal: false,
      toggleActive: true
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
      this.$store.state.darkTheme = !this.$store.state.darkTheme

      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.$store.state.darkTheme ? 'dark' : 'light'
      )
    },
    toggleBlur() {
      this.$store.state.performanceMode = !this.$store.state.performanceMode
      localStorage.performanceMode = this.$store.state.performanceMode
    }
  },
  mounted() {
    if(window.__theme == 'dark') this.$store.state.darkTheme = true
    if(localStorage.performanceMode == 'true'){
      this.$store.state.performanceMode = true
    }
    else{
      this.$store.state.performanceMode = false
    }
  }
}
</script>

<style lang="scss" scoped>
.setting{
    display: block;
    height:40px;
    margin: 7px 0;

    &:after{
        content: url('/img/moredotsx.svg');
        position: absolute;
        transform: translate(-81px, 25px);
        pointer-events: none;
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
</style>
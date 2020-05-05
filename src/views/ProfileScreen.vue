<template>
  <div class="profile">
    <Navigation mode="light" title="Profil Saya" :transparentNav="true"/>
    <ScrollView>
      <keep-alive>
        <ProfileImage/>
      </keep-alive>
        <ProfileInfo/>
      <div class="profile-action d-flex justify-content-between" id="more">
        <a href="#" v-scroll-to="{el:'#more', offset: -60}" class="btn more" @click="toggleMore()">
          Selengkapnya
          <div class="icon" :class="{ 'show' : showMore}"></div>
        </a>
        <div class="btn sign-out" @click="logout">
          Keluar
          <div class="icon">
            <PowerIcon/>
          </div>
        </div>
      </div>
      <SlideUpDown :active="showMore">
        <Card class="profile-more">
          <h3 class="heading">Biodata</h3>
          <ul>
            <li class="list-icon icon-left">
              <div class="icon">
                <UserIcon/>
              </div>
              <div class="data">
                <label>Nama Lengkap</label>
                <span class="capitalize"> {{ $store.state.Profile.Mhs.Nama.toLowerCase() }}</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <CreditCardIcon/>
              </div>
              <div class="data">
                <label>Nim</label>
                <span>{{ $store.state.Profile.Mhs.Npm }}</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <MehIcon/>
              </div>
              <div class="data">
                <label>Jenis Kelamin</label>
                <span>-</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <BookOpenIcon/>
              </div>
              <div class="data">
                <label>Program Studi</label>
                <span>- --- Semester {{ $store.state.Profile.PeriodeAkademik.Semester }} --- {{ $store.state.Profile.PeriodeAkademik.TahunAkademik }}</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <UsersIcon/>
              </div>
              <div class="data">
                <label>Dosen Wali</label>
                <span>-</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <MoonIcon/>
              </div>
              <div class="data">
                <label>Agama</label>
                <span>-</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <MapPinIcon/>
              </div>
              <div class="data">
                <label>Kewarganegaraan</label>
                <span>-</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <HomeIcon/>
              </div>
              <div class="data">
                <label>Tempat Lahir</label>
                <span>-</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <CalendarIcon/>
              </div>
              <div class="data">
                <label>Tanggal Lahir</label>
                <span>-</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <PhoneIcon/>
              </div>
              <div class="data">
                <label>No Handphone</label>
                <span>-</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <MailIcon/>
              </div>
              <div class="data">
                <label>Email Alternatif</label>
                <span>-</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <BookIcon/>
              </div>
              <div class="data">
                <label>Nama SMA/SMK/Univ Asal</label>
                <span>-</span>
              </div>
            </li>
            <li class="list-icon icon-left">
              <div class="icon">
                <MapPinIcon/>
              </div>
              <div class="data">
                <label>Kota SMA/SMK/Univ Asal</label>
                <span>-</span>
              </div>
            </li>
          </ul>
        </Card>
      </SlideUpDown>
    </ScrollView>
  </div>
</template>

<script>
import { PowerIcon, UserIcon, CreditCardIcon , MehIcon, BookOpenIcon, UsersIcon, MoonIcon, HomeIcon, CalendarIcon, MailIcon, PhoneIcon, BookIcon, MapPinIcon } from 'vue-feather-icons'
import Navigation from '@/components/global/Navigation.vue'
import ScrollView from '@/components/global/ScrollView.vue'
import Card from '@/components/global/Card.vue'
import SlideUpDown from '@/components/global/SlideUpDown.js'
import ProfileImage from '@/components/ProfileScreen/ProfileImage.vue'
import ProfileInfo from '@/components/ProfileScreen/ProfileInfo.vue'

export default {
  name: 'ProfileScreen',
  components: {
    PowerIcon, UserIcon, CreditCardIcon , MehIcon, BookOpenIcon, UsersIcon, MoonIcon, HomeIcon, CalendarIcon, MailIcon, PhoneIcon, BookIcon, MapPinIcon,
    Navigation,
    ProfileImage,
    ProfileInfo,
    ScrollView,
    Card,
    SlideUpDown,
  },
  data(){
    return {
      showMore: false
    }
  },
  mounted(){
    this.init()
    this.$store.state.statusBar.color = 'white'
  },
  methods: {
    logout: function () {
            this.$store.dispatch('AUTH_LOGOUT')
            .then(() => {
              this.$store.state.auth = false
              this.$router.push('/')
            })
    },
    toggleMore(){
      this.showMore = !this.showMore
    },
    statusBarHandler () {
      var el = document.getElementById('scroll-view')
      var scrollPos = el.scrollTop
      var offset = el.offsetHeight * 0.4
      if(scrollPos > offset){
        this.$store.state.statusBar.scroll = true
      }
      else{
        this.$store.state.statusBar.scroll = false
      }
    },
    init(){
      document.getElementById('scroll-view').addEventListener('scroll', this.statusBarHandler, false)
    }
  },
  beforeDestroy(){
    this.$store.state.statusBar.color = null
    this.$store.state.statusBar.scroll = false
  }
}
</script>

<style lang="scss" scoped>
.profile{
  padding: 0;

  &-action{
    margin: 15px;

    .btn{
      padding: 15px 20px;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      background: none;
      color: var(--body-color);
      font-size: var(--h6);

      &:hover{
        opacity: .8;
      }

      &.more{
        padding: 15px 10px;
        .icon{
          position: relative;
          width: 18px;
          height: 18px;
          &:before, &:after{
            content: '';
            position: absolute;
            width: 9px;
            height: 2px;
            background: var(--body-color);
            top: 8px;
            right: 7px;
            transform: rotate(45deg);
            border-radius: 2px;
            transition: .3s;
          }
          &:before{
            right: 2px;
            transform: rotate(-45deg);
          }

          &.show{
            &:before{
              transform: rotate(45deg);
            }
            &:after{
              transform: rotate(-45deg);
            }
          }
        }
      }
      &.sign-out{
        background: var(--red);
        color: var(--white);

        .icon svg{
          overflow: visible;

          polyline, line{
            transition: .3s;
          }
        }
      }
      .icon{
        margin-left: 7px;
        display: inline-block;
        height: 18px;
        svg{
          width: 18px;
          height: 18px;
        }
      }
    }
  }

  &-more{
    margin-right: 30px;
    padding: 30px 0;
    background: var(--mainbg-color-transparent);
    color: var(--white);
    border-radius: 0 var(--radius) 0 0;
  }
}

.capitalize{
  text-transform: capitalize;
}

.profile-more ul{
  list-style: none;
  padding: 0;
  margin: 0;

  li{
    position: relative;
    line-height: 50px;
    overflow: hidden;

    &.overmask{
      mask-image: linear-gradient(to right, black 90%, transparent);
    }

    &.list-icon{
      padding-left: 60px;

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
        left: 25px;
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
        font-size: var(--h5);
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

@media (max-width: 350px){
  .profile{
    &-action{
      .btn{
        .icon{
          height: 16px;
          svg{
            width: 16px;
            height: 16px;
          }
        } 
      }
    }
  }
}
</style>
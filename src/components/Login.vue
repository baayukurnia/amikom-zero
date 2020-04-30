<template>
    <Modal :state-open="stateOpen" :disable-close="true" :bottom="0" class="login">
        <transition name="fade">
        <div v-show="!showMore" :class="['card login-card', { 'hidden' : showMore}]">
            <div class="card-header">
                <h2 class="nama">Login Yuk!</h2>
                <div class="appearance oval">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="69.895" height="69.895" viewBox="0 0 69.895 69.895"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0.149"/></linearGradient></defs><path d="M34.947,69.895a34.957,34.957,0,0,1-13.6-67.148,34.956,34.956,0,0,1,27.206,64.4A34.728,34.728,0,0,1,34.947,69.895Zm0-54.122A19.174,19.174,0,1,0,54.121,34.947,19.2,19.2,0,0,0,34.947,15.773Z" fill="url(#a)"/></svg>
                </div>
                <div class="appearance square">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="61.425" height="61.425" viewBox="0 0 61.425 61.425"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0.149"/></linearGradient></defs><path d="M59.425,61.425H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H59.425a2,2,0,0,1,2,2V59.425A2,2,0,0,1,59.425,61.425Zm-41.85-44.85a1,1,0,0,0-1,1V45.8a1,1,0,0,0,1,1H45.8a1,1,0,0,0,1-1V17.575a1,1,0,0,0-1-1Z" fill="url(#a)"/></svg>
                </div>
            </div>
            <div class="card-body">
                <p>Gunakan semua fitur Amikom Zero.</p>
                <div class="login-form">
                    <form action="">
                        <input v-model="nim" class="nim" type="text" name="nim" placeholder="NIM">
                        <div class="input-group">
                            <input v-model="password" class="password" type="password" name="password" placeholder="Kata Sandi">
                            <div :class="['btn', { 'rotating' : isLogin }]" @click="login"><ArrowRightIcon v-if="!isLogin"/><RotateCwIcon v-if="isLogin"/></div>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        </transition>
        <transition name="fade" mode="out-in">
            <p v-if="!showMore" key="presence" class="out">Apa mau <a href="#" @click.prevent="toggleNoAuthPresence">presensi aja?</a></p>
            <p v-else key="login" class="out">Presensi lebih cepat, <a href="#" @click.prevent="toggleNoAuthPresence">login dulu.</a></p>
        </transition>
        <SlideUpDown :active="showMore" class="no-auth-presence">
            <NoAuthPresence/>
        </SlideUpDown>
    </Modal>
</template>

<script>
import axios from 'axios'

import { ArrowRightIcon, RotateCwIcon } from 'vue-feather-icons'
import Modal from '@/components/Modal.vue'
import SlideUpDown from '@/components/SlideUpDown.js'
import NoAuthPresence from '@/components/NoAuthPresence.vue'

export default {
    name: 'Login',
    components: {
        ArrowRightIcon, RotateCwIcon,
        SlideUpDown,
        NoAuthPresence,
        Modal
    },
    data(){
        return{
            isLogin: false,
            stateOpen: true,
            nim: null,
            password: null,
            response: null,
            showMore: false,
        }
    },
    methods:{
        toggleNoAuthPresence(){
            this.showMore = !this.showMore
        },
        login(){
            console.log(this.nim,this.password)
            axios.post('https://api.febridk.id/amikom',
                {
                nim: this.nim,
                password: this.password
                }
            )
            .then(request => this.loginSuccessful(request))
            .catch(() => this.loginFailed())
        },
        loginSuccessful (request) {
            localStorage.token = request.data.access_token
            this.$store.state.auth = true
            console.log('berhasil login')
            this.isLogin = false
        },
        loginFailed () {
            console.log('gagal')
            delete localStorage.token
            this.isLogin = false
        }
    }
}
</script>

<style lang="scss" scoped>
.out{
    text-align: center;
    margin: 70px 0;
    color: var(--body-color);
    a{
        color: var(--link-color);
    }
}
.login{
    &-card{
        margin: 0 25px;
        background: var(--mainbg-color);
    }
    &-form{
        .input-group{
            display: flex;

            input{
                border-radius: 10px 0 0 10px;
                margin-bottom: 0;
            }
            .btn{
                border-radius: 0 10px 10px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 15px;
                svg{
                    display: inherit;
                }
            }
        }
        input{
            width: 100%;
            margin-bottom: 10px;
            font-size: var(--h5);

            &::placeholder{
                letter-spacing: 0;
                color: var(--placeholder-color);
                font-weight: 400;
                font-size: var(--h6);
            }
            &.nim{
                font-weight: 700;
                letter-spacing: .1rem;
            }

            &.password{
                letter-spacing: .2rem;
            }
        }
    }
}
.full{
    width: 100%
}
.rotating svg{-webkit-animation:rotation .5s linear infinite;animation:rotation .5s linear infinite}
@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}
</style>
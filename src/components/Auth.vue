<template>
    <Modal :state-open="!isAuthenticated" :disable-close="true" :bottom="0" class="login">
        <transition name="fade">
        <Card v-show="!presence" :class="['login-card', { 'hidden' : presence}]">
            <CardHeader>
                <h2 class="title">Masuk</h2>
            </CardHeader>
            <div class="card-body">
                <p>Gunakan semua fitur Amikom Zero.</p>
                <div :class="['login-form', statusAuth]">
                    <p class="error-message" v-if="statusAuth == 'error'">{{ errorMsg }}</p>
                    <label for="nim" class="hidden">NIM</label>
                    <input v-model="nim" class="nim" type="text" name="nim" placeholder="NIM" ref="nim" maxlength="10" v-on:keyup.enter="login" required>
                    <div class="input-group">
                        <label for="password" class="hidden">Password</label>
                        <input v-model="password" class="password" type="password" name="password" placeholder="Kata Sandi" maxlength="24" v-on:keyup.enter="login" required>
                        <button :class="['btn', { 'disabled' : this.nim && !this.password }]" @click="login" aria-label="Login">
                            <RotateCwIcon v-if="statusAuth == 'loading'"/>
                            <CheckIcon v-else-if="statusAuth == 'success'"/>
                            <ArrowRightIcon v-else/>
                        </button>
                    </div>
                </div>
            </div>
        </Card>
        </transition>
        <transition name="fade" mode="out-in">
            <p v-if="!presence" key="presence" class="out">Apa mau <a @click.prevent="togglePresence">presensi aja?</a></p>
            <p v-else key="login" class="out">Presensi lebih cepat, <a @click.prevent="togglePresence">masuk dulu.</a></p>
        </transition>
        <SlideUpDown :active="presence" class="no-auth-presence">
            <NoAuthPresence/>
        </SlideUpDown>
    </Modal>
</template>

<script>
import { mapState } from 'vuex'

import { ArrowRightIcon, RotateCwIcon, CheckIcon } from 'vue-feather-icons'
import Card from '@/components/global/Card.vue'
import CardHeader from '@/components/global/CardHeader.vue'
import Modal from '@/components/global/Modal.vue'
import SlideUpDown from '@/components/global/SlideUpDown.js'
import NoAuthPresence from '@/components/NoAuthPresence.vue'

import validate from '@/components/mixins/validate.js'

export default {
    name: 'Auth',
    mixins: [validate],
    components: {
        ArrowRightIcon, RotateCwIcon, CheckIcon,
        Card, CardHeader,
        SlideUpDown,
        NoAuthPresence,
        Modal
    },
    computed: {
        ...mapState(['statusAuth', 'isAuthenticated'])
    },
    data(){
        return{
            nim: null,
            password: null,
            response: null,
            presence: false,
            errorMsg: "Nim atau password salah."
        }
    },
    mounted() {
        const inputNim = this.$refs.nim
        inputNim.addEventListener('keydown',this.enforceFormat);
        inputNim.addEventListener('keyup',this.formatNim);
    },
    methods:{
        logout: function () {
            this.$store.dispatch('AUTH_LOGOUT')
            .then(() => {
                // this.$store.state.auth = false
            })
        },
        togglePresence(){
            this.presence = !this.presence
        },
         login: function () {
            const { nim, password } = this
             if(nim && password){
                 if(password.length < 5){
                     this.$store.commit('AUTH_REQUEST')
                     setTimeout(() => {
                     this.$store.commit('AUTH_ERROR')
                     }, 1500);
                 }
                 else{
                     this.$store.dispatch('AUTH_REQUEST', { nim, password }).then(() => {
                        
                    }).catch(err => {
                        this.errorMsg = err
                    })
                 }
             }
        },
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

                &:focus{
                    outline: none;
                }
                &.disabled{
                    opacity: .6;
                    pointer-events: none;
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

        .error-message{
            color: var(--red)
        }
        &.error{
            input{
                box-shadow: 0 0 0 2px var(--red);
            }
        }
        &.loading{
            input{
                opacity: .4;
                pointer-events: none;
            }
        }
        &.success button{
            background: var(--green);
            pointer-events: none;
        }
    }
}
.full{
    width: 100%
}
.loading svg{-webkit-animation:rotation .5s linear infinite;animation:rotation .5s linear infinite}
@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}
</style>
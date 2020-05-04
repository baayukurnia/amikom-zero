<template>
    <Modal :state-open="stateOpen" :bottom="0">
        <Card class="presence-code">
            <div class="back" @click="close()"><ArrowLeftIcon/></div>
            <h3 class="heading">Absen Kode</h3>
            <div class="card-body">
                <p class="message">Masukkan 5 digit kode yang tertera pada layar proyektor</p>
                <p class="error-message" v-if="statusPresence == 'error'">Presensi Belum Berhasil</p>
                <div :class="['presence-form', statusPresence]">
                    <div class="code" ref="PresenceCode">
                        <input v-model="a" placeholder="4" maxlength=1 ref="code">
                        <input v-model="b" placeholder="N" maxlength=1>
                        <input v-model="c" placeholder="7" maxlength=1>
                        <input v-model="d" placeholder="A" maxlength=1>
                        <input v-model="e" placeholder="Y" maxlength=1 v-on:keyup.enter="presencePost">
                    </div>
                    <button :class="['btn', {'disabled': this.a && !this.e}]" @click="presencePost" aria-label="Presensi Kode">
                        <span v-if="statusPresence == 'loading'">
                            <RotateCwIcon/>
                        </span>
                        <span v-else-if="statusPresence == 'success'">
                            <span>Berhasil</span>
                            <CheckIcon/>
                        </span>
                        <span v-else>Presensi</span>
                    </button>
                </div>
            </div>
        </Card>
    </Modal>
</template>

<script>
import { mapState } from 'vuex'

import { RotateCwIcon, CheckIcon, ArrowLeftIcon } from 'vue-feather-icons'
import Modal from '@/components/global/Modal.vue'
import Card from '@/components/global/Card.vue'

export default {
    name: 'PresenceCode',
    components:{
        RotateCwIcon, CheckIcon, ArrowLeftIcon,
        Modal,
        Card
    },
    computed: {
        ...mapState(['statusPresence'])
    },
    data(){
        return{
            stateOpen: false,
            nim: null,
            a: null,
            b: null,
            c: null,
            d: null,
            e: null,
        }
    },
    methods:{
        resetPresence(){
            this.a=null
            this.b=null
            this.c=null
            this.d=null
            this.e=null
            this.$refs.code.focus()
        },
        open(){
            this.resetPresence()
            this.$store.commit('ACTIVITY_PRESENCE_RESET')
            this.stateOpen = true
            setTimeout(() => {
                this.$refs.code.focus()
            }, 510);
        },
        close(){
            this.stateOpen = false
        },
        presencePost: function () {
            if(this.a && this.b && this.c && this.d && this.e){
                const kode = this.a.concat(this.b).concat(this.c).concat(this.d).concat(this.e)
                const nim = this.$store.state.Profile.Mhs.Npm
                if(kode.length != 5){
                        this.$store.commit('ACTIVITY_PRESENCE_REQUEST')
                    setTimeout(() => {
                        this.$store.commit('ACTIVITY_PRESENCE_ERROR')
                    }, 1500);
                }
                else{
                    this.$store.dispatch('ACTIVITY_PRESENCE_REQUEST', { nim, kode })
                    .then((resp) => {
                        const data = resp.data
                        if(data.status == false){
                            this.resetPresence()
                        }
                        else if(data.status == true){
                            this.$store.commit('ACTIVITY_PRESENCE_SUCCESS')
                            setTimeout(() => {
                                this.stateOpen = false
                            }, 1000);
                        }
                    })
                }
            }
        },
    },
    mounted(){
        this.$refs.PresenceCode.addEventListener('keyup', event => {
            if (event.key == 'Backspace' || event.key == 'ArrowLeft') {
                if(event.target.previousElementSibling){
                    let e = event.target.previousElementSibling
                    e.focus()
                    e.select()
                }
            }
            else if(event.key == 'ArrowRight' || event.target.value){
                if(event.target.nextElementSibling){
                    let e = event.target.nextElementSibling
                    e.focus()
                    e.select()
                }
            }
            
        })
    }
}
</script>

<style lang="scss" scoped>
.active .presence-code{
    transform: translate3d(0,0,0);
    opacity: 1;
}
.presence-code{
    padding-bottom: 40px;
    border-radius: 25px 25px 0 0;
    text-align: center;
    transform: translate3d(0, 100%, 0);
    transition: .5s var(--ease);

    .back{
        position: absolute;
        left: 0;
        padding: 11px 20px;
        cursor: pointer;
        z-index: 1;
    }
    .message{
        margin-bottom: 50px;
    }
    .heading{
        margin: 0;
    }
    &.card{
        background: var(--mainbg-color);
    }
    .code{
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 7px;
    margin-bottom: 18px;

        input{
            width: 100%;
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            padding: 18px 0;
            border: 2px dashed rgba(255,255,255,.2);
            color: #fff;
            background: none;

            &::placeholder{
                color: rgba(255,255,255,.03);
            }
            &:focus{
                border-color: #fff;   
            }
            &:not(:placeholder-shown){
                background: rgba(255,255,255,.2);
                &:not(:focus){
                    border-color: transparent
                }
            }
        }
    }

    button{
        display: block;
        width: 100%;
        &:focus{
            outline: none;
        }
        &.disabled{
            opacity: .6;
            pointer-events: none;
        }
        span{
            font-size: var(--h5);
            display: inline-flex;
            padding:0 10px;
            svg{
                display: inherit;
                width: 20px;
                height: 20px
            }
        }
    }
    .error-message{
        color: var(--red)
    }
    .loading{
        .code input, button{
            opacity: .4;
            pointer-events: none;
        }
    }
    .success{
        pointer-events: none;
        .code input{
            opacity: .4;
        }
        button{
            background: var(--green);
        }
    }
}
@media (max-width: 350px) {
    .presence-code{
        padding: 20px 15px;
        .code{
            gap: 5px;
        }
    }
}
.loading svg{-webkit-animation:rotation .5s linear infinite;animation:rotation .5s linear infinite}
@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}
</style>
<template>
    <Card class="unauth-presence">
        <h3 class="heading">Absen Kode</h3>
        <div class="card-body">
            <p>Masukkan 5 digit kode yang tertera pada layar proyektor</p>
            <div class="unauth-presence-form">
                <input v-model="nim" class="nim" type="text" name="nim" placeholder="NIM" ref="nim" maxlength="10" v-on:keyup.enter="login" required>
                <div class="presence-code" ref="PresenceCode">
                    <input v-model="a" placeholder="4" maxlength=1>
                    <input v-model="b" placeholder="N" maxlength=1>
                    <input v-model="c" placeholder="7" maxlength=1>
                    <input v-model="d" placeholder="A" maxlength=1>
                    <input v-model="e" placeholder="Y" maxlength=1>
                </div>
                <div class="btn">Presensi</div>
            </div>
        </div>
    </Card>
</template>

<script>
import Card from '@/components/global/Card.vue'

import validate from '@/components/mixins/validate.js'

export default {
    name: 'NoAuthPresence',
    mixins: [validate],
    components: {
        Card
    },
    data(){
        return {
            nim: null,
            a: null,
            b: null,
            c: null,
            d: null,
            e: null,
            kode: null,
        }
    },
    methods:{
        login(){
            this.isLogin = true
            this.$http.post('/presensi', {
                nim: this.nim,
                kode: this.kode
            })
            .then(request => this.loginSuccessful(request))
            .catch(() => this.loginFailed())
        },
        loginSuccessful (req) {
            console.log('logged')
            this.isLogin = false
            if (!req.data.access_token) {
                this.loginFailed()
                return
            }

            localStorage.token = req.data.access_token
            this.error = false

        },
        loginFailed () {
            console.log('gagal')
            delete localStorage.token
        }
    },
    mounted(){
        const inputNim = this.$refs.nim
        inputNim.addEventListener('keydown',this.enforceFormat)
        inputNim.addEventListener('keyup',this.formatNim)

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
.unauth-presence{
    padding-bottom: 40px;
    border-radius: 20px 20px 0 0;
    text-align: center;
    .heading{
        margin: 0;
    }
    &.card{
        background: var(--mainbg-color);
    }
    input{
        width: 100%;
        margin-bottom: 10px;
        font-size: var(--h5);

        &.nim{
            font-weight: 700;
            letter-spacing: .1rem;
            
            &::placeholder{
                letter-spacing: 0;
                color: var(--placeholder-color);
                font-weight: 400;
                font-size: var(--h6);
            }
        }
    }
}
.presence-code{
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    input{
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        padding: 15px 0;
        border: 2px dashed rgba(255,255,255,.2);
        color: #fff;
        background: none;

        &::placeholder{
            color: rgba(255,255,255,.2);
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
</style>
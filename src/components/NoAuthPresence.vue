<template>
    <div class="card no-auth-presence">
        <h3 class="heading">Absen Kode</h3>
        <div class="card-body">
            <p>Masukkan 5 digit kode yang tertera pada layar proyektor</p>
            <div class="login-form">
                <input v-model="nim" class="nim" type="number" name="nim" placeholder="NIM">
                <div class="presence-code" ref="PresenceCode">
                    <input v-model="a" placeholder="4" maxlength=1>
                    <input v-model="b" placeholder="N" maxlength=1>
                    <input v-model="c" placeholder="7" maxlength=1>
                    <input v-model="d" placeholder="A" maxlength=1>
                    <input v-model="e" placeholder="Y" maxlength=1>
                </div>
                <div class="btn">Absen</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoAuthPresence',
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
.no-auth-presence{
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
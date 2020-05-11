<template>
  <div class="qr">
    <Navigation title="Arahkan ke kode QR" :transparentNav="true"/>
    <div class="flex-container">
      <p class="error">{{ error }}</p>
      <qrcode-stream :camera="camera" @decode="presenceQr" @init="onInit">
        <div v-if="presenceMessage" :class="[ 'message', messageStatus ]">
          {{ message }}
        </div>

        <div v-if="presencePending" class="message pending">
          <span class="message">
            <RotateCwIcon class="rotating"/>
          </span>
        </div>
      </qrcode-stream>
    </div>
    </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import { RotateCwIcon } from 'vue-feather-icons'
import Navigation from '@/components/global/Navigation.vue'

export default {
  name: 'QrScreen',
  components: {
    Navigation,
    QrcodeStream,
    RotateCwIcon
  },
  computed: {
    presencePending () {
      return this.presenceMessage === false
        && this.camera === 'off'
    },
  },
  data () {
    return {
      message: '',
      camera: 'auto',
      error: '',
      presenceMessage: false,
      messageStatus: null
    }
  },
    methods: {
    async presenceQr (kodeqr) {
      this.turnCameraOff()

      this.$store.dispatch('ACTIVITY_QR_REQUEST', kodeqr).then((resp) =>{
        if(resp.data.status){
          this.messageStatus = 'success'
        }
        else if(resp.data.status == false){
          this.messageStatus = 'failure'
        }
        console.log(resp.data.status)
        this.message = resp.data.message
        this.presenceMessage = true
        setTimeout(() => {
          this.turnCameraOn()
          this.presenceMessage = false
        }, 2000);
      })
    },


    turnCameraOn () {
      this.camera = 'auto'
    },

    turnCameraOff () {
      this.camera = 'off'
    },
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "Ijinkan aplikasi/tab ini mengakses Kamera terlebih dahulu."
        } else if (error.name === 'NotFoundError') {
          this.error = "Tidak ditemukan kamera pada device ini."
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "Sepertinya kamera sedang dipakai aplikasi lain."
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.qr{
  padding: 0;
  &:before, &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 20vh;
    background: rgba(0,0,0,0.8);
    z-index: 1;
  }
  &:after{
    top: auto;
    bottom: 0;
  }

.message {
  margin: 0;
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, .8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  &.success{
    color: green; 
  }
  &.failure{
    color: red
  }
}

.error{
  position: absolute;
    color: var(--red);
}

svg{
  width: 35px;
  height: 35px;
  color: black;
}
.rotating{-webkit-animation:rotation .5s linear infinite;animation:rotation .5s linear infinite}
@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}
}
</style>
 
<template>
  <div class="qr">
    <Navigation title="Arahkan ke kode QR" :transparentNav="true"/>
    <div class="flex-container">
      <p class="error">{{ error }}</p>
      <qrcode-stream @decode="presenceQr" @init="onInit"></qrcode-stream>
    </div>
    </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import Navigation from '@/components/global/Navigation.vue'

export default {
  name: 'QrScreen',
  components: {
    Navigation,
    QrcodeStream
  },
  data () {
    return {
      result: '',
      error: ''
    }
  },
    methods: {
    presenceQr (kodeqr) {
      this.$store.dispatch('ACTIVITY_QR_REQUEST', kodeqr)
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
    background: var(--overlay);
    z-index: 1;
  }
  &:after{
    top: auto;
    bottom: 0;
  }
  
.error {
  font-weight: bold;
  color: var(--red);
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 40px;
  text-align: center;
}
}
</style>
 
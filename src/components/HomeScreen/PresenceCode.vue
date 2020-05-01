<template>
    <Modal :state-open="stateOpen" class="presence-code">
        <div class="card">
            <h2>Absen Kode</h2>
        </div>
    </Modal>
</template>

<script>
import Modal from '@/components/global/Modal.vue'

export default {
    name: 'PresenceCode',
    components:{
        Modal
    },
    data(){
        return{
            stateOpen: false
        }
    },
    methods:{
        open(){
            this.stateOpen = true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
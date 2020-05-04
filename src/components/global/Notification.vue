<template>
    <div class="notification">
        <button @click="openModal" aria-label="Notification">
        <BellIcon/>
        </button>
        <Modal :state-open="stateOpen">
            <CardMenu>
                <h3 class="heading">Notification Center</h3>
                <Timeline>
                    <li>
                        <span class="time">04 May 2020</span>
                        <h4>Gangguan Fitur Presensi</h4>
                        <h5>Karena Amikom One update jadi sementara fitur presensi tidak jalan, lainnya normal.</h5>
                        <span class="room">Known Issue: Enkripsi Baru API Amikom</span>
                    </li>
                    <li>
                        <span class="time">01 May 2020</span>
                        <h4>First Release</h4>
                        <h5>features: Jadwal Hari Ini+Status, Presensi Kode, Jadwal, Profile</h5>
                        <span class="room">Known Issue: None</span>
                    </li>
                </Timeline>
            </CardMenu>
        </Modal>
    </div>
</template>

<script>
import { BellIcon } from 'vue-feather-icons'
import Modal from '@/components/global/Modal.vue'
import CardMenu from '@/components/global/CardMenu.vue'
import Timeline from "@/components/global/Timeline.vue"

export default {
    name: 'Notification',
    components: {
        BellIcon,
        Modal,
        CardMenu,
        Timeline
    },
    data(){
        return{
            stateOpen: false,
        }
    },
    methods:{
        openModal(){
        this.stateOpen = true
        },
    }
}
</script>

<style lang="scss" scoped>
.notification{
    display: block;
    height:40px;
    margin: 7px 0;

    // &:after{
    //     content: '';
    //     width: 14px;
    //     height: 14px;
    //     background: var(--secondary-color);
    //     position: absolute;
    //     top: 2px;
    //     right: 8px;
    //     border-radius: 50%;
    //     border: 3px solid var(--bg-color)
    // }
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
    .card-menu{
        padding: 25px 0;
        margin: 0 25px;
        .timeline{
            max-height: 50vh;
            padding: 0 25px;
            overflow-y: auto;
            margin-top: 10px;

            h3{
                margin-top: 10px
            }
            li{
                &:not(:last-child){
                    margin-bottom: 30px;
                }
                &:before{
                    content: none
                }
            }
            
        }
    }
}
</style>
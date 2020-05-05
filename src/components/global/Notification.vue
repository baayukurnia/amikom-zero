<template>
    <div class="notification">
        <button @click="openModal" aria-label="Notification">
        <BellIcon/>
        </button>
        <Modal :state-open="stateOpen">
            <CardMenu>
                <h3 class="heading">Notifikasi</h3>
                <Timeline>
                    <li>
                        <h4>Gangguan Fitur Scan Kode</h4>
                        <h5>Amikom One update enkripsi baru, sementara fitur scan kode tidak jalan, lainnya normal.</h5>
                        <span class="room">04 May 2020</span>
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
    button{
        cursor: pointer;
        color: var(--opacity-color);
        border:0;
        background: none;
        padding: 10px;
        outline: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        position: relative;

        &:after{
            content: '';
            width: 14px;
            height: 14px;
            background: var(--secondary-color);
            position: absolute;
            top: 4px;
            right: 7px;
            border-radius: 50%;
            border: 3px solid var(--bg-color);
        }
        &:hover{
            svg{
                opacity: 1;
            }
        }

        svg{
            width:20px;
            opacity: .5;
            height:20px;
        }
    }
    .card-menu{
        padding: 25px 0;
        margin: 0 25px;
        h3{
        overflow: hidden;
        margin: 0;
        padding: 0 25px;
        }
        .timeline{
            max-height: 50vh;
            padding: 0 25px;
            overflow-y: auto;
            margin-top: 25px;

            h3{
                margin-top: 10px;
            }
            li{
                &:not(:last-child){
                    margin-bottom: 20px;
                }
                &:before{
                    content: none
                }
            }
            .time{
                font-size: var(--h8);
            }
            
        }
    }
}
</style>
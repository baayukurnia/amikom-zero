<template>
    <div class="presence-detail">
        <Navigation :title="'Presensi ' + data.NamaMk.toLowerCase()"/>
        <ScrollView>
            <Card class="matkul">
                <div class="heading">
                    <h3>{{ data.NamaMk.toLowerCase() }}</h3>
                </div>
                <span class="kode">{{ data.Kode }}</span>
                <div class="detail">
                    <span class="sks">{{ data.JmlSks }} SKS</span>
                    <span class="jml">
                        {{ data.JmlPresensiKuliah }}
                    </span>
                </div>
            </Card>
            <p v-if="data.PresenceDetail.length>0" class="message text-center">Menampilkan data presensi dari terbaru:</p>
            <p v-if="data.PresenceDetail.length==0" class="message text-center">Tidak ada data presensi.</p>
            <Timeline>
                <li v-for="presensi in data.PresenceDetail" :key="presensi.Jam">
                    <span :class="['status untrack', presensi.JenisKuliah]"></span>
                    <h3>{{ presensi.Tanggal }}</h3>
                    <span class="room">{{ presensi.JenisKuliah }}</span>
                    <h5>{{ presensi.Jam }}</h5>
                </li>
            </Timeline>
        </ScrollView>
    </div>
</template>

<script>
import Navigation from '@/components/global/Navigation.vue'
import ScrollView from '@/components/global/ScrollView.vue'
import Timeline from "@/components/global/Timeline.vue"
import Card from '@/components/global/Card.vue'

export default {
    name: 'PresenceDetailScreen',
    components: {
        Navigation,
        ScrollView,
        Timeline,
        Card
    },
    data(){
        return{
            data: this.$store.getters.getPresenceTimeline((Number(this.$route.params.krsid)))
        }
    }
}
</script>

<style lang="scss" scoped>
.presence-detail{
    padding-top: 60px;

    .scroll-view{
        padding-bottom: 40px
    }
    .matkul{
        margin: 15px;
    }
    .timeline{
        margin: 25px 25px 15px 35px;

        li{
            border-radius: 15px;
            padding: 20px 15px;
            background: var(--mainbg-color-transparent);
            color: var(--white);
            .status{
                top: 15px;
                left: -40px;
                width:25px;
                height: 25px;   
                border-color: var(--overlay);
                border-width: 5px;
                &.Praktikum{
                    background: var(--mainbg-color-transparent);
                }
                &.Teori{
                    background: var(--secondary-color);
                }
            }
            &:before{
                top: 35px;
                left: -28px;
                border-color: var(--body-color);
                opacity: .2;
            }
            h3{
                margin: 0 0 10px;
                font-size: var(--h6);
            }
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
    }
    .card{
        border-radius: var(--radius) var(--radius) 45px var(--radius);
    }
    .kode{
        margin-top:2px;
        display: block;
        font-size: var(--h8);
        color: var(--secondary-color);
    }
    .heading{
        margin: 0 -25px;
        padding: 0 20px 0 25px;
        position: relative;

        &:after{
            right: 25px;
            bottom: -30px;
        }

        h3{
            margin: 0;
            font-size: 20px;
            overflow: hidden;
            text-transform: capitalize;
        }
        .chevron{
            height: 20px;
            svg{
                display: inline-block;
                width: 30px;
                height: 30px;
            }
        } 
    }
    .detail{
        padding-top: 25px;
    }
    .jml{
        position: absolute;
        right: 0;
        bottom: 0;
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
        background: linear-gradient(-65deg, var(--icon-gradientx), var(--icon-gradienty));
        border-radius: 35px 0 35px 0;
        padding: 15px 25px;
    }
    .sks{
        left: 25px;
        bottom: 25px;
        margin: 0;
        font-size: var(--h6);
        font-weight: 700;
    }
}
@media (min-width: 576px) {
    .presence-detail{
        padding-top: 100px;
        .scroll-view{
            padding-bottom: 70px
        }
    }
}
</style>
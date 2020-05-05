<template>
    <div class="presence">
        <Navigation title="Presensi"/>
        <ScrollView>
            <ListCard>
                <router-link :to="{ name: 'DetailPresensi', params: { krsid: matkul.KrsId }}" v-for="matkul in PresenceList" :key="matkul.KrsId">
                <Card class="matkul">
                    <div class="heading">
                        <h3>{{ matkul.NamaMk.toLowerCase() }}</h3>
                        <span class="chevron"><ChevronRightIcon/></span>
                    </div>
                    <span class="kode">{{ matkul.Kode }}</span>
                    <div class="detail">
                        <span class="sks">{{ matkul.JmlSks }} SKS</span>
                        <span class="jml">
                            {{ matkul.JmlPresensiKuliah }}
                        </span>
                    </div>
                </Card>
                </router-link>
            </ListCard>
        </ScrollView>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import { ChevronRightIcon } from 'vue-feather-icons'
import Navigation from '@/components/global/Navigation.vue'
import ScrollView from '@/components/global/ScrollView.vue'
import ListCard from '@/components/global/ListCard.vue'
import Card from '@/components/global/Card.vue'

export default {
    name: 'PresenceScreen',
    components: {
        Navigation,
        ScrollView,
        ListCard, Card,
        ChevronRightIcon
    },
    computed: {
        ...mapState(['PresenceList'])
    }
}
</script>

<style lang="scss" scoped>
.presence{
    padding-top: 60px;
    .scroll-view{
        padding-bottom: 40px
    }
    .card{
        border-radius: var(--radius) var(--radius) 45px var(--radius);
    }
    .kode{
        margin-top:2px;
        display: block;
        font-size: var(--h8);
        color: var(--secondary-color)
    }
    .heading{
        margin: 0 -25px;
        padding: 0 20px 0 25px;
        display: grid;
        grid-template-columns: 1fr 20px;
        gap: 10px;
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
    .presence{
        padding-top: 100px;
        .scroll-view{
            padding-bottom: 70px
        }
    }
}
</style>
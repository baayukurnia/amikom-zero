<template>
    <div class="schedules">
        <Navigation title="Jadwal Kuliah"/>
        <Carousel :perPage="3" :paginationEnabled="false" :scrollPerPage="false" :spacePadding="25" v-on:pageChange="tabChange" :navigateTo="activeIndex - 1">
            <Slide v-for="(day, i) in scheduleDays" :key="i">
                <SlideItem :class="{ active : activeIndex == i}">
                    <a @click="pageChange(i)">
                        {{ day.toLowerCase() }}
                    </a>
                </SlideItem>
            </Slide>
        </Carousel>
        <ScrollView>
            <Carousel :perPage="1" :paginationEnabled="false" v-on:pageChange="pageChange" :navigateTo="activeIndex">
                <Slide v-for="(day, i) in scheduleDays" :key="i">
                    <div class="time-sch">
                        <label>Mulai</label>
                        <span class="time">{{ getScheduleByDay(day)[0].Waktu.slice(0, 5) }} <b v-if="amPm(getScheduleByDay(day), 0)<12">AM</b><b v-else>PM</b></span>
                    </div>
                    <Card class="schedule">
                        <Timeline>
                            <li v-for="sch in getScheduleByDay(day)" :key="sch.IdKuliah">
                                <span class="status untrack"></span>
                                <span class="time">{{ sch.Waktu }}</span>
                                <h3>{{ sch.MataKuliah.toLowerCase() }}</h3>
                                <h5>{{ sch.NamaDosen }}</h5>
                                <span class="room">{{ sch.JenisKuliah }} <span v-if="sch.JenisKuliah == 'Teori'">R</span> {{ sch.Ruang }}</span>
                            </li>
                        </Timeline>
                    </Card>
                    <div class="time-sch">
                        <label>Selesai</label>
                        <span class="time">{{ getScheduleByDay(day)[getScheduleByDay(day).length-1].Waktu.slice(8, 13) }} <b v-if="amPm(getScheduleByDay(day), 1)<12">AM</b><b v-else>PM</b></span>
                    </div>
                </Slide>
            </Carousel>
        </ScrollView>   
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Carousel, Slide } from 'vue-carousel';
import Navigation from '@/components/global/Navigation.vue'
import ScrollView from '@/components/global/ScrollView.vue'
import SlideItem from '@/components/global/SlideItem.vue'
import Timeline from '@/components/global/Timeline.vue'
import Card from '@/components/global/Card.vue'

export default {
    name: 'ScheduleScreen',
    components: {
        Navigation,
        Carousel, Slide,
        SlideItem,
        Timeline,
        ScrollView,
        Card
    },
    computed: {
    ...mapGetters([
        'scheduleDays',
        'getScheduleByDay'
        ])
    },
    data(){
        return{
            schedules: this.$store.state.Schedules,
            activeIndex: 0,
        }
    },
    methods: {
        amPm(t, i){
            if(i==0){
                return Number(t[0].Waktu.slice(0, 5))
            }
            else if(i==1){
            return Number(t[t.length-1].Waktu.slice(8, 10))
            }
        },
        pageChange(i){
            this.activeIndex= i
        },
        tabChange(i){
            this.activeIndex= i+1
        }
    },
}
</script>

<style lang="scss" scoped>
.schedules{
    padding-top: 60px;
    .scroll-view{
        margin-top: 5px;
        padding-bottom: 70px
    }
}
.schedule{
    margin: 30px 25px 30px 0;
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 0 var(--radius) var(--radius) 0;
    &:after{
        content: url('/img/moredots.svg');
        position: absolute;
        top: -50px;
        right: -15px;
        pointer-events: none;
        z-index: -1;
    }
}
.time-sch{
    text-align: right;
    margin: 20px 25px;
    font-weight: 900;
    position: relative;

    &:after{
        content: url('/img/suket.svg');
        position: absolute;
        left: -40px;
        top: 30px;
    }

    label{
        display: block;
    }
    .time{
        font-size: var(--h2);
        margin: 0;
        color: var(--secondary-color)
    }
}
@media (min-width: 576px) {
    .schedules{
        padding-top: 100px;
        .scroll-view{
            padding-bottom: 70px
        }
    }
}

.VueCarousel-slide {
    opacity: 1 !important;
}
</style>
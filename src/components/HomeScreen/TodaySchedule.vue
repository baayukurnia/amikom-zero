<template>
  <swipeable-bottom-sheet ref="swipeableBottomSheet" :half-y=".6" class="today-schedule">
    <h3 class="heading">Jadwal Hari Ini</h3>
    <div class="contents">
        <Timeline v-if="Array.isArray(getScheduleByDay(day))">
          <li v-for="sch in getScheduleByDay(day)" :key="sch.IdKuliah">
            <span :class="['status', { 'done' : getPresenceStatus(getKrsId(sch.MataKuliah), sch.JenisKuliah, date) }]"></span>
            <span class="time">{{ sch.Waktu }}</span>
            <h3>{{ sch.MataKuliah.toLowerCase() }}</h3>
            <h5>{{ sch.NamaDosen }}</h5>
            <span class="room">{{ sch.JenisKuliah }} <span v-if="sch.JenisKuliah == 'Teori'">R</span> {{ sch.Ruang }}</span>
          </li>
        </Timeline>
        <Timeline v-else-if="getScheduleByDay(day)">
          <li>
            <span class="status done"></span>
            <p>{{ getScheduleByDay(day) }}</p>
          </li>
        </Timeline>
    </div>
  </swipeable-bottom-sheet>
</template>

<script>
import { mapGetters } from 'vuex'
import SwipeableBottomSheet from "@/components/global/SwipeableBottomSheet.vue";
import Timeline from "@/components/global/Timeline.vue"

export default {
    name: 'TodaySchedule',
    components: {
        SwipeableBottomSheet,
        Timeline
    },
    computed: {
    ...mapGetters(['getScheduleByDay', 'getPresenceStatus', 'getKrsId']),
    },
    data(){
      return{
        day: new Date().getDay(),
        date: this.getFormattedToday()
      }
    },
    methods: {
      getFormattedToday(){
        const d = new Date //yr,mnth,dy
        const year = d.getFullYear()
        const date = ("0" + d.getDate()).slice(-2)
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        const monthName = months[d.getMonth()]
        return `${date} ${monthName} ${year}`
      }
    }
}
</script>

<style lang="scss" scoped>
.today-schedule{
    .heading{
      margin-top: -10px;
      pointer-events: none;
    }
    .contents{
    margin: 0 25px;
    }
}

@media (max-width:350px) {
  .today-schedule h3{
    font-size: 1rem;
  }
}
</style>
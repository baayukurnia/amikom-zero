<template>
  <swipeable-bottom-sheet ref="swipeableBottomSheet" :half-y=".6" class="today-schedule">
    <h3 class="heading">Jadwal Hari Ini</h3>
    <div class="contents">
        <Timeline v-if="Array.isArray(getScheduleByDay(day))">
          <li v-for="schedule in getScheduleByDay(day)" :key="schedule.IdKuliah">
            <span :class="['status', { 'miss' : schedule.Keterangan == '' }]"></span>
            <span class="time">{{ schedule.Waktu }}</span>
            <h3>{{ schedule.MataKuliah.toLowerCase() }}</h3>
            <h5>{{ schedule.NamaDosen }}</h5>
            <span class="room">{{ schedule.JenisKuliah }} <span v-if="schedule.JenisKuliah == 'Teori'">R</span> {{ schedule.Ruang }}</span>
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
    ...mapGetters(['getScheduleByDay'])
    },
    data(){
      return{
        day: new Date().getDay()
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
<template>
  <swipeable-bottom-sheet ref="swipeableBottomSheet" :half-y=".6" class="today-schedule">
    <h3 class="heading">Jadwal Hari Ini</h3>
    <div class="contents">
        <ul class="schedules">
          <li v-for="schedule in todaySchedules" :key="schedule.IdKuliah">
            <span :class="['status', { 'miss' : schedule.Keterangan == '' }]"></span>
            <span class="time">{{ schedule.Waktu }}</span>
            <h3>{{ schedule.MataKuliah.toLowerCase() }}</h3>
            <h5>{{ schedule.NamaDosen }}</h5>
            <span class="room">{{ schedule.JenisKuliah }} <span v-if="schedule.JenisKuliah == 'Teori'">R</span> {{ schedule.Ruang }}</span>
          </li>
        </ul>
    </div>
  </swipeable-bottom-sheet>
</template>

<script>
import { mapGetters } from 'vuex'
import SwipeableBottomSheet from "@/components/global/SwipeableBottomSheet.vue";

export default {
    name: 'TodaySchedule',
    components: {
        SwipeableBottomSheet
    },
    computed: {
    ...mapGetters(['todaySchedules'])
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
    .schedules{
      padding: 0 15px 0 40px;
      list-style: none;

      li{
        position: relative;
        &:not(:last-child){
          margin-bottom: 35px;
          &:before{
            content: '';
            position: absolute;
            top: 30px;
            height: 100%;
            border-left: 2px dashed rgba(255, 255, 255, .1);
            left: -29px;
          }
        }
      }

      .time{
        display: inline-block;
        background: var(--secondary-color);
        padding: 5px 15px 4px;
        border-radius: 40px;
        font-size: var(--h8);
        font-weight: 700;
      }

      .status{
        position: absolute;
        width: 24px;
        height: 24px;
        left: -40px;
        top: 0;
        border-radius: 50%;
        border: 2px solid rgba(255,255,255,.1);

        &.done{
          background: var(--secondary-color);
          border: 2px solid var(--secondary-color);

          &:before{
            content: url('/img/check.svg');
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        }

        &.miss{
          background: rgba(255, 255, 255, .1);
          border-color: transparent;
          &:before{
            content: '';
            position: absolute;
            height: 2px;
            width: 8px;
            background: #fff;
            left: calc(50% - 4px);
            top: calc(50% - 1px);
          }
        }
      }

      h3{
        margin:15px 0 5px;
        font-size: var(--h6);
        text-transform: capitalize;
      }
      h5{
        margin: 0;
        font-size: var(--h8);
        font-weight: 400;
        opacity: .25;
      }
      .room{
        font-size: var(--h8);
        font-weight: 700;
        color: var(--secondary-color);
      }
    }

}

@media (max-width:350px) {
  .today-schedule h3{
    font-size: 1rem;
  }
}
</style>
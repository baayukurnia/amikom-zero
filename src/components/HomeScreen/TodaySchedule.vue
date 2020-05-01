<template>
  <swipeable-bottom-sheet ref="swipeableBottomSheet" :half-y=".6">
    <h3 class="heading">Jadwal Hari Ini</h3>
    <div class="contents today-schedule">
        <ul>
            <li>
              <span class="status done"></span>
              <span class="time">07.00 - 08.40</span>
              <h3>Aljabar Linier dan Matriks</h3>
              <h5>Asro Nasiri, Drs, M.Kom</h5>
              <span class="room">R 5.4.6</span>
            </li>
            <li>
              <span class="status miss"></span>
              <span class="time">08.50 - 10.30</span>
              <h3>Kalkulus</h3>
              <h5>Kumara Ari Yuana, S.T, M.T</h5>
              <span class="room">R 7.2.1</span>
            </li>
            <li>
              <span class="status"></span>
              <span class="time">10.40 - 12.20</span>
              <h3>Algoritma dan Pemrograman</h3>
              <h5>Wiwi Widayani, M.Kom</h5>
              <span class="room">L 2.4.5</span>
            </li>
        </ul>
    </div>
  </swipeable-bottom-sheet>
</template>

<script>
import SwipeableBottomSheet from "@/components/global/SwipeableBottomSheet.vue";

export default {
    name: 'TodaySchedule',
    components: {
        SwipeableBottomSheet
    }
}
</script>

<style lang="scss" scoped>
.today-schedule{
    margin: 0 25px;
    ul{
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
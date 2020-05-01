<template>
  <div class="home">
    <Auth v-if="!this.$store.state.authStatus"/>
    <HomeProfile/>
    <Launcher/>
    <!-- <div class="news">
      <div class="latest-news">
        <ul>
          <li>
            <div class="thumbnail">
              <img src="/img/news/c9af6615-b1e0-4c07-b526-aef1d0440caa-400x250.jpg">
            </div>
            <div class="content">
              <h3>Kebijakan Perkuliahan Daring Terkait Covid-19</h3>
              <div class="meta">
                <span class="date">30 Mar 2020</span>
              </div>
            </div>
          </li>
          <li>
            <div class="thumbnail">
              <img src="/img/news/WhatsApp-Image-2020-03-06-at-17.59.30-2-400x250.jpeg">
            </div>
            <div class="content">
              <h3>MoU dengan Perguruan Tinggi di India</h3>
              <div class="meta">
                <span class="date">7 Mar 2020</span>
              </div>
            </div>
          </li>
          <li>
            <div class="thumbnail">
              <img src="/img/news/Untitled-400x250.jpg">
            </div>
            <div class="content">
              <h3>Amikom Pecahkan Rekor Dunia Wanita Berkebaya</h3>
              <div class="meta">
                <span class="date">26 Feb 2020</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
    <TodaySchedule />
    <PresenceCode/>
  </div>
</template>

<script>
// @ is an alias to /src
import Auth from '@/components/Auth.vue'
import HomeProfile from '@/components/HomeScreen/HomeProfile.vue'
import Launcher from '@/components/HomeScreen/Launcher.vue'
import TodaySchedule from '@/components/HomeScreen/TodaySchedule.vue'
import PresenceCode from '@/components/HomeScreen/PresenceCode.vue'

export default {
  name: 'HomeScreen',
  components: {
    Auth,
    HomeProfile,
    Launcher,
    TodaySchedule,
    PresenceCode
  }
}
</script>

<style lang="scss" scoped>
.home{
  .container{
    padding-bottom: 200px;
  }
}
.latest-news{
  position: relative;
  padding-top: 20px;

  &:before{
    content: 'Latest News';
    position: absolute;
    transform: rotate(-90deg);
    left: -20px;
    top: 60px;
    font-size: var(--h7);
    font-weight: 700;
  }
  ul {
    list-style: none;
    margin-left: 50px;
    padding: 0 15px;
    border-left: 1px solid #eee;

    li {
        display: flex;
    }

    .thumbnail {
        width: 175px;
        border-radius: 15px;
        overflow: hidden;
        img {
          max-width: 100%;
        }
    } 

    .content{
      h3{
        font-size: var(--h6);
        font-family: 'Playfair Display';
        font-weight: 400;
      }
      .date{
        font-size: var(--h9);
        font-weight: 700;
      }
    }
  }  
}
</style>

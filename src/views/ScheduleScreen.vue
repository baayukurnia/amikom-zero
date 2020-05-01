<template>
    <div class="schedules">
        <Navigation title="Jadwal Saya"/>
        <TabSlider class="schedules-week">
            <li class="item">Senin</li>
        </TabSlider>
        <router-view/>
    </div>
</template>

<script>
import Navigation from '@/components/global/Navigation.vue'
import TabSlider from '@/components/global/TabSlider.vue'

export default {
    name: 'ScheduleScreen',
    components: {
        Navigation,
        TabSlider
    }
}
</script>
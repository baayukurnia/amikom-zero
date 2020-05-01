<template>
    <div class="presence">
        <Navigation/>
        <ScrollView>
        <div class="flex-container">
            <div class="message text-center">
            <img src="/img/yah.png">
            <h1>Duhh!</h1>
            <p>..tunggu update selanjutnya.</p>
            <router-link class="btn" to="/">Kembali ke Dashboard</router-link>
            </div>
        </div>
        </ScrollView>
    </div>
</template>

<script>
import Navigation from '@/components/global/Navigation.vue'

export default {
    name: 'PresenceScreen',
    components: {
        Navigation
    }
}
</script>

<style lang="scss" scoped>

</style>
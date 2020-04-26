<template>
    <div class="user d-flex">
        <ProfileImage />
        <ProfileUser />
    </div>
</template>

<script>
import ProfileImage from '@/components/ProfileImage.vue'
import ProfileUser from '@/components/ProfileUser.vue'

export default {
    components:{
        ProfileImage,
        ProfileUser
    }    
}
</script>
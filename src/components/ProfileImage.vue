<template>
  <div class="profile-image">
    <img src="img/people.png">
  </div>
</template>

<script>
export default {
  name: 'ProfileImage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile-image{
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  width: 54px;
  height: 54px;

  img{
    width: 100%;
  }
}
</style>

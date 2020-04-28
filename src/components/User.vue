<template>
    <div class="user d-flex">
        <div class="profile-image">
            <img src="img/womanc.jpg">
        </div>
        <div class="profile-user">
            <h1 class="name">Masha Raymers</h1>
            <h2 class="nim">19.11.3286</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User'
}
</script>

<style lang="scss" scoped>
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
.profile-user{
  display: inline-block;
  margin-left: 10px;
  padding: 9px 0;
  .name{
    margin: 0;
    display: block;
    font-size: 1.125rem;
    letter-spacing: -.03rem;
  }
  .nim{
    margin: 0;
    display: block;
    font-size: 0.75rem;
    opacity: .5;
  }
}

@media (max-width:350px) {
  .profile .name{
    font-size: 1rem;
  }
}
</style>
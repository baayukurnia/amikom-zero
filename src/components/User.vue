<template>
    <div class="user d-flex overmask">
        <div class="profile-image">
            <img :src="$store.state.profile.data.Mhs.NpmImg">
        </div>
        <div class="profile-user">
          <h1 class="name">{{ $store.state.profile.data.Mhs.Nama.toLowerCase() }}</h1>
          <h2 class="nim">{{ $store.state.profile.data.Mhs.Npm }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User',
}
</script>

<style lang="scss" scoped>
.user{
  padding-right: 10%;
}
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
  max-width: 140px;
  display: inline-block;
  margin-left: 10px;
  padding: 9px 0;
  .name{
    margin: 0;
    display: block;
    font-size: 20px;
    letter-spacing: -.03rem;
    text-transform: capitalize;
    white-space: nowrap;
  }
  .nim{
    margin: 0;
    display: block;
    font-size: var(--h7);
    opacity: .5;
  }
}

@media (max-width:350px) {
  .profile .name{
    font-size: 1rem;
  }
}
</style>
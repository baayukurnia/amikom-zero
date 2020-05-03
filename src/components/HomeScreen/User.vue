<template>
    <div class="user d-grid">
        <div class="profile-image">
            <img v-if="$store.state.profile.Mhs.Npm" :src="'https://images.weserv.nl/?url='+$store.state.profile.Mhs.NpmImg" :alt="$store.state.profile.Mhs.Npm">
        </div>
        <div class="profile-user overmask">
          <h1 class="name">{{ $store.state.profile.Mhs.Nama.toLowerCase() }}</h1>
          <h2 class="nim">{{ $store.state.profile.Mhs.Npm }}</h2>
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
  grid-template-columns: 54px 1fr;
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
  max-width: 210px;
  padding-right: 10%;
  display: inline-block;
  margin-left: 10px;
  padding-top: 9px;
  padding-bottom: 9px;
  
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
    letter-spacing: .03rem;
  }
}

@media (max-width: 576px) {
  .profile-user{
    max-width: 50vw;
  }
}
@media (max-width:350px) {
  .profile-user{
    .name{
      font-size: var(--h5);
    }
    .nim{
      font-size: var(--h8);
    }
  }
}
</style>
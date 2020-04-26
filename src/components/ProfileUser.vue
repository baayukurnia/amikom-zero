<template>
  <div class="profile-user">
    <h1 class="name">Muhammad Bayu K P</h1>
    <h2 class="nim">19.11.3286</h2>
  </div>
</template>

<script>
export default {
  name: 'ProfileUser',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile-user{
  display: inline-block;
  font-weight: 600;
  margin-left: 10px;
  padding: 4px 0;
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

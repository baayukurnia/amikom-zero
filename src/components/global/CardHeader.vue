<template>
    <div class="card-header">
        <slot/>
        <span class="card-appearance oval">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="69.895" height="69.895" viewBox="0 0 69.895 69.895"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0.149"/></linearGradient></defs><path d="M34.947,69.895a34.957,34.957,0,0,1-13.6-67.148,34.956,34.956,0,0,1,27.206,64.4A34.728,34.728,0,0,1,34.947,69.895Zm0-54.122A19.174,19.174,0,1,0,54.121,34.947,19.2,19.2,0,0,0,34.947,15.773Z" fill="url(#a)"/></svg>
        </span>
        <span class="card-appearance square">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="61.425" height="61.425" viewBox="0 0 61.425 61.425"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0.149"/></linearGradient></defs><path d="M59.425,61.425H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H59.425a2,2,0,0,1,2,2V59.425A2,2,0,0,1,59.425,61.425Zm-41.85-44.85a1,1,0,0,0-1,1V45.8a1,1,0,0,0,1,1H45.8a1,1,0,0,0,1-1V17.575a1,1,0,0,0-1-1Z" fill="url(#a)"/></svg>
        </span>
    </div>
</template>

<style lang="scss" scoped>
.card{
    &-header{
    padding: 25px 35px;
    text-align: center;
    position: relative;
    background: linear-gradient(30deg, var(--icon-gradientx), var(--icon-gradienty));
    border-radius: 15px;
    margin-top: -50px;
    margin-bottom: 30px;
    overflow: hidden;

    .title{
      margin: 0;
      text-transform: capitalize;
      white-space: nowrap;
    }

    .subtitle{
      font-size: var(--h9);
      text-transform: uppercase;
      letter-spacing: .1rem;
      opacity: .7;
    }
  }

  &-appearance{
    position: absolute;

    &.oval{
      right: -40px;
      bottom: -50px;
      opacity: .15;
    }
    &.square{
      left: -30px;
      top: -50px;
      opacity: .25;
    }

    svg{
      width: 100px;
      height: 100px;
    }
  }
}
</style>
<template>
  <div class="container">
      <p class="text-center x-large-text">Congratulations, you have reached protected view!</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.container{
    padding-top: 100px;
    padding-bottom: 400px;
    @media (max-width: $breakpoint-medium) {
        padding-bottom: 550px;
    }
}
</style>
<template>
    <div class="container">
        <h1>Home page</h1>        
    </div>
</template>

<script>

export default {
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.container{
    padding-bottom: 300px;
    @media (max-width: $breakpoint-medium) {
        padding-bottom: 500px;
    }
}
</style>

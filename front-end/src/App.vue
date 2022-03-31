<template>
    <div>
        <Navbar />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
    name: "App",
    components: {
        Navbar,
        Footer
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
body{
    margin: 0px;
}
.large-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 59px;
    color: $first-dark-color;
    @media (max-width: $breakpoint-small) {
        font-size: 35px;
        line-height: 41px;
    }
}
.medium-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: $second-dark-color;
    @media (max-width: $breakpoint-small) {
        font-size: 15px;
    }
}
</style>

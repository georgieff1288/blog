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
.router-link{
    text-decoration: none;
}
.xx-large-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 100px;
    line-height: 110px;
    color: $first-dark-color;
     @media (max-width: $breakpoint-medium) {
        font-size: 50px;
        line-height: 55px;
    }
}
.x-large-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 59px;
    color: $first-dark-color;
    @media (max-width: $breakpoint-medium) {
        font-size: 35px;
        line-height: 41px;
    }
}
.large-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 53px;
    color: $first-dark-color;
    @media (max-width: $breakpoint-medium) {
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
    @media (max-width: $breakpoint-medium) {
        font-size: 15px;
    }
}
.medium-bold-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: $first-dark-color;
    @media (max-width: $breakpoint-medium) {
        font-size: 15px;
    }
}
.small-bold-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    color: $first-dark-color;
}
.small-bold-lighter-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    color: $second-dark-color;
}
.small-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: $second-dark-color;
}
.x-small-bold-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    color: $first-dark-color;
}
.blue-color{
    color: $blue-color;
}
.first-dark-color{
    color: $first-dark-color;
}
.read-story-btn{
    color: $blue-color;
    font-weight: 700px;
}
</style>

<template>
    <div class="nav-container container-fluid d-flex justify-content-between justify-content-lg-center">  
        <div class="mt-2 mx-0 mx-sm-2">
            <p class="logo">On<span class="i asd">i</span>r</p>
        </div>
         <nav class="navbar navbar-expand-lg navbar-light mx-0 mx-sm-2" :class=" { 'navbarOpen': show }">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{ 'show': show }">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/"><span>How It Works</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/features"><span>Features</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/pricing"><span>Pricing</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/blog"><span>Blog</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/contact"><span>Contact</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/about"><span>About</span></router-link>
                </li>
                <li class="nav-item mt-5 mt-lg-0">
                    <router-link class="nav-link mx-2" to="/login"><span class="login px-3 px-lg-0">Login</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/signup">
                        <div class="signup mt-1 text-center">SignUp</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
    </div>
</template>

<script>
export default {
     data() {
    return {
      show: false
    }
  },
    methods: {
    toggleNavbar() {
      this.show = !this.show
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.nav-container {
    background: $first-light-color;
}
.nav-link span{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: $first-dark-color;
}
.signup{
    background: $blue-color;
    border-radius: 500px;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    width: 80px;
    height: 22px;
}
.i {
    color: $blue-color;
    position: relative;
}
.i:before {
    content: "ı";
    position: absolute;
    color: $first-dark-color;
}
.logo {
    font-weight: 600;
    font-size: 26px;
    color: $first-dark-color;
}
.login{
    @media (max-width: $breakpoint-large) {
        border-radius: 500px;
        border: 1px solid;
    }
}
.active {
    border-bottom: 2px solid $blue-color;
}
</style>
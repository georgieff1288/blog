<template>
    <div class="nav-container container-fluid d-flex justify-content-between justify-content-lg-center">  
        <div class="mt-2 mx-2">
            <p class="logo">On<span class="i asd">i</span>r</p>
        </div>
         <nav class="navbar navbar-expand-lg navbar-light mx-2" :class=" { 'navbarOpen': show }">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{ 'show': show }">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/"><span class="asd">How It Works</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/"><span>Features</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/"><span>Pricing</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/"><span>Blog</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/"><span>Contact</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/"><span>About</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/"><span>Login</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" to="/">
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
    background: #0E7DFF;
    border-radius: 500px;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    width: 70px;
    height: 22px;
}
.i {
    color: #0e7dff;
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
</style>
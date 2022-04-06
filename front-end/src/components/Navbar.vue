<template>
    <div class="nav-container container-fluid d-flex justify-content-between justify-content-lg-center"> 
        <div class="pt-2 mx-0 mx-sm-2">
            <router-link to="/" style="text-decoration: none;">
                <p class="logo mt-2">On<span class="i asd">i</span>r</p>
            </router-link>
        </div>
         <nav class="navbar navbar-expand-lg navbar-light mx-0 mx-sm-2" :class=" { 'navbarOpen': show }">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{ 'show': show }">
                <ul class="navbar-nav mr-auto d-flex align-items-center">
                    <li class="nav-item">
                        <div class="nav-link mx-2" @click="scroll('how-it-works')"><span class="nav-link-item">How It Works</span></div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link mx-2" @click="scroll('features')"><span class="nav-link-item">Features</span></div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link mx-2" @click="scroll('pricing')"><span class="nav-link-item">Pricing</span></div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link mx-2" @click="scroll('about')"><span class="nav-link-item">About</span></div>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link mx-2" to="/blog"><span class="nav-link-item">Blog</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link mx-2" to="/contact"><span class="nav-link-item">Contact</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link mx-2" to="/protected"><span class="nav-link-item">Protected</span></router-link>
                    </li>
                    <li v-if="!user" class="nav-item mt-5 mt-lg-0">
                        <router-link class="nav-link mx-2" to="/login"><div class="login nav-link-item d-flex justify-content-center align-items-center">Login</div></router-link>
                    </li>
                    <li v-if="!user" class="nav-item">
                        <router-link class="nav-link mx-2" to="/signup">
                            <div class="signup nav-link-item mt-1 text-center d-flex align-items-center justify-content-center">SignUp</div>
                        </router-link>
                    </li>
                    <li v-if="user" class="nav-item">
                        <div class="nav-link mx-2" @click="logout"><span class="nav-link-item">Logout</span></div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios'
export default {
     data() {
        return {
            show: false,
        }
    },
    computed:{
        user(){
           return this.$store.getters.user;
        }
    },
    methods: {
        scroll(id) {
            this.$router.push('/')
            setTimeout(() => {document.getElementById(id).scrollIntoView({behavior: "smooth"})}, 100);
        },
        toggleNavbar() {
            this.show = !this.show
        },
        logout(){
            this.$store.commit('login', '')
            localStorage.clear();
            this.$router.push('/');
        }        
    },
    mounted() {
        axios.get('http://localhost:3000/user', { headers: { token: localStorage.getItem('token')}})
            .then(res => {        
                this.$store.commit('login', res.data.user.username)
            })
    },
};
</script>

<style scoped lang="scss">
.nav-container {
    overflow-x: hidden;
    background: $first-light-color;
}
ul li div{
    cursor: pointer;
}
.signup{
    background: $blue-color;
    border-radius: 500px;
    color: white;  
    width: 130px;
    height: 45px;
    @media (max-width: $breakpoint-large) {
        width: 182px;
        height: 54px;
    }
}
.login{    
    @media (max-width: $breakpoint-large) {
        border-radius: 500px;
        border: 1px solid;
        width: 182px;
        height: 54px;
    }
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
.active {
    border-bottom: 2px solid $blue-color;
}
</style>
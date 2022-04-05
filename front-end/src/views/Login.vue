<template>
    <div class="d-flex justify-content-center container-fluid m-0">
        <form class="my-3" @submit.prevent="login">
            <div v-for="error of v$.email.$errors" :key="error.$uid">
                <div class="error-msg">Valid email is required</div>
            </div>
            <input class="form-control mb-4" type="text" size="35" v-model="v$.email.$model" placeholder="Email" />

            <div v-for="error of v$.password.$errors" :key="error.$uid">
                <div class="error-msg">Password is required</div>
            </div>
            <input class="form-control mb-4" type="password" size="35" v-model="v$.password.$model" placeholder="Password" />

            <div class="d-flex justify-content-center">
                <button class="btn py-2 px-4" id="submit-btn" :disabled="v$.$invalid">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import axios from 'axios';
export default {
    data: function () {
        return {
            email: "",
            password: "",
        };
    },
    setup: () => ({ v$: useVuelidate() }),
    validations() {
        return {
            email: { required, email },
            password: {required}
        };
    },
    methods: {
      async login(){
          if(!this.email || !this.password){
                window.alert('Fields can not be empty')
                return
            }
            try{
                await axios.post('http://localhost:3000/login', {email: this.email, password: this.password})
                    .then((response) =>{
                        if (response.status === 200) {
                            localStorage.setItem('token', response.data.token);
                            this.$store.commit('login',  response.data.username)
                            this.$router.push('/');
                        }
                    })
            }
            catch(err){
                console.log(err);
                window.alert(err.response.data.message);
            }
      }
    }
};
</script>

<style scoped lang="scss">
.container-fluid{
    padding-bottom: 350px;
    padding-top: 50px;
    @media (max-width: $breakpoint-medium) {
        padding-bottom: 500px;
    }
}
input{
    background: $fourth-light-color;
    border-style: none;
    border-radius: 20px;
    height: 65px;
    padding: 20px;
    color: $blue-color;
}
button {
    background: $blue-color;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    @media (max-width: $breakpoint-medium) {
        font-size: 20px;
        line-height: 28px;
        width: 100%;
    }
    color: white;
    border-radius: 20px;
    height: 65px;
}
#submit-btn:disabled {
    background-color: rgb(96, 192, 230);
}
.error-msg {
    padding-bottom: 5px;
    font-size: 12px;
    color: red;
}
</style>
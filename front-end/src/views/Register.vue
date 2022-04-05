<template>
    <div class="d-flex justify-content-center container-fluid m-0">        
        <form class="my-3" @submit.prevent="register">          
            <div v-for="error of v$.name.$errors" :key="error.$uid">
                <div class="error-msg">Name is required</div>
            </div>
            <input class="form-control mb-4" type="text" size="35" v-model="v$.name.$model" placeholder="Name" />

            <div v-for="error of v$.email.$errors" :key="error.$uid">
                <div class="error-msg">Valid email is required</div>
            </div>
            <input class="form-control mb-4" type="text" size="35" v-model="v$.email.$model" placeholder="Email" />

            <div v-for="error of v$.password.$errors" :key="error.$uid">
                <div class="error-msg">Password is required</div>
            </div>
            <input class="form-control mb-4" type="password" size="35" v-model="v$.password.$model" placeholder="Password" />

            <div v-for="error of v$.confirmPassword.$errors" :key="error.$uid">
                <div class="error-msg">Passwords mismatch</div>
            </div>
            <input class="form-control mb-4" type="password" size="35" v-model="v$.confirmPassword.$model" placeholder="Confirm password" />
            
            <div class="d-flex justify-content-center">
                <button class="btn py-2 px-4" id="submit-btn" :disabled="v$.$invalid">SignUp</button>
            </div>
        </form>
    </div>
</template>

<script>
import { email, required, sameAs } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import axios from 'axios'
export default {
    data: function () {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    },
    setup: () => ({ v$: useVuelidate() }),
    validations() {
        return {
            name: { required },
            email: { required, email },
            password: {required},
            confirmPassword: {required, sameAsPassword: sameAs(this.password)},
        };
    },
    methods: {
        async register(){
            if(!this.email || !this.password || !this.confirmPassword || !this.name){
                window.alert('Fields can not be empty')
                return
            }
            try{
                await axios.post('http://localhost:3000/register', {name: this.name, email: this.email, password: this.password})
                .then((response) => {
                        window.alert(response.data.message);
                        this.$router.push('/login'); 
                    })
            }
            catch(err){
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
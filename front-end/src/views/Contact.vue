<template>
    <div class="contact-container container-fluid m-0 px-0">
        <div class="contact-header">
            <p class="text-center medium-text first-dark-color">Get in touch!</p>
            <p class="text-center xx-large-text">Contact Us</p>
        </div>
        <div class="container px-0 d-flex justify-content-center">
            <form class="form-container container p-2 p-md-3 mb-5" @submit.prevent="send">
                <p class="text-center text-md-start medium-text first-dark-color">Fill up the form below &#38; our team will get back soon.</p>
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="icon-div d-flex flex-column justify-content-center align-items-center m-1">
                            <fa class="blue-color" icon="location-dot"/>
                            <p class="text-center medium-bold-text" style="max-width: 176px;">403 Street, Avenue, NewYork USA.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="icon-div d-flex flex-column justify-content-center align-items-center m-1">
                            <fa class="blue-color" icon="phone"/>
                            <p class="text-center medium-bold-text">+800.123.456789</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="icon-div d-flex flex-column justify-content-center align-items-center m-1">
                            <fa class="blue-color" icon="envelope-open"/>
                            <p class="text-center medium-bold-text">hello@onir.com</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 py-4">
                        <div v-for="error of v$.name.$errors" :key="error.$uid">
                            <div class="error-msg">Name is required</div>
                        </div>
                        <input type="text" class="form-control" v-model="v$.name.$model" placeholder="Name">
                    </div>
                    <div class="col-12 col-md-6 py-4">
                        <div v-for="error of v$.email.$errors" :key="error.$uid">
                            <div class="error-msg">Valid email is required</div>
                        </div>
                        <input type="text" class="form-control" v-model="v$.email.$model" placeholder="Email">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 py-4">
                        <input type="text" class="form-control" placeholder="Company Name">
                    </div>
                    <div class="col-12 col-md-6 py-4">
                        <div v-for="error of v$.country.$errors" :key="error.$uid">
                            <div class="error-msg">Country is required</div>
                        </div>
                        <select class="form-select blue-color" v-model="v$.country.$model" aria-label="Default select example">
                            <option class="blue-color" value="" disabled selected>Country</option> 
                            <option class="blue-color" value="1">Bulgaria</option>
                            <option class="blue-color" value="2">Greece</option>
                            <option class="blue-color" value="3">Turkey</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 py-4">
                        <div v-for="error of v$.phone.$errors" :key="error.$uid">
                            <div class="error-msg">Phone is required</div>
                        </div>
                        <input type="number" class="form-control" v-model="v$.phone.$model" placeholder="Phone no">
                    </div>
                    <div class="col-12 col-md-6 py-4">
                        <input type="text" class="form-control" placeholder="Website">
                    </div>
                </div>  
                <div v-for="error of v$.message.$errors" :key="error.$uid">
                    <div class="error-msg">Message is required</div>
                </div>
                <textarea class="form-control my-4" v-model="v$.message.$model" placeholder="Your message" rows="6"></textarea>
                <div class="row">
                    <div class="col-12 order-2 order-md-1">
                        <p class="small-text my-3">By submitting this form you agree to our terms and conditions and our Privacy policy. Orci varius natoque penatibus et magnis dis paridiculus mus. Duis nisl ante, condimentum a faucibus posuere, feugiat eu ligula</p>
                    </div>
                    <div class="col-12 order-1 order-md-2">
                        <button class="btn my-3 px-0 px-md-5" id="submit-btn" :disabled="v$.$invalid">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="container px-0 mb-5">            
            <div class="row img-row">                                     
                <div class="col-12 col-md-4 d-flex flex-column justify-content-md-between mb-3 mb-md-0">   
                    <div>
                        <p class="text-start x-large-text">Our Office</p>  
                        <p class="text-start medium-text">Duis orci nisl, ornare non diam id, dapibus faucibus urna. Vestibulum tristique posuere iaculis. Suspendisse orci tortor, auctor non lu</p>
                    </div>
                    <img src="@/assets/images/contact-image-1.png" class="img-fluid" alt="...">
                </div>
                <div class="col-12 col-md-8 d-flex align-items-md-center">
                    <img src="@/assets/images/contact-image-2.png" class="img-fluid" alt="...">
                </div>
            </div>
        </div>
        <div class="container mb-5">
            <div class="row">
                <div class="col-12 col-md-3 order-2 order-md-1 d-flex align-items-center">
                    <p class="street-name text-center text-md-start medium-bold-text">403 Street, Avenue, NewYork USA.</p>
                </div>
                <div class="col-12 col-md-9 order-1 order-md-2">
                    <div class="map"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=403%20Street,%20Avenue,%20NewYork%20USA.+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/marine-gps/">ship tracker</a></iframe></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { email, required, } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import axios from 'axios';
export default {
    data: function () {
        return {
            email: "",
            name: "",
            country: "",
            phone: "",
            message: ""
        };
    },
    setup: () => ({ v$: useVuelidate() }),
    validations() {
        return {
            email: { required, email },
            name: {required},
            phone: {required},
            country: {required},
            message: {required},
        };
    },
    methods:{
        async send() {
            if(!this.email || !this.name || !this.phone || !this.country || !this.message){
                window.alert('Fields can not be empty')
                return
            }
            try{
                await axios.post('http://localhost:3000/contact',
                    {name: this.name, message: this.message})
                    .then((response) => {
                        return response.data
                        })
                    .then((data) => {
                        if(data === 'Created'){
                            window.alert('Your message was sent successfully')
                            this.$router.push('/');  
                        }
                        else{
                            window.alert(data)
                        }
                    })
            }
            catch(err){
                console.log(err);
            }
        }
    }
}
</script>

<style scoped lang="scss">
.contact-container{
    overflow: hidden;
    padding-bottom: 300px;
    @media (max-width: $breakpoint-medium) {
        padding-bottom: 500px;
    }
}
.contact-header{
    background: $first-light-color;
    padding-top: 180px;
    padding-bottom: 226px;
}
.form-container{
    border-radius: 20px;
    background: white;
    margin-top: -95px;
}
.icon-div{
    border: 1px solid $first-light-color;
    border-radius: 20px;
    height: 163px;
}
.form-container textarea{
    background: $fourth-light-color;
    border-style: none;
    border-radius: 20px;
    resize: none;
    padding: 20px;
    color: $blue-color;
}
.form-container input{
    background: $fourth-light-color;
    border-style: none;
    border-radius: 20px;
    height: 85px;
    padding: 20px;
    color: $blue-color;
}
.form-container select{
    background: $fourth-light-color;
    border-style: none;
    border-radius: 20px;
    height: 85px;
    padding: 20px;
}
.form-container button{
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
    height: 85px;
}
#submit-btn:disabled {
    background-color: rgb(96, 192, 230);
}
.error-msg {
    padding-bottom: 5px;
    font-size: 12px;
    color: red;
}
.map{
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    height: 600px;    
    @media (max-width: $breakpoint-medium) {
        height: 300px;
    }
}
.street-name{
    max-width: 169px;
    @media (max-width: $breakpoint-medium) {
        max-width: 100%;
    }
}
img{
    width: 100%;
    border-radius: 20px;
}
.img-row{
    @media (min-width: $breakpoint-medium) {
        height: 800px;
    }
}
</style>
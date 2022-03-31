<template>
    <div class="footer-container container-fluid">
        <h3 class="text-center large-text">Subscribe Newsletter</h3>
        <p class="text-center medium-text">Suspendisse tincidunt sapien feliuentum</p>
        <div class="d-flex justify-content-center">
            <div class="d-block d-md-flex justify-content-center">
                <input class="form-control m-1 col-12" type="text" placeholder="Enter your email address">
                <button class="btn m-1 text-center col-12 col-md-6">Submit</button>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-12 col-md-3 d-flex justify-content-center">
                <ul>
                    <li>
                        <p class="logo text-center text-md-start">On<span class="i asd">i</span>r</p>                
                    </li>
                    <li class="medium-text">hello@onirapp.com</li>
                    <li class="medium-text">+1-800-123 4567</li>
                </ul>
            </div>
            <div class="col-12 col-md-3 d-flex justify-content-center">
                <ul class="higher-line">
                    <li class="medium-text title d-none d-md-block text-start" style="line-height: 28px;">Company</li>
                    <li class="medium-text text-center text-md-start">About</li>
                    <li class="medium-text text-center text-md-start">Services</li>
                    <li class="medium-text text-center text-md-start">Careers</li>
                    <li class="medium-text text-center text-md-start">Blog</li>
                    <li class="medium-text text-center text-md-start">Pricing</li>
                </ul>
            </div>
            <div class="col-12 col-md-3 d-flex justify-content-center">
                <ul class="higher-line">
                    <li class="medium-text title d-none d-md-block text-start" style="line-height: 28px;">Contact</li>
                    <li class="medium-text text-center text-md-start">Help</li>
                    <li class="medium-text text-center text-md-start">FAQs</li>
                    <li class="medium-text text-center text-md-start">Press</li>
                    <li class="medium-text text-center text-md-start">Terms &#38; and Conditions</li>
                    <li class="medium-text text-center text-md-start">Partners</li>
                </ul>
            </div>
            <div class="col-12 col-md-3 d-flex justify-content-center">
                <ul>
                    <li class="my-3 d-flex justify-content-center justify-content-md-start">
                        <fa class="brand-icon fa-lg" :icon="['fab', 'facebook']"/>
                        <fa class="brand-icon fa-lg mx-4" :icon="['fab', 'twitter']" />
                        <fa class="brand-icon fa-lg" :icon="['fab', 'instagram']" />
                    </li>
                    <li class="medium-text text-center text-md-start" style="font-size: 15px; color:white;">Let's try out!</li>
                    <li class="my-3">
                        <div class="icon-div d-flex justify-content-center align-items-center">
                            <fa class="icon fa-lg" :icon="['fab', 'app-store-ios']" />
                            <span class="small-bold-text">&ensp; App Store</span>
                        </div>
                    </li>
                    <li class="my-3">
                        <div class="icon-div d-flex justify-content-center align-items-center">
                            <fa class="fa-lg" :icon="['fab', 'google-play']" />
                            <span class="small-bold-text">&ensp; Play Store</span>
                        </div>
                    </li>
                </ul>   
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
.footer-container {
    background: $first-dark-color;
    padding-top: 443px;
    padding-bottom: 235px;
}
.large-text{
    color:white;
}
.medium-text{
    color: $third-light-color;
}
input{
    background: $first-dark-color;
    border-radius: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
}
button{
    background: $first-light-color;
    border-radius: 10px;
    color: $first-dark-color;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
}
.i {
    color: #0e7dff;
    position: relative;
}
.i:before {
    content: "ı";
    position: absolute;
    color: white
}
.logo {
    font-weight: 600;
    font-size: 26px;
    color:white;
}
ul{
    list-style-type: none;
    margin: 0px;
    padding: 0px;
}
.higher-line li{
    line-height: 44px;
}
.title{
    color: white;
    font-weight: 700px;    
}
.brand-icon{
    color: white;
}
.icon-div{
    background: white;
    height: 57px;
    width: 170px;
    border-radius: 15px;
} 
</style>
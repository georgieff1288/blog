<template>
    <div class="footer-container container-fluid mx-0 pb-5 position-relative">
            <div class="container mx-0 row footer-pink-box p-1 p-md-5 position-absolute top-0 start-50 translate-middle">
                <div class="col-12 col-md-8 order-2 oreder-md-1">
                    <p class="x-large-text" style="max-width: 398px;">Lets try out Onir for Free</p>
                    <p class="medium-text" style="max-width: 398px;">Download our latest version and please don't forget to rate :)</p>
                    <div class="d-flex flex-column flex-md-row align-items-center my-1 my-md-5">
                        <div class="icon-div d-flex justify-content-center align-items-center m-1 me-md-3" style="border: 1px solid">
                            <fa class="icon fa-lg" :icon="['fab', 'app-store-ios']" />
                            <span class="small-bold-text">&ensp; App Store</span>
                        </div>
                        <div class="icon-div d-flex justify-content-center align-items-center m-1 ms-md-3" style="border: 1px solid">
                            <fa class="fa-lg" :icon="['fab', 'google-play']" />
                            <span class="small-bold-text">&ensp; Play Store</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 order-1 order-md-2 d-flex d-md-block justify-content-center">
                    <div class="first-img-div px-1 py-3">
                        <img src="@/assets/images/iPhone-2.png" class="img-fluid" alt="...">
                    </div>
                </div>
            </div>
        <h3 class="text-center x-large-text footer-title">Subscribe Newsletter</h3>
        <p class="text-center medium-text footer-text">Suspendisse tincidunt sapien feliuentum</p>
        <div class="d-flex justify-content-center">
            <div class="d-block d-md-flex justify-content-center">
                <input class="form-control mx-0 mx-md-2 my-1 col-12" type="text" placeholder="Enter your email address">
                <button class="btn mx-0 mx-md-2 my-1 text-center col-12 col-md-6">Submit</button>
            </div>            
        </div>    
        <div class="container my-5 d-none d-md-block">
            <hr style="border-top: 2px solid rgba(255, 255, 255, 0.1);">    
        </div>
        <div class="container-fluid mx-0 row">
            <div class="col-12 col-md-3 d-flex justify-content-center">
                <ul>
                    <li>
                        <p class="logo text-center text-md-start">On<span class="i asd">i</span>r</p>                
                    </li>
                    <li class="medium-text footer-text">hello@onirapp.com</li>
                    <li class="medium-text footer-text">+1-800-123 4567</li>
                </ul>
            </div>
            <div class="col-12 col-md-3 d-flex justify-content-center">
                <ul class="higher-line">
                    <li class="medium-text footer-text title d-none d-md-block text-start" style="line-height: 28px;">Company</li>
                    <li class="medium-text footer-text text-center text-md-start">About</li>
                    <li class="medium-text footer-text text-center text-md-start">Services</li>
                    <li class="medium-text footer-text text-center text-md-start">Careers</li>
                    <li class="medium-text footer-text text-center text-md-start">Blog</li>
                    <li class="medium-text footer-text text-center text-md-start">Pricing</li>
                </ul>
            </div>
            <div class="col-12 col-md-3 d-flex justify-content-center">
                <ul class="higher-line">
                    <li class="medium-text footer-text title d-none d-md-block text-start" style="line-height: 28px;">Contact</li>
                    <li class="medium-text footer-text text-center text-md-start">Help</li>
                    <li class="medium-text footer-text text-center text-md-start">FAQs</li>
                    <li class="medium-text footer-text text-center text-md-start">Press</li>
                    <li class="medium-text footer-text text-center text-md-start">Terms &#38; and Conditions</li>
                    <li class="medium-text footer-text text-center text-md-start">Partners</li>
                </ul>
            </div>
            <div class="col-12 col-md-3 d-flex justify-content-center">
                <ul>
                    <li class="my-3 d-flex justify-content-center justify-content-md-start">
                        <fa class="brand-icon fa-lg" :icon="['fab', 'facebook']"/>
                        <fa class="brand-icon fa-lg mx-4" :icon="['fab', 'twitter']" />
                        <fa class="brand-icon fa-lg" :icon="['fab', 'instagram']" />
                    </li>
                    <li class="medium-text footer-text text-center text-md-start" style="font-size: 15px; color:white;">Let's try out!</li>
                    <li class="my-3">
                        <div class="icon-div d-flex justify-content-center align-items-center" style=" background: white;">
                            <fa class="icon fa-lg" :icon="['fab', 'app-store-ios']" />
                            <span class="small-bold-text">&ensp; App Store</span>
                        </div>
                    </li>
                    <li class="my-3">
                        <div class="icon-div d-flex justify-content-center align-items-center" style=" background: white;">
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
.footer-container {
    background: $first-dark-color;
    padding-top: 300px;
    @media (max-width: $breakpoint-medium) {
        padding-top: 400px;
    }
}
.footer-pink-box{
    background: $first-light-color;
    border-radius: 25px;
}
.first-img-div{
    margin-top: -100px;
    border-radius: 46px;
    border: 6px solid $first-dark-color;
    background: white;
    max-width: 240px;
}

.footer-title{
    color:white;
}
.footer-text{
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
    height: 89px;
    width: 270px;
    border-radius: 15px;
    @media (max-width: $breakpoint-medium) {
        height: 70px;
        width: 230px;
    }
} 
</style>
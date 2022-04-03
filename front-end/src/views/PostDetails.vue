<template>
    <div class="details-container container-fluid m-0 px-0">
        <div class="details-header d-flex flex-column align-items-center">
            <p class="text-center medium-bold-text"><span class="blue-color">Design</span> | 30 min ago</p>
            <p class="text-center xx-large-text" style="max-width: 1120px;">{{title}}</p>
            <p class="text-center medium-bold-text">By Robert Long</p>
        </div>
        <div class="container px-2 px-md-0 d-flex flex-column align-items-center">
            <img src="@/assets/images/post-image-1.png" class="post-img img-fluid" alt="..." style="margin-top: -60px;">
            <p class="medium-text my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, justo cursus semper varius, mi est elementum mauris, sed posuere neque mi non purus. Curabitur cursus felis a vulputate condimentum. Curabitur blandit justo odio, vitae pulvinar massa tristique efficitur. Pellentesque laoreet magna metus. Morbi metus justo, fermentum mollis volutpat sollicitudin, blandit a ligula. Vivamus interdum massa felis. Proin pulvinar elementum ligula. Morbi nec orci gravida, varius ipsum quis, lacinia nunc. Etiam vitae nunc ullamcorper, tristique dui quis, dictum lorem. Nulla dapibus diam lacus, in tincidunt tellus sagittis vel. Morbi dictum porttitor leo.
                <br/>
                <br/>
            Nulla rutrum tellus eget odio facilisis mattis. Nullam egestas efficitur mi, fringilla bibendum sem ultricies et. Vestibulum interdum elit neque, in pretium velit ornare eu. Maecenas ultrices lorem quis urna ullamcorper, vel tempus mauris rutrum. In metus enim, fermentum eget ipsum vel, aliquam vulputate eros. Quisque non justo risus. Praesent eu aliquet urna.</p>
            <div class="row">
                <div class="col-6">
                    <img src="@/assets/images/post-image-2.png" class="post-img img-fluid" alt="...">
                </div>
                <div class="col-6">
                    <img src="@/assets/images/post-image-3.png" class="post-img img-fluid" alt="...">
                </div>
            </div>
            <p class="medium-text my-5">Nulla rutrum tellus eget odio facilisis mattis. Nullam egestas efficitur mi, fringilla bibendum sem ultricies et. Vestibulum interdum elit neque, in pretium velit ornare eu. Maecenas ultrices lorem quis urna ullamcorper, vel tempus mauris rutrum. In metus enim, fermentum eget ipsum vel, aliquam vulputate eros. Quisque non justo risus. Praesent eu aliquet urna.</p>
            <div class="d-flex flex-column">
                <div class="pink-div p-2 p-md-5 d-flex flex-column">
                    <div class="quote-icon"><fa class="fa-2xl" icon="quote-right" /></div>
                    <p class="x-large-text" style="font-weight: 400; max-width: 803px;">Prada were so cool about it, even though they understood thecriticism</p>
                </div>
                <p class="text-end .medium-text"><span class="medium-bold-text">Natasha Singh,</span> ABC Inc.</p>
            </div> 
            <p class="medium-text my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, justo cursus semper varius, mi est elementum mauris, sed posuere neque mi non purus. Curabitur cursus felis a vulputate condimentum. Curabitur blandit justo odio, vitae pulvinar massa tristique efficitur. Pellentesque laoreet magna metus. Morbi metus justo, fermentum mollis volutpat sollicitudin, blandit a ligula. Vivamus interdum massa felis. Proin pulvinar elementum ligula. Morbi nec orci gravida, varius ipsum quis, lacinia nunc. Etiam vitae nunc ullamcorper, tristique dui quis, dictum lorem. Nulla dapibus diam lacus, in tincidunt tellus sagittis vel. Morbi dictum porttitor leo.
            <br/>
            <br/>
            Nulla rutrum tellus eget odio facilisis mattis. Nullam egestas efficitur mi, fringilla bibendum sem ultricies et. Vestibulum interdum elit neque, in pretium velit ornare eu. Maecenas ultrices lorem quis urna ullamcorper, vel tempus mauris rutrum. In metus enim, fermentum eget ipsum vel, aliquam vulputate eros. Quisque non justo risus. Praesent eu aliquet urna.</p>   
            <p class="medium-text first-dark-color mb-5">Tags: <span class="blue-color">design, app, tips</span></p>
            <p class="x-large-text text-center">Leave a Comments</p> 
            <p class="small-text text-center">Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum </p>
            <div class="container px-0 form-container mb-5">
                <textarea class="form-control my-4" placeholder="Comments" rows="6"></textarea>
                <div class="row">
                    <div class="col-12 col-md-6 py-4">
                        <input type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="col-12 col-md-6 py-4">
                        <input type="text" class="form-control" placeholder="Email">
                    </div>
                </div>  
                <div class="row">
                    <div class="col-12 col-md-6 py-4">
                        <input type="number" class="form-control" placeholder="Phone no">
                    </div>
                    <div class="col-12 col-md-6 py-4">
                        <input type="text" class="form-control" placeholder="Website">
                    </div>
                </div>  
                <div class="d-flex justify-content-center justify-content-md-start">
                    <button class="btn px-0 px-md-5">Post Comment</button>
                </div>
            </div> 
            <div class="row mt-5" style="max-width: 774px">
                <div class="col-3">
                    <img src="@/assets/images/profile-1.png" class="img-fluid" alt="..." style="border-radius: 20px;">
                </div>
                <div class="col-9">
                    <p class="m-0 small-text">30 min ago</p>
                    <p class="m-0 medium-bold-text">Robert Long</p>
                    <p class="m-0 small-text">Aliquam vitae eros lectus. Fusce vel condimentum neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eget bibendum ante. Nulla eget neque malesuada, hendrerit nibh quis, fringilla ligula</p>
                </div>
            </div>
            <div class="row my-5" style="max-width: 774px">
                <div class="col-3">
                    <img src="@/assets/images/profile-2.png" class="img-fluid" alt="..." style="border-radius: 20px;">
                </div>
                <div class="col-9">
                    <p class="m-0 small-text">1 hr ago</p>
                    <p class="m-0 medium-bold-text">Jennifer Smith</p>
                    <p class="m-0 small-text">Aliquam vitae eros lectus. Fusce vel condaciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eget bibendum ante. Nulla eget neque malesuada, hendrerit nibh quis, fringilla ligula</p>
                </div>
            </div>
            <div class="row mb-5" style="max-width: 774px">
                <div class="col-3">
                    <img src="@/assets/images/profile-3.png" class="img-fluid" alt="..." style="border-radius: 20px;">
                </div>
                <div class="col-9">
                    <p class="m-0 small-text">2 hrs ago</p>
                    <p class="m-0 medium-bold-text">Natasha Singh</p>
                    <p class="m-0 small-text">Aliquam vitae eros lectus. Fusce vel condimentum neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenadum ante. Nulla eget neque malesuada, hendrerit nibh quis, fringilla ligula</p>
                </div>
            </div>
            <p class="x-large-text mt-5">Related Posts</p>
            <p class="medium-text">We would like to share with you knowledge, experiences and latest news</p>
            <div class="container mt-5 p-0 row">
                <div class="col-12 px-0 col-md-4 d-flex justify-content-center justify-content-md-start">
                    <div class="pink-post-box p-4 d-flex flex-column justify-content-between">
                        <p class="text-end small-text">30 min ago</p>
                        <div class="iner-div p-1">
                            <p class="text-center medium-bold-text">Added Cool Features</p>
                            <p class="text-center small-text">Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, dapibus duieyri.</p>
                            <p class="text-center small-text read-story-btn">Read Story</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 px-0 col-md-4 my-3 my-md-0 d-flex justify-content-center">
                    <div class="pink-post-box p-4 d-flex flex-column justify-content-between">
                        <p class="text-end small-text">1 hr ago</p>
                        <div class="iner-div p-1">
                            <p class="text-center medium-bold-text">Awesome Works</p>
                            <p class="text-center small-text">Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, dapibus duieyri.</p>
                            <p class="text-center small-text read-story-btn">Read Story</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 px-0 col-md-4 d-flex justify-content-center justify-content-md-end">
                    <div class="pink-post-box p-4 d-flex flex-column justify-content-between">
                        <p class="text-end small-text">4 hrs ago</p>
                        <div class="iner-div p-1">
                            <p class="text-center medium-bold-text">Looking cool at pink</p>
                            <p class="text-center small-text">Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, dapibus duieyri.</p>
                            <p class="text-center small-text read-story-btn">Read Story</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function (){
        return {
            title:''
        }
    },
    mounted(){
        this.getTitle();
    },
    methods:{
        async getTitle(){
            await axios.get(`http://localhost:3000/blog/post-details/${this.$route.params.id}`)
                .then(response => response.data)
                .then(result => {this.title = result[0].title})
                .catch(err => console.log(err))
        }
    }
};
</script>

<style scoped lang="scss">
.details-container {
    overflow: hidden;
    padding-bottom: 300px;
    @media (max-width: $breakpoint-medium) {
        padding-bottom: 500px;
    }
}
.details-header {
    padding-top: 180px;
    padding-bottom: 182px;
    background: $first-light-color;
}
.post-img{
    border-radius: 20px;
}
.pink-div{
    border-radius: 20px;
    background: $first-light-color;
}
.quote-icon{
    color: $blue-color;
    margin-top: -60px;
    margin-bottom: 40px;
    @media (max-width: $breakpoint-medium) {
        margin: 0px;
    }
}
.form-container textarea{
    background: $fourth-light-color;
    border-style: none;
    border-radius: 20px;
    resize: none;
    padding: 20px;
}
.form-container input{
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
.pink-post-box{
    width: 280px;
    height: 320px;
    border-radius: 20px;
    background: $first-light-color;
}
.iner-div{
    background: white;
    border-radius: 20px;
}
</style>
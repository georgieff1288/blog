<template>
    <div class="blog-container container-fluid m-0 px-0">
        <div class="blog-header d-flex flex-column align-items-center">
            <p class="text-center medium-text">Chckout our Latest Stories</p>
            <p class="text-center xx-large-text">Blog</p>
            <div class="container input-div d-flex justify-content-center mt-3 px-2">
                <input type="text" class="form-control" placeholder="Search">
                <span class="medium-bold-text align-self-center d-none d-md-flex justify-content-center align-items-center" style="color: white;">Go</span>
            </div>
        </div>
        <h1 v-if="!firstPost" class="text-center x-large-text mt-4">Loading...</h1>
        <div v-if="firstPost" class="post-container container-fluid m-0 px-0 px-md-4">
            <div class="row mx-0 px-3 mx-md-5 mb-5" style="margin-top: -60px;">
                <div class="col-12 col-lg-6">
                    <img :src="firstPost.image_url" class="first-post-img img-fluid" alt="...">
                </div>
                <div class="col-12 col-lg-6">
                    <p class="x-large-text mt-3 m-lg-0">{{firstPost.title}}</p>
                    <p class="medium-text">{{firstPost.content}}</p>
                    <router-link class="router-link" :to="'/blog/post-details/' + firstPost.id">
                        <p class="small-text read-story-btn m-1">Read story</p>
                    </router-link>
                    <div class="d-flex">
                        <img src="@/assets/images/profile.png" class="profile-img img-fluid" alt="...">
                        <div class="ms-2">
                            <p class="medium-bold-text m-0">By Robert Long</p>
                            <p class="small-text m-0">30 min ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-0 px-3 mx-md-5">
                <div class="col-12 col-md-4" v-for="post in posts" :key="post.id">
                    <Post :post="post" />  
                </div>
            </div>
        </div>
        <div v-if="firstPost" class="d-flex justify-content-center mx-1">
            <div class="prev-posts d-flex justify-content-center align-items-center">
                <p class="medium-bold-text">Previous Posts</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Post from '../components/Post.vue'
export default {
    components:{
        Post,
    },
    data: function(){
        return{
            firstPost:'',
            posts: []
        }
    },
    mounted(){
        this.getPosts();
    },
    methods:{
        async getPosts () {
            await axios.get('http://localhost:3000/blog')
                .then(response => response.data)
                .then(result => {
                    this.firstPost = result[0]
                    result.shift()
                    this.posts = result
                })
                .catch(err => console.log(err))
        }

        //NB: If you don't have db, you can comment axios import row and previous function and uncomment and use next function
        // getPosts() {
        //     this.firstPost = {"id":10,"title":"Added Cool Features","content":"Duis orci nisl, ornare non diam id, dapibus faucibus urna. Vestibulum tristique posuere iaculis. Suspendisse orci tortor, auctor non luctus sed, vulputate sit amet libero. Maecenas congue fringilla justo molestie dapibus. Cras quis erat in velit rhoncus mollis. Phasellus eu enim dignissim an","date":"30 min ago","image_url":"https://media.istockphoto.com/photos/young-women-using-computer-cyber-security-concept-picture-id1166334015"};

        //     this.posts = [{"id":9,"title":"Looking cool at Pink","content":"Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.","date":"41 min ago","image_url":"https://media.istockphoto.com/photos/closeup-cropped-image-student-girl-hands-typing-using-laptop-picture-id1146488500"},{"id":8,"title":"Looking awesome with new update","content":"Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.","date":"1 hr ago","image_url":"https://media.istockphoto.com/photos/business-technology-internet-and-networking-concept-picture-id1016968886"},{"id":7,"title":"Suspendisse orci tortor,\r\nauctor non luctus","content":"quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.","date":"2 hrs ago","image_url":"https://media.istockphoto.com/photos/online-shopping-picture-id923079848"},{"id":6,"title":"Morbi vitae mi at nisi tinci\r\ndunt maximus","content":"quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.","date":"7 hrs ago","image_url":"https://media.istockphoto.com/photos/digital-lifestyle-blog-writer-or-business-person-using-smart-device-picture-id1176438482"},{"id":5,"title":"Vestibulum tristique posuere","content":"Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.","date":"July 21,2021","image_url":"https://media.istockphoto.com/photos/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-picture-id1249219777"},{"id":4,"title":"Etiam eget vehicula dolor","content":"Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.","date":"June 23,2021","image_url":"https://media.istockphoto.com/photos/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-picture-id1219980553"},{"id":3,"title":"Looking awesome with new update","content":"Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.","date":"March 21, 2021","image_url":"https://media.istockphoto.com/photos/close-up-of-hands-typing-on-laptop-night-work-concept-picture-id1091348950"},{"id":2,"title":"fringilla bibendum sem ultret\r\n","content":"Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.","date":"Feb 12, 2021","image_url":"https://media.istockphoto.com/photos/close-up-of-hands-typing-on-laptop-night-work-concept-picture-id1091348950"},{"id":1,"title":"Looking cool at Pink","content":"Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.","date":"Jan 1, 2021","image_url":"https://media.istockphoto.com/photos/personal-information-to-shop-online-filling-electronic-form-on-with-picture-id1209272402"}]
        // }
    }
};
</script>

<style scoped lang="scss">
.blog-container{    
    overflow: hidden;
    padding-bottom: 300px;
    @media (max-width: $breakpoint-medium) {
        padding-bottom: 500px;
    }
}
.blog-header{
    padding-top: 180px;
    padding-bottom: 172px;
    background: $first-light-color;
}
.blog-header p{
    color: $first-dark-color;
}
.input-div input{
    max-width: 648px;
    height: 89px;
    background: $third-light-color;
    border-radius: 20px;
    border-style: none;
}
.input-div span{
    width: 97px;
    height: 58px;
    background: $blue-color;
    color: white;
    border-radius: 20px;
    margin-left: -118px;
}
.profile-img{
    height: 50px;
    border-radius: 50%;
}
.first-post-img{
    border-radius: 20px;
}
.prev-posts{
    background: $first-light-color;
    border-radius: 20px;
    width: 297px;
    height: 84px;
}
</style>
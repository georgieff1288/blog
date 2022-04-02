<template>
    <div class="blog-container container-fluid px-0">
        <div class="blog-header d-flex flex-column align-items-center">
            <p class="text-center medium-text">Chckout our Latest Stories</p>
            <p class="text-center xx-large-text">Blog</p>
            <div class="input-group mt-3 px-2">
                <input type="text" class="form-control" placeholder="Search" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2">Go</span>
            </div>
        </div>
        <h1 v-if="!firstPost" class="text-center x-large-text mt-4">Loading...</h1>
        <div class="post-container container">
            <div class="row mx-0 mx-md-5 mb-5" style="margin-top: -60px;">
                <div class="col-12 col-lg-6">
                    <img :src="firstPost.image_url" class="first-post-img img-fluid" alt="...">
                </div>
                <div class="col-12 col-lg-6">
                    <p class="x-large-text mt-3 m-lg-0">{{firstPost.title}}</p>
                    <p class="medium-text">{{firstPost.content}}</p>
                    <router-link class="router-link" to="/blog/details">
                        <p class="small-text read-btn m-1">Read story</p>
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
            <div class="row mx-0 mx-md-5">
                <div class="col-12 col-md-4" v-for="post in posts" :key="post.id">
                    <Post :post="post" />  
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center mx-1">
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
        }
    }
};
</script>

<style scoped lang="scss">
.blog-container{    
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
.input-group{
    max-width: 648px;   
}
.input-group span{
    background: $blue-color;
    color: white;
}
.profile-img{
    height: 50px;
    border-radius: 50%;
}
.first-post-img{
    border-radius: 20px;
}
.read-btn{
    color: $blue-color;
    font-weight: 700px;
}
.prev-posts{
    background: $first-light-color;
    border-radius: 20px;
    width: 297px;
    height: 84px;
}
</style>
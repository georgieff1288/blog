<template>
    <div class="my-3 d-flex flex-column align-items-center">
        <img :src="post.image_url" class="post-img img-fluid" alt="...">
        <div class="mt-4">
            <p class="small-text">{{post.date}}</p>
            <p class="medium-bold-text">{{post.title}}</p>
            <p class="small-text">{{post.content}}</p>
            <router-link class="router-link" to="/blog/details">
                <p class="read-story-btn small-text">Read Story</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        post: Object
    }
};
</script>

<style scoped lang="scss">
.post-img{
    border-radius: 20px;
}
.read-story-btn{
    color: $blue-color;
    font-weight: 700px;
}
</style>
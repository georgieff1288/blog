<template>
    <div class="container-fluid m-0 px-0">
        <h1>Carousel</h1>
        <carousel :items-to-show="1.5">
            <slide v-for="slide in items" :key="slide">
                {{ slide }}
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data: function(){
        return {
            items:['111', '222', '333']
        }
    }
};
</script>

<style scoped lang="scss">
</style>
<template>
    <div class="ui huge horizontal divided list">
        <div class="item">
            <img 
            :src="image.link" 
            v-for="image in allImages"
            :key="image.id"
            class="ui image"
            height="250px"
            width="350px"
            >
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'ImageList',
    methods: {
        ...mapActions(['fetchImages'])
    },
    computed: {
        ...mapGetters(['allImages'])
    },
    created() {
        this.fetchImages();
    }
}
</script>

<style scoped>
li {
    list-style: none;
}
</style>

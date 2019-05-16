<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">Active Storage</a>
        
        <div class="right menu">
            <div v-if="isLoggedIn" id="horizontal_buttons">
                <a href="#" class="ui item">Galleries</a>
                <a href="#" class="ut item">Upload</a>
                <a href="#" class="ui item" @click="logout">Logout</a>
            </div>
            <a href="#" class="ui item" @click="login" v-else>login</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    methods: {
        ...mapActions(['login', 'logout'])
    },
    computed: {
        ...mapGetters(['isLoggedIn'])
    }
}
</script>

<style scoped>
#horizontal_buttons {
    display: flex;
}
</style>

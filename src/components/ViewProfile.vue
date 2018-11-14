<template>
    <div class="view-profile">
        <h2>Profile for {{ userId }}</h2>    
    </div>    
</template>

<script>
export default {
    name: 'ViewProfile',
    data () {
        return {
            userId: this.$route.params.user_id
        }
    },
    watch: { // pour surveiller un élément et fire un event
        $route: 'updateId' //cf l'objet route dans router.js
    },
    methods : {
        updateId() {
            this.userId = this.$route.params.user_id
        }
    }
}
</script>

<style scoped>

</style>
 
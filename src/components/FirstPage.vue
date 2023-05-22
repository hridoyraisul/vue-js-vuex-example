<script>
export default {
    name: "FirstPage",
    methods: {
        setImageLink() {
            this.$store.commit('changeImageLink', 'https://www.gifcen.com/wp-content/uploads/2022/04/wallpaper-gif-4.gif')
        }
    }
}
</script>

<template>
    <div>
        <button @click="setImageLink">View First Image</button>
    </div>
</template>

<style scoped>

</style>
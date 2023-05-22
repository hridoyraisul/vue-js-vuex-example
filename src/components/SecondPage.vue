<script>
export default {
    name: "SecondPage",
    methods: {
        setImageLink() {
            this.$store.commit('changeImageLink', 'https://cdnb.artstation.com/p/assets/images/images/014/665/033/original/yargon-kerman-webp-net-gifmaker-39.gif')
        }
    }
}

</script>

<template>
    <div>
        <button @click="setImageLink">View Second Image</button>
    </div>
</template>

<style scoped>

</style>
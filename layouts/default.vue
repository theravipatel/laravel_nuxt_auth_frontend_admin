<template>
    <div>
        <Header></Header>
        <Nuxt/>
        <Footer></Footer>
    </div>
</template>
<script>
export default {
    auth: false,
    mounted() {
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    }
}
</script>
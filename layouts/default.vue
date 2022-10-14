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
<style>
.ajax-loader{  /* Loader Div Class */
    position: absolute;
    top:0px;
    right:0px;
    width:100%;
    height:100%;
    background-color:#0a0a0a;
    background-image: url('../assets/89.gif');
    background-size: 100px;
    background-repeat:no-repeat;
    background-position:center;
    z-index:10000000;
    opacity: 0.4;
    filter: alpha(opacity=40);
}
</style>
<template>
    <div>
        <Header></Header>
        <div v-if="$auth.loggedIn == true">
            <div class="flex overflow-hidden bg-white pt-16">
                <!-- <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div> -->
                <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <main>
                        <div class="pt-6 px-4">
                            <Nuxt/> 
                        </div>
                    </main>
                </div>
            </div>
        </div>
        <div v-if="$auth.loggedIn == false">
            <Nuxt/> 
        </div>
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
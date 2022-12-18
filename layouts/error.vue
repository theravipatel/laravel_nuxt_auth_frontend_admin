<template>
    <div>
        <div class="w-full grid">
            <div class="bg-white shadow rounded-lg p-4 sm:p-12 xl:p-12  2xl:col-span-2">
                <div class="mb-4">
                    <div class="text-center items-center ">
                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900"
                            v-if="error.statusCode === 404">
                            Page not found
                        </span>
                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900" v-else>
                            An error  occurred
                        </span> 

                        <div class="mt-10">
                            <h3 class="text-base font-normal text-gray-500">
                                <NuxtLink to="/" class="
                                    text-white text-sm
                                    sm:text-base
                                    bg-blue-500
                                    hover:bg-blue-600
                                    rounded-2xl
                                    px-4
                                    py-2
                                    w-full
                                    transition
                                    duration-150
                                    ease-in
                                    ">Go Back to Home page</NuxtLink>
                            </h3>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    auth: false,
    props: ['error'],
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    }
}
</script>
<style>
.ajax-loader {
    /* Loader Div Class */
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: #0a0a0a;
    background-image: url('../assets/89.gif');
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10000000;
    opacity: 0.4;
    filter: alpha(opacity=40);
}
</style>
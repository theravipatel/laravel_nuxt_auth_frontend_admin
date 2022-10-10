<template>
    <div class="bg-gray-200 px-4 py-4">
        <div class="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
            <div>
                <NuxtLink to="/" class="inline-block py-2 text-gray-800 text-2xl font-bold">OurLogo.</NuxtLink>
            </div>

            <div>
                <div class="hidden md:block">
                    <NuxtLink to="/" class="inline-block py-1 md:py-4 text-gray-600 mr-6">Home</NuxtLink>
                    <NuxtLink to="/contact-us" class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6">Contact Us </NuxtLink>
                </div>
            </div>

            <div class="" v-if="$auth.loggedIn == false">
                <NuxtLink  to="/login" class="inline-block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" :class="{ 'bg-white': $route.path == '/login' }">Login</NuxtLink>
                <NuxtLink  to="/register" class="inline-block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" :class="{ 'bg-white': $route.path == '/register' }">Register</NuxtLink>
            </div>
            <div class="" v-if="$auth.loggedIn == true">
                <NuxtLink  to="/dashboard" class="inline-block py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">Dashboard</NuxtLink>
                <button @click="logout" class="inline-block text-gray-700 hover:text-gray-400">Logout</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderPage',
    methods: {
        async logout() {
            try {
                await this.$auth.logout();
                this.$router.push({
                    path: '/login',
                });
            } catch(err) {
                console.log(err);
            }
        }
    },
}
</script>
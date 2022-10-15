<template>
    <!-- <div>
        <div class="ajax-loader" v-if="$store.state.ajax_loading"></div>
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
    </div> -->
    <div>

    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    ..Logo..
                </span>
            </a>
            <div class="flex items-center md:order-2">
                <button type="button" @click="display_dd=!display_dd"
                    class="inline-flex justify-center items-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    English (US)
                </button>
                <!-- Dropdown -->
                <div :class="!display_dd?'hidden':''"
                    class="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                    id="language-dropdown-menu" data-popper-reference-hidden="" data-popper-escaped=""
                    data-popper-placement="bottom"
                    style="position: absolute; margin: 0px; transform: translate(0px, 95px);">
                    <ul class="py-1" role="none">
                        <li>
                            <a href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                <div class="inline-flex items-center">
                                    English (US)
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                <div class="inline-flex items-center">
                                    Deutsch
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem">
                                <div class="inline-flex items-center">
                                    Italiano
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <button type="button"  @click="display_mobile_menu=!display_mobile_menu"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-language-select" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div :class="!display_mobile_menu?'hidden':''" class="justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-language-select">
                <ul
                    class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#"
                            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </div>
</template>
<script>
export default {
    name: 'HeaderPage',
    data() {
        return {
            display_dd: false,
            display_mobile_menu: false,
        }
    },
    methods: {
        async logout() {
            try {
                await this.$auth.logout();
                this.$router.push({
                    path: '/login',
                });
            } catch (err) {
                console.log(err);
            }
        }
    },
}
</script>
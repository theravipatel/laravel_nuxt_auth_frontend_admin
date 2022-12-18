<template>
    <div>
        <div class="ajax-loader" v-if="$store.state.ajax_loading"></div>
        <!-- <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <NuxtLink to="/" class="flex items-center">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        ..Logo..
                    </span>
                </NuxtLink>
                <div v-if="$auth.loggedIn == false" class="flex items-center md:order-2">
                    <NuxtLink to="/login" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-3">Login</NuxtLink>
                    <NuxtLink to="/register" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</NuxtLink>
                </div>

                <div v-if="$auth.loggedIn == true" class="flex items-center md:order-2">
                    <button type="button" @click="display_dd=!display_dd"
                        class="inline-flex justify-center items-center p-2 text-sm text-gray-700 rounded cursor-pointer bg-gray-100 hover:text-gray-900 hover:bg-gray-200">
                        Hi {{ $auth.user.name }} <span class="ml-3 text-blue-500">{{ display_dd ? "&UpArrow;" : "&DownArrow;" }}</span>
                    </button>
                    <div :class="!display_dd?'hidden':''"
                        class="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                        id="language-dropdown-menu" data-popper-reference-hidden="" data-popper-escaped=""
                        data-popper-placement="bottom"
                        style="position: absolute; margin: 0px; transform: translate(-13px, 77px);">
                        <ul class="py-1" role="none">
                            <li class="hover:bg-gray-100">
                                <NuxtLink  to="/dashboard"
                                    class="block py-2 px-4 text-sm text-gray-700"
                                    role="menuitem">
                                    Dashboard
                                </NuxtLink>
                            </li>
                            <li class="hover:bg-gray-100">
                                <button @click="logout"
                                    class="block py-2 px-4 text-sm text-gray-700"
                                    role="menuitem">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>

                    <button type="button" @click="display_mobile_menu=!display_mobile_menu"
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
                <div :class="!display_mobile_menu?'hidden':''" class="justify-between items-center w-full md:flex md:w-auto md:order-1">
                    <ul
                        class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NuxtLink to="/"
                                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact-us"
                                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> -->
        <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div class="px-3 py-2.5 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start z-20">
                        <button @click="display_mobile_menu=!display_mobile_menu"
                            class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                            <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <NuxtLink to="/" class="text-xl font-bold flex items-center lg:ml-2.5">
                            <span class="self-center whitespace-nowrap">.Logo.</span>
                        </NuxtLink>
                    </div>
                    
                    <div v-if="$auth.loggedIn == false">
                        <div class="flex items-center md:order-2">
                            <NuxtLink to="/login"
                                class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-3">
                                Login</NuxtLink>
                            <NuxtLink to="/register"
                                class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Register</NuxtLink>
                        </div>
                        <div :class="!display_mobile_menu?'hidden':''">
                            <aside
                                class="fixed z-10 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width">
                                <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                                    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                                        <div class="flex-1 px-3 bg-white divide-y space-y-1">
                                            <ul class="space-y-2 pb-2">
                                                <li>
                                                    <NuxtLink to="/"
                                                        class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
                                                        <svg class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                        </svg>
                                                        <span class="ml-3">Home</span>
                                                    </NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/contact-us"
                                                        class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                                                        <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                                            </path>
                                                        </svg>
                                                        <span class="ml-3 flex-1 whitespace-nowrap">Contact Us</span>
                                                    </NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <div v-if="$auth.loggedIn == true">
                        <div class="flex items-center md:order-2">
                            <button type="button" @click="display_dd=!display_dd"
                                class="inline-flex justify-center items-center p-2 text-sm text-gray-700 rounded cursor-pointer bg-gray-100 hover:text-gray-900 hover:bg-gray-200">
                                Hi {{ $auth.user.name }} <span class="ml-3 text-blue-500">{{ display_dd ? "&UpArrow;" :
                                "&DownArrow;" }}</span>
                            </button>
                            <div :class="!display_dd?'hidden':''"
                                class="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                                style="position: absolute; margin: 0px; transform: translate(-13px, 71px);">
                                <ul class="py-1" role="none">
                                    <li class="hover:bg-gray-100">
                                        <NuxtLink to="/dashboard" class="block py-2 px-4 text-sm text-gray-700"
                                            role="menuitem">
                                            Dashboard
                                        </NuxtLink>
                                    </li>
                                    <li class="hover:bg-gray-100">
                                        <button @click="logout" class="block py-2 px-4 text-sm text-gray-700"
                                            role="menuitem">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <aside id="sidebar"
                            :class="!display_mobile_menu?'hidden':''"
                            class="fixed z-10 h-full top-0 left-0 pt-14 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
                            aria-label="Sidebar">
                            <div class="relative flex-1 flex flex-col min-h-0 border border-gray-200 bg-white pt-0">
                                <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                                    <div class="flex-1 px-3 bg-white divide-y space-y-1">
                                        <ul class="space-y-2 pb-2">
                                            <li>
                                                <NuxtLink to="/dashboard"
                                                    class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
                                                    <svg class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                    </svg>
                                                    <span class="ml-3">Dashboard</span>
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/category"
                                                    class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                                                    <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                                        </path>
                                                    </svg>
                                                    <span class="ml-3 flex-1 whitespace-nowrap">Category</span>
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/products"
                                                    class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                                                    <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                                        </path>
                                                    </svg>
                                                    <span class="ml-3 flex-1 whitespace-nowrap">Products</span>
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/users"
                                                    class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                                                    <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                                        </path>
                                                    </svg>
                                                    <span class="ml-3 flex-1 whitespace-nowrap">Users</span>
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="/orders"
                                                    class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                                                    <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                                        </path>
                                                    </svg>
                                                    <span class="ml-3 flex-1 whitespace-nowrap">Orders</span>
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                        <div class="space-y-2 pt-2">
                                            <button @click="logout()"
                                                class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                                                <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="ml-3 flex-1 whitespace-nowrap">Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
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
            this.$store.commit('setAjaxLoadingStatus_store', true);
            await this.$auth.logout().then(res => {
                this.$store.commit('setAjaxLoadingStatus_store', false);
                this.$router.push({
                    path: '/login',
                });
            }).catch(err => {
                this.$store.commit('setAjaxLoadingStatus_store', false);
                console.log(err.response);
            });
        }
    },
}
</script>
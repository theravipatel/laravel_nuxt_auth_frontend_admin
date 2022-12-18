<template>
<div>
    <div class="">
        <NuxtLink to="/category/add/" class="
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
                    ">Add Category</NuxtLink>
    </div>
    <div class="mt-5">
        <table class="border-collapse w-full">
        <thead>
            <tr>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Sr. No.</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Name</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Status</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Actions</th>
            </tr>
        </thead>
        <tbody>
            
            <tr 
                class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                v-for="(item, itemIndex) in results"
                :key="itemIndex"
            >
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Sr. No.</span>
                    {{itemIndex + 1}}
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Name</span>
                    {{ item.name}}
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                    <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold">
                        {{ item.status}}
                    </span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                    <NuxtLink :to="'/category/edit/'+item.id" class="text-blue-400 hover:text-blue-600 underline">Edit</NuxtLink>
                    <a href="javascript:void(0);" class="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                </td>
            </tr>

        </tbody>
    </table>
    </div>
</div>
</template>

<script>
export default {
    middleware: 'auth',
    name: 'CategoryManagePage',
    data() {
        return {
            results: [],
        }
    },
    mounted() {
        this.$store.commit('setAjaxLoadingStatus_store', true);

        this.$axios.get('/api/category/manage').then(res=>{
            this.$store.commit('setAjaxLoadingStatus_store', false);
            console.log("aaaaaa====",res.data);
            this.results = res.data.data.category;
        }).catch(err=> {
            this.$store.commit('setAjaxLoadingStatus_store', false);
            console.log(err.response.data.message);
            //this.form_error.push(err.response.data.message);
        });
        
    }
}
</script>

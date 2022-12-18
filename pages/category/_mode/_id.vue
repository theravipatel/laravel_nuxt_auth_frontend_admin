<template>
<div>
    <div class="min-h-screen flex flex-col">
        <div class="
              flex flex-col
              bg-white
              shadow-md
              px-4
              sm:px-6
              md:px-8
              lg:px-10
              py-8
              rounded-3xl
              w-50
              max-w-md
            ">
            <div class="font-medium text-xl sm:text-1xl text-gray-800">
                {{page_name}}
            </div>

            <div class="mt-8">
                <div :class="form_error.length?'':'hidden'" class="pb-5 inline-block items-center font-medium text-red-500 text-xs ml-1">
                    <ul class="list-disc">
                        <li v-for="item in form_error" :key="item">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                <form action="#" ref="dataForm" @submit.prevent="saveData">
                    <input v-model="form.id" id="id" type="hidden" name="id" />
                    <div class="flex flex-col mb-5">
                        <label for="name" class="mb-1 text-xs tracking-wide text-gray-600">Name*:</label>
                        <div class="relative">
                            <div class="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-10
                        text-gray-400
                      ">
                                <i class="fas fa-user text-blue-500"></i>
                            </div>

                            <input v-model="form.name" id="name" type="text" name="name" class="
                        text-sm
                        placeholder-gray-500
                        pl-10
                        pr-4
                        rounded-2xl
                        border border-gray-400
                        w-full
                        py-2
                        focus:outline-none focus:border-blue-400
                      " />
                        </div>
                    </div>
                    
                    <div class="flex w-full">
                        <button type="submit" class="
                      flex
                      mt-2
                      items-center
                      justify-center
                      focus:outline-none
                      text-white text-sm
                      sm:text-base
                      bg-blue-500
                      hover:bg-blue-600
                      rounded-2xl
                      py-2
                      w-full
                      transition
                      duration-150
                      ease-in
                    " :disabled="submitted">
                            <span class="mr-2 uppercase">Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    middleware: 'auth',
    name: 'CategoryFormPage',
    data() {
        return {
            submitted: false,
            form_error: [],
            form: {
                id: '',
                name: '',
            },
            page_name: "Add Category",
            
        }
    },
    mounted() {
        this.$axios.$get('/sanctum/csrf-cookie');
        this.page_name = this.$route.params.mode;
        this.form.id = this.$route.params.id;
        

        if (this.$route.params.mode == "edit" && this.$route.params.id >0) {
            this.page_name = "Edit Category";
            
            this.$store.commit('setAjaxLoadingStatus_store', true);
            this.$axios.get('/api/category/add_edit/'+this.form.id).then(res=>{
                this.$store.commit('setAjaxLoadingStatus_store', false);
                console.log("aaaaaa====",res.data);
                
                if (res.status == 200) {
                    this.form.name = res.data.data.name;
                }
                //this.results = res.data.data.category;
            }).catch(err=> {
                this.$store.commit('setAjaxLoadingStatus_store', false);
                console.log(err.response.data.message);
                //this.form_error.push(err.response.data.message);
            });
        }
    },
    methods:{
        saveData() {
            
            this.form_error = [];
            for(const item in this.form) {
                if(this.form[item] === '') {
                    this.form_error.push(item + ' not valid');
                }
            }
            
            if(this.form_error.length == 0) {
                this.submitted = true;
                this.$store.commit('setAjaxLoadingStatus_store', true);
                const formData = new FormData(this.$refs.dataForm);
                this.$axios.post('/api/category/save',formData).then(res=>{
                    this.$store.commit('setAjaxLoadingStatus_store', false);
                    console.log(res);
                    if(res.status == 200) {
                        alert(res.data.message);
                        this.$router.push({
                            path: '/category/manage',
                        });
                    }
                }).catch(err=> {
                    this.$store.commit('setAjaxLoadingStatus_store', false);
                    this.submitted = false;
                    console.log(err.response.data.message);
                    this.form_error.push(err.response.data.message);
                });
            }
        }
    }
}
</script>

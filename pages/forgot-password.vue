<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
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
            <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
                Forgot your password?
            </div>
            <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
                Don't fret! Just type in your email and we will send you a code to reset your password!
            </div>

            <div class="mt-8">
                <div :class="form_error.length?'':'hidden'" class="pb-5 inline-block items-center font-medium text-red-500 text-xs ml-1">
                    <ul class="list-disc">
                        <li v-for="item in form_error" :key="item">
                        {{ item }}
                        </li>
                    </ul>
                </div>
                <form action="#" ref="generateCodeForm" @submit.prevent="generateCode">
                    <div class="flex flex-col mb-5">
                        <label for="email" class="mb-1 text-xs tracking-wide text-gray-600">E-Mail Address:</label>
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
                                <i class="fas fa-at text-blue-500"></i>
                            </div>

                            <input v-model="form.email" id="email" type="email" name="email" class="
                        text-sm
                        placeholder-gray-500
                        pl-10
                        pr-4
                        rounded-2xl
                        border border-gray-400
                        w-full
                        py-2
                        focus:outline-none focus:border-blue-400
                      " placeholder="Enter your email" />
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
                            <span>
                                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="flex justify-center items-center mt-6">
            <a href="#" target="_blank" class="
                inline-flex
                items-center
                text-gray-700
                font-medium
                text-xs text-center
              ">
                <span class="ml-2">Go back to Login?
                    <NuxtLink to="/login" class="text-xs ml-2 text-blue-500 font-semibold">Login here</NuxtLink>
                </span>
            </a>
        </div>
        <div class="flex justify-center items-center mt-6">
            <a href="#" target="_blank" class="
                inline-flex
                items-center
                text-gray-700
                font-medium
                text-xs text-center
              ">
                <span class="ml-2">Do not have an account?
                    <NuxtLink to="/register" class="text-xs ml-2 text-blue-500 font-semibold">Register here</NuxtLink>
                </span>
            </a>
        </div>
    </div>
</template>
    
<script>
export default {
    auth: 'guest',
    name: 'ForgotPasswordPage',
    data() {
        return {
            submitted: false,
            form_error: [],
            form: {
                email: '',
            }
        }
    },
    mounted() {
        this.$axios.$get('/sanctum/csrf-cookie');
    },
    methods:{
        async generateCode() {
            
            this.form_error = [];
            for(const item in this.form) {
                if(this.form[item] === '' || this.form[item].length === 0) {
                    this.form_error.push(item + ' not valid');
                }
            }

            if(this.form_error.length == 0) {
                this.submitted = true;
                const formData = new FormData(this.$refs.generateCodeForm);
                this.$axios.post('/api/generate-code',formData).then(res=>{
                    alert(res.data.message);
                    this.$router.push({
                        path: '/code-check',
                    });
                }).catch(err=> {
                    this.submitted = false;
                    console.log(err.response.data.message);
                    this.form_error.push(err.response.data.message);
                });
            }
        }
    }
}
</script>
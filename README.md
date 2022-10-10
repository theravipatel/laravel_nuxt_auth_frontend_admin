# laravel_nuxt_auth_frontend_admin

## 1) Create app
```
npm init nuxt-app laravel_nuxt_auth_frontend_admin
```

## 2) Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## 3) Create Login, Register Pages

## 4) Add @nuxtjs/auth-next dependency package
- Ref. Link: https://auth.nuxtjs.org/
- Nuxt auth with Laravel Sanctum ref. link: https://auth.nuxtjs.org/providers/laravel-sanctum
``
npm add --exact @nuxtjs/auth-next
``

## 5) Add @nuxtjs/auth-next to the modules section of nuxt.config.js
``
modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
],
``

## 6) Add laravel-sanctum auth code to nuxt.config.js
``
auth: {
    strategies: {
        laravelSanctum: {
            provider: 'laravel/sanctum',
            url: 'http://localhost:8000',
            endpoints: {
                login: {
                    url: '/api/login'
                },
                logout: {
                    url: '/api/logout'
                }
            }
        },
    }
},
``

## 6) Update axios baseUrl
``
axios: {
    baseURL: 'http://localhost:8000',
},
``

## 7) Now fetch CSRF token in login page
``
<script>
export default {
    name: 'LoginPage',
    mounted() {
        this.$axios.$get('/sanctum/csrf-cookie');
    },
    methods:{

    }
}
</script>
``

## 8) Create login method
``
<script>
export default {
    name: 'LoginPage',
    mounted() {
        this.$axios.$get('/sanctum/csrf-cookie');
    },
    methods:{
        async login() {
            try {
                const formData = new FormData(this.$refs.loginForm);
                await this.$auth.loginWith('laravelSanctum',{ data:formData });

                this.$router.push({
                    path: '/',
                });
            } catch(err) {
                console.log(err);
            }
        }
    }
}
</script>
``

## 9) In header, login/register can be hide/show based on login status
``
<div class="" v-if="$auth.loggedIn == false">
    <NuxtLink  to="/login" class="inline-block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" :class="{ 'bg-white': $route.path == '/login' }">Login</NuxtLink>
    <NuxtLink  to="/register" class="inline-block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" :class="{ 'bg-white': $route.path == '/register' }">Register</NuxtLink>
</div>
<div class="" v-if="$auth.loggedIn == true">
    <NuxtLink  to="/dashboard" class="inline-block py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">Dashboard</NuxtLink>
    <button @click="logout" class="inline-block text-gray-700 hover:text-gray-400">Logout</button>
</div>
``

## 10) Set middleware for various pages
- In nuxt.config.js file, add following auth middleware
``
  router: {
    middleware: ['auth'],
  },
``

- Default auth should be set false. i.e. set it in default layout
``
export default {
    auth: false,
}
``

- Set auth to guest in login/register etc pages
``
export default {
    auth: 'guest',
    name: 'LoginPage',
}
``

- Set auth middleware in dashboard etc pages
``
export default {
    middleware: 'auth',
    name: 'DashboardPage',
}
``
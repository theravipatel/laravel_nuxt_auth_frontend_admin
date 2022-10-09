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
            url: 'http://localhost:8000/',
            endpoints: {
                login: {
                    url: '/login'
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
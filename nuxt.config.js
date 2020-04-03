import purgecss from '@fullhuman/postcss-purgecss'
// import { Configuration } from '@nuxt/types'
import i18n from './nuxt-i18n.config'
const environment = process.env.NODE_ENV || 'development'

/* eslint-disable */
const config = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            prefix: 'og: http://ogp.me/ns#'
        },
        titleTemplate: '%s | 岐阜県 新型コロナウイルス感染症対策サイト',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: '当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、有志が開設したものです。'
            },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: '岐阜県 新型コロナウイルス感染症対策サイト'
            },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://covid19-gifu.netlify.com'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: '岐阜県 新型コロナウイルス感染症対策サイト'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: '当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、有志が開設したものです。'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://covid19-gifu.netlify.com/ogp.png'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['~assets/global.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{
        src: '@/plugins/vue-chart.js',
        ssr: true
    }],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxt/typescript-build',
        '@nuxtjs/google-analytics'
    ],
    typescript: {
        typeCheck: true,
        ignoreNotFoundWarnings: true
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        // ['@nuxtjs/dotenv', { filename: `.env.${environment}` }],
        ['nuxt-i18n', i18n],
        'nuxt-svg-loader',
        'nuxt-purgecss'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {}
    },
    googleAnalytics: {
        id: 'UA-161446240-1'
    },
    // /*
    // ** Build configuration
    // */
    // build: {
    //   /*
    //   ** You can extend webpack config here
    //   */
    //   extend (config, ctx) {
    //   }
    // },
    build: {
        postcss: {
            plugins: [
                purgecss({
                    content: [
                        './pages/**/*.vue',
                        './layouts/**/*.vue',
                        './components/**/*.vue',
                        './node_modules/vuetify/dist/vuetify.js',
                        './node_modules/vue-spinner/src/ScaleLoader.vue'
                    ],
                    whitelist: ['html', 'body', 'nuxt-progress', 'DataCard'],
                    whitelistPatterns: [/(col|row)/]
                })
            ]
        }
    },
    manifest: {
        name: '岐阜県 新型コロナウイルス感染症対策サイト',
        theme_color: '#00a040',
        background_color: '#ffffff',
        display: 'standalone',
        Scope: '/',
        start_url: '/',
        splash_pages: null
    },
    generate: {
        fallback: true,
        routes() {
            const locales = ['ja', 'en', 'ja-basic']
            const pages = [
                '/cards/details-of-confirmed-cases',
                '/cards/number-of-confirmed-cases',
                '/cards/attributes-of-confirmed-cases',
                '/cards/number-of-tested',
                '/cards/number-of-reports-to-covid19-telephone-advisory-center',
                '/cards/number-of-reports-to-covid19-consultation-desk',
                '/cards/predicted-number-of-toei-subway-passengers',
                '/cards/agency'
            ]

            const routes = []
            locales.forEach(locale => {
                pages.forEach(page => {
                    if (locale === 'ja') {
                        routes.push(page)
                        return
                    }
                    const route = `/${locale}${page}`
                    routes.push(route)
                })
            })
            return routes
        }
    },
    // /*
    // ** hot read configuration for docker
    // */
    watchers: {
        webpack: {
            poll: true
        }
    }
}

export default config
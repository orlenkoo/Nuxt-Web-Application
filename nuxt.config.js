export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Fatura Point of Sale System',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon_main.png' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Overpass:100,100i,200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/animate.min.css',
        '~/assets/css/boxicons.min.css',
        '~/assets/css/fontawesome.min.css',
        '~/assets/css/flaticon.css',
        '~/assets/css/style.scss',
        '~/assets/css/responsive.scss',

        // If you want to use RTL, please remove the rtl.css comment
        // '~/assets/css/rtl.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/vue-carousel', ssr: false },
        { src: '~/plugins/vue-backtotop', ssr: false },
        { src: '~/plugins/vue-cool-lightbox', ssr: false },
        { src: '~/plugins/vue-toastification', ssr: false },
    ], 

    
    // Globally configure <nuxt-link> default active class.
    
    router: {
        linkActiveClass: 'active'
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // Strapi config
        '@nuxtjs/strapi'
    ],
    strapi: {
        url: 'http://16.170.109.12',
        entities: [
            { name: 'sitelogo', type: 'single' },
            { name: 'bannerdefaulthomepage', type: 'single' },
            { name: 'videodefaulthomepage', type: 'single' },
            { name: 'getstarted', type: 'single' },
            { name: 'services', type: 'collection' },
            { name: 'servicesocialfaq', type: 'single' },
            { name: 'partnerlogo', type: 'collection' },
            { name: 'ourservices', type: 'single' },
            { name: 'ourservicessectiontitle', type: 'single' },
            { name: 'digitalmarketing', type: 'single' },
            { name: 'designdevelopment', type: 'single' },
            { name: 'socialmediamarketing', type: 'single' },
            { name: 'seoconsultancy', type: 'single' },
            { name: 'funfacts', type: 'collection' },
            { name: 'projectgalleries', type: 'collection' },
            { name: 'ourteam', type: 'single' },
            { name: 'somelovelyfeedback', type: 'single' },
            { name: 'blogs', type: 'collection' },
            { name: 'blogones', type: 'collection' },
            { name: 'planandprices', type: 'collection' },
            { name: 'servicescards', type: 'collection' },
            { name: 'homepreview', type: 'collection' },
        ]
    },
    server: {
        host: '0.0.0.0',
        port: 3000
    },    
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config, ctx) {
            resolve: {
                extensions: ['', '.js', '.jsx', '.vue']
            }
        }
    }
}

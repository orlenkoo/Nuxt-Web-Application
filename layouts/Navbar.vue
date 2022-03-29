<template>
    <div :class="['navbar-area navbar-area-two', {'is-sticky': isSticky}]">
        <div class="bionix-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <NuxtLink v-if="logo !== null" class="navbar-brand" to="/">
                        <img 
                            :src="logo.siteLogo.url" class="black-logo"
                            :alt="logo.logoAltText"
                        >
                    </NuxtLink>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav">
                            <li class="nav-item"><NuxtLink to="/" class="nav-link" exact>Home</NuxtLink></li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Products <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/projects-one" class="nav-link">F & B</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/projects-two" class="nav-link">RETAIL</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item"><NuxtLink to="/features" class="nav-link">Features</NuxtLink></li>
                            <li class="nav-item"><NuxtLink to="/pricing" class="nav-link">Prices</NuxtLink></li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Customer Service <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/shop" class="nav-link">Product Manual</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item"><NuxtLink to="/about-one" class="nav-link">Business Inquiries</NuxtLink></li>
                        </ul>

                        <div class="others-options">
                            <!-- <div class="cart-items">
                                <NuxtLink to="/cart">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span>{{cart.length}}</span>
                                </NuxtLink>
                            </div> -->

                            <!-- <div class="option-item">
                                <div class="search-box" v-on:click="isSearchMethod(isSearch)">
                                    <i class="search-btn flaticon-search"></i>
                                </div>
                            </div> -->

                            <!-- <div class="search-overlay" v-if="isSearch">
                                <div class="d-table">
                                    <div class="d-table-cell">
                                        <div class="search-overlay-layer"></div>
                                        <div class="search-overlay-layer"></div>
                                        <div class="search-overlay-layer"></div>
                                        
                                        <div class="search-overlay-close" v-on:click="isSearchMethod(isSearch)">
                                            <span class="search-overlay-close-line"></span>
                                            <span class="search-overlay-close-line"></span>
                                        </div>

                                        <div class="search-overlay-form">
                                            <form>
                                                <input type="text" class="input-search" placeholder="Search here...">
                                                <button type="submit"><i class="flaticon-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <div class="burger-menu" v-b-modal.modal-1>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <SidebarModal />
                        </div>
                    </b-collapse>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import SidebarModal from '../layouts/SidebarModal'
    export default {
        name: 'Navbar',
        components: {
            SidebarModal
        },
        data(){
            return {
                isSticky: false,
                isSearch: false,
                logo: null
            }
        },

        mounted(){
            const that = this
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 100){
                    that.isSticky = true
                } else {
                    that.isSticky = false
                }
            })
        },

        computed: {
            cart(){
                return this.$store.getters.cart
            }
        },

        methods: {
            isSearchMethod(isSearch){
                return this.isSearch = !isSearch
            }
        },

        created: async function(){
            this.logo = await this.$strapi.find('sitelogo')
            // console.log(this.logo)
        }
    }
</script>
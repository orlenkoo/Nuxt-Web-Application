<template>
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
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
                            <li class="nav-item"><NuxtLink to="/" class="nav-link" exact>مسكن</NuxtLink></li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    منتجات <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/projects-one" class="nav-link">F & B</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/projects-two" class="nav-link">بيع بالتجزئة</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item"><NuxtLink to="/features" class="nav-link">سمات</NuxtLink></li>
                            <li class="nav-item"><NuxtLink to="/pricing" class="nav-link">الأسعار</NuxtLink></li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    خدمة الزبائن <i class="fas fa-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <NuxtLink to="/shop" class="nav-link">دليل استخدام المنتج</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/contact" class="nav-link">اتصل</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item"><NuxtLink to="/about-one" class="nav-link">استفسارات الأعمال</NuxtLink></li>
                        </ul>

                        <div class="others-options">
                            <!-- <div class="cart-items">
                                <NuxtLink to="/cart">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span>{{cart.length}}</span>
                                </NuxtLink>
                            </div> -->

                            <div class="option-item">
                                <div class="search-box">
                                    <NuxtLink to="/" class="nav-link">
                                        English
                                    </NuxtLink>
                                </div>
                            </div>

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
                            <SidebarModalArab />
                        </div>
                    </b-collapse>

                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import SidebarModalArab from '../layouts/SidebarModalArab'
    export default {
        name: 'NavbarStyleTwoArab',
        components: {
            SidebarModalArab
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
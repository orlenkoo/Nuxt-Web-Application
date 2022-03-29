<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <carousel
            :autoplay = "true"
            :loop = "true"
            :paginationEnabled = "true"
            :perPageCustom = "[[0, 1]]"
            :perPage="1"
            :navigationEnabled = "true"
            navigationNextLabel="<i class='flaticon-right-chevron'></i>"
            navigationPrevLabel="<i class='flaticon-left-chevron'></i>"
            class="machine-learning-slider owl-carousel owl-theme"
        >
            <slide 
                v-for="view in preview"
                :key="view.id"
            >
                <div class="machine-learning-banner" v-bind:style="{ backgroundImage: 'url(' + view.img.url + ')' }">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container mt-80">
                                <div class="row align-items-center">
                                    <div class="col-lg-7">
                                        <div class="banner-content">
                                            <h1>{{view.title}}</h1>
                                            <p>{{view.description}}</p>
                                            <div class="banner-btn">
                                                <NuxtLink to="/contact" class="default-btn mr-4">
                                                    Get Started <span></span>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="shape-img2"><img src="~/assets/images/shape/shape-2.svg" alt="image"></div>
                    <div class="shape-img3"><img src="~/assets/images/shape/shape-3.svg" alt="image"></div>
                    <div class="shape-img4"><img src="~/assets/images/shape/shape-4.png" alt="image"></div>
                    <div class="shape-img5"><img src="~/assets/images/shape/shape-5.png" alt="image"></div>
                    <div class="shape-img6"><img src="~/assets/images/shape/shape-6.png" alt="image"></div>
                    <div class="shape-img7"><img src="~/assets/images/shape/shape-7.png" alt="image"></div>
                    <div class="shape-img8"><img src="~/assets/images/shape/shape-8.png" alt="image"></div>
                    <div class="shape-img9"><img src="~/assets/images/shape/shape-9.png" alt="image"></div>
                    <div class="shape-img10"><img src="~/assets/images/shape/shape-10.png" alt="image"></div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import CoolLightBox from 'vue-cool-lightbox'
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
    
    export default {
        name: 'HomePreview',
        components: { CoolLightBox },
        data: function () {
            return {
                items: [
                    {
                        src: 'https://www.youtube.com/watch?v=bk7McNUjWgw',
                    }
                ],
                index: null,
                preview: []
            };
        },
        created: async function(){
            this.preview = await this.$strapi.find('home-previews')
        }
    }
</script>
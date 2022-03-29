<template>
    <div class="featured-services-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our Services</span>
                <h2>Our Featured Services</h2>
                <p>Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.</p>
            </div>

            <div class="row" v-if="services !== []">

                <div
                    class="col-lg-4 col-sm-6 col-md-6"
                    v-for="service in services"
                    :key="service.id"
                >
                    <div class="single-featured-box">
                        <div class="icon">
                            <i :class="service.fontClassName"></i>
                        </div>

                        <h3>{{service.title}}</h3>
                        <p>{{service.shortDesc}}</p>

                        <NuxtLink :to="service.slug" class="default-btn">Read More <span></span></NuxtLink>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurFeaturedServices',
    data(){
        return{
            services: []
        }
    },

    created: async function(){
        this.services = await this.$strapi.find('services', '_limit=3')
        // console.log(this.services)
    }
}
</script>
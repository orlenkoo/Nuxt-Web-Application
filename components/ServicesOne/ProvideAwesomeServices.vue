<template>
    <div class="services-area ptb-100 bg-F4F7FC">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">What We Do</span>
                <h2>Provide Awesome Service With Our Tools</h2>
            </div>
            
            <div v-if="services !== []" class="row">
                <div 
                    class="col-lg-4 col-md-6 col-sm-6"
                    v-for="service in services"
                    :key="service.id"
                >
                    <div class="single-services-box">
                        <div class="icon">
                            <i :class="service.icon"></i>
                        </div>

                        <h3>
                            <NuxtLink :to="service.slug">
                                {{service.title}}
                            </NuxtLink>
                        </h3>

                        <p>{{service.shortDesc}}</p>
                        <NuxtLink 
                            :to="service.slug" 
                            class="read-more-btn"
                        >
                            Read More 
                            <i class="flaticon-right-arrow"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProvideAwesomeServices',
        data(){
            return {
                services: []
            }
        },

        created: async function(){
            this.services = await this.$strapi.find('servicescards')
        }
    }
</script>
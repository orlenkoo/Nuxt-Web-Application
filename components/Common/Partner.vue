<template>
    <div class="partner-area ptb-100 pt-0">
        <div 
            class="container"
            v-if="partner !== []"
        >
            <carousel
                :autoplay = "true"
                :loop = "true"
                :paginationEnabled = "false"
                :perPageCustom = "[[0, 2], [576, 3], [768, 4], [1200, 5]]"
                class="partner-slides owl-carousel owl-theme"
            >

                <slide
                    v-for="logo in partner"
                    :key="logo.id"
                >
                    <div class="single-partner-item">
                        <NuxtLink to="/partner">
                            <img :src="logo.partnerlogos.url" alt="image">
                            <img :src="logo.partnerlogos.url" alt="image">
                        </NuxtLink>
                    </div>
                </slide>

            </carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'partner',
    data(){
        return{
            partner: []
        }
    },

    created: async function(){
        this.partner = await this.$strapi.find('partnerlogos')
    }
}
</script>
<template>
    <div class="partner-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Clients</span>
                <h2>Our Loving Clients</h2>
                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>
            </div>

            <div class="row align-items-center">
                <div 
                    class="single-partner-item"
                    v-for="partner in partner_logos"
                    :key="partner.id"
                >
                    <NuxtLink to="/partner">
                        <img :src="partner.partnerlogos.url" alt="image">
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="shape-img2"><img src="~/assets/images/shape/shape-2.svg" alt="image"></div>
        <div class="shape-img3"><img src="~/assets/images/shape/shape-3.svg" alt="image"></div>
        <div class="shape-img4"><img src="~/assets/images/shape/shape-4.png" alt="image"></div>
        <div class="shape-img5"><img src="~/assets/images/shape/shape-5.png" alt="image"></div>
    </div>
</template>

<script>
    export default {
        name: 'OurLovingClients',
        data: function () {
            return {
                partner_logos: []
            };
        },
        created: async function(){
            this.partner_logos = await this.$strapi.find('partnerlogos')
        }
    }
</script>
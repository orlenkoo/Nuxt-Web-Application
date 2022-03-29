<template>
    <div class="services-details-area ptb-100">
        <div class="container">
            <div 
                class="services-details-overview"
            >
                <div class="services-details-desc" >
                    <h3>
                        {{dtails[0].title}}
                    </h3>
                    <span v-html="dtails[0].longDesc"></span>
                </div>

                <div 
                    class="services-details-image" 
                    v-if="dtails[0].detailsImg.url" 
                >
                    <img 
                        :src="dtails[0].detailsImg.url" 
                        alt="image"
                    >
                </div>
            </div>
            <ServicesAccordion/>
        </div>
    </div>
</template>

<script>
import ServicesAccordion from '../ServicesDetails/ServicesAccordion'

    export default {
        name: 'ServicesDetailsContent',
        props: ['detailsCnt'],
        components: {
            ServicesAccordion
        },
        data: function () {
            return {
                dtails: this.detailsCnt,
            }
        },
    }
</script>
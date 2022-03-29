<template>
    <div v-if="content !== null" class="feedback-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">{{content.helpText}}</span>
                <h2>{{content.heading}}</h2>
            </div>
        </div>

        <carousel
            :autoplay = "true"
            :loop = "true"
            :paginationEnabled = "true"
            :perPageCustom = "[[0, 1], [576, 2], [768, 2], [1200, 3]]"
            class="feedback-slides owl-carousel owl-theme"
        >
            <slide
                v-for="single in content.singleItem"
                :key="single.id"
            >
                <div class="single-feedback-item">
                    <p>
                        {{single.shortText}}
                    </p>

                    <div class="client-info">
                        <img 
                            :src="single.img.url" 
                            alt="image"
                        >

                        <h3>{{single.name}}</h3>
                        <span>{{single.position}}</span>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
    export default {
        name: 'SomeLovelyFeedback',

        data() {
            return {
                content: null
            }
        },

        created: async function(){
            this.content = await this.$strapi.find('somelovelyfeedback')
        }
    }
</script>
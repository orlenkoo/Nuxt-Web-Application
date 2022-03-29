<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="solution-area ptb-100 extra-pb">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="solution-content">
                            <span v-if="contact !== null" class="sub-title">
                                {{contact.helpText}}
                            </span>
                            <h2 v-if="contact !== null">
                                {{contact.heading}}
                            </h2>
                            <p v-if="contact !== null">
                                {{contact.shortDesc}}
                            </p>

                            <NuxtLink 
                                v-if="contact !== null" 
                                :to="contact.btnLink" 
                                class="default-btn"
                            >
                                {{contact.btnText}} <span></span>
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="solution-video" v-if="contact !== null">
                            <div 
                                class="video-btn popup-youtube"
                                v-for="(image, imageIndex) in items"
                                :key="imageIndex"
                                @click="index = imageIndex"
                                style="cursor: pointer"
                            >
                                <i class="flaticon-play-button"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'GetBetterSolution',
    components: { CoolLightBox },
    data: function () {
        return {
            contact: null,
            items: [],
            index: null,
        };
    },

    created: async function(){
        let obj = {}
        this.contact = await this.$strapi.find('videodefaulthomepage')
        this.items.push({"src": this.contact.videoLink})
    }
}
</script>
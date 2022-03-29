<template>
    <div class="overview-box">
        <div class="overview-image">
            <div class="image">
                <img src="~/assets/images/why-choose-img-1.png" alt="image">
            </div>
        </div>
        
        <div class="overview-content">
            <div
                v-if="content !== null" 
                class="content right-content"
            >
                <span class="sub-title">
                    {{content.helpText}}
                </span>
                <h2>
                    {{content.heading}}
                </h2>
                <p>
                    {{content.shortDesc}}
                </p>

                <ul class="features-list">
                    <li
                        v-for="features in content.features" 
                        :key="features.featuresText"
                    >
                        <span>
                            <i :class="features.icon"></i> 
                            {{features.featuresText}}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverviewBoxOne',

    data() {
        return {
            content: null
        }
    },

    created: async function(){
        this.content = await this.$strapi.find('designdevelopment')
        // console.log(this.content)
    }
}
</script>
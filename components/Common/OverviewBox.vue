<template>
    <div class="overview-box">
        <div class="overview-content">
            <div v-if="content !== null"  class="content">
                <span 
                    class="sub-title"
                >
                    {{content.helpText}}
                </span>

                <h2>
                    {{content.heading}}
                </h2>

                <span v-html="content.longDesc"></span>
            </div>
        </div>

        <div class="overview-image">
            <div class="image">
                <img 
                    v-if="content !== null" 
                    :src="content.img.url" 
                    alt="image"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverviewBox',
    data() {
        return {
            content: null
        }
    },

    created: async function(){
        this.content = await this.$strapi.find('digitalmarketing')
        //console.log(this.content)
    }
}
</script>
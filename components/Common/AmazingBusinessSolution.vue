<template>
    <div class="overview-area ptb-100 pt-0">
        <div class="container">
            <div class="section-title">
                <span 
                    v-if="section !== null" 
                    class="sub-title"
                >
                {{section.helpText}}
                </span>
                <h2 v-if="section !== null">
                    {{section.heading}}
                </h2>
                <p v-if="section !== null">
                   {{section.shortDesc}}
                </p>
            </div>

            <OverviewBox />
            <OverviewBoxOne />
            <OverviewBoxTwo />
            <OverviewBoxThree />
        </div>
    </div>
</template>

<script>
import OverviewBox from '../Common/OverviewBox'
import OverviewBoxOne from '../Common/OverviewBoxOne'
import OverviewBoxTwo from '../Common/OverviewBoxTwo'
import OverviewBoxThree from '../Common/OverviewBoxThree'

    export default {
        name: 'AmazingBusinessSolution',

        components: {
            OverviewBox,
            OverviewBoxOne,
            OverviewBoxTwo,
            OverviewBoxThree,
        },

        data(){
            return {
                section: null
            }
        },

        created: async function(){
            this.section = await this.$strapi.find('ourservicessectiontitle')
            // console.log(this.section)
        }
    }
</script>
<template>
    <div>
        <Navbar />
        <PageTitle 
            v-if="details !== null" 
            :pageTitle="details[0].title" 
        />

        <div v-if="details !== null">
            <ServicesDetailsContent 
                v-bind:detailsCnt="details"
            />
        </div>
    </div>
</template>

<script>
import Navbar from '../../layouts/Navbar'
import PageTitle from '../../components/Common/PageTitle'
import ServicesDetailsContent from '../../components/ServicesDetails/ServicesDetailsContent'

export default {
    components: { 
        Navbar,
        PageTitle,
        ServicesDetailsContent,
    },

    data(){
        return{
            details: null
        }
    },

    created: async function(){
        const { slug } = this.$route.params
        this.details = await this.$strapi.find('services', `slug=${slug}`)
        // console.log(this.details[0])
    }
}
</script>
<template>
    <!-- 
        1. props
        2. inject/provid
        3. this.$refs
        4. vuex
        5. vue root/prototype
    -->
    <div>
        <Navbar />
        <PageTitle pageTitle="About Us" />
        <WeAreDynamic />
        <AboutFunFacts />
        <GetBetterSolution />
        <SomeLovelyFeedback />
        <OurExpertTeam />
        <GetOnlyNewUpdatefrom />
        <WePartnerWithCompaniessizes />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import WeAreDynamic from '../components/AboutTwo/WeAreDynamic'
    import AboutFunFacts from '../components/AboutTwo/AboutFunFacts'
    import GetBetterSolution from '../components/Common/GetBetterSolution'
    import SomeLovelyFeedback from '../components/Common/SomeLovelyFeedback'
    import OurExpertTeam from '../components/Common/OurExpertTeam'
    import GetOnlyNewUpdatefrom from '../components/AboutTwo/GetOnlyNewUpdateFrom'
    import WePartnerWithCompaniessizes from '../components/AboutTwo/WePartnerWithCompaniessizes'

    export default {
        components: { 
            Navbar,
            PageTitle,
            WeAreDynamic,
            AboutFunFacts,
            GetBetterSolution,
            SomeLovelyFeedback,
            OurExpertTeam,
            GetOnlyNewUpdatefrom,
            WePartnerWithCompaniessizes,
        }
    }
</script>
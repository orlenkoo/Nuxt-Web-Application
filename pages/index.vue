<template>
    <div>
        <NavbarStyleTwo />
        <HomePreview />
        <FunFacts />
        <SomeLovelyFeedback />
        <OurLovingClients />
        <RecentStory />
        <FrequentlyAskedQuestions />
        <MeetOurAwesomeTeam />
    </div>
</template>

<script>
    import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
    import HomePreview from '../components/Common/HomePreview'
    import FunFacts from '../components/Common/FunFacts'
    import SomeLovelyFeedback from '../components/Common/SomeLovelyFeedback'
    import MeetOurAwesomeTeam from '../components/Common/MeetOurAwesomeTeam.vue'
    import FrequentlyAskedQuestions from '../components/Common/FrequentlyAskedQuestions'
    import OurLovingClients from '../components/Common/OurLovingClients'
    import RecentStory from '../components/Common/RecentStory'

    export default {
        components: { 
            NavbarStyleTwo,
            HomePreview,
            FunFacts,
            SomeLovelyFeedback,
            FrequentlyAskedQuestions,
            OurLovingClients,
            RecentStory,
            MeetOurAwesomeTeam,
        }
    }
</script>
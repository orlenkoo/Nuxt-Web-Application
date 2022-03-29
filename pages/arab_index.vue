<template>
    <div>
        <NavbarStyleTwoArab />
        <HomePreviewArab />
        <FunFactsaArab />
        <SomeLovelyFeedback />
        <OurLovingClients />
        <RecentStory />
        <FrequentlyAskedQuestions />
        <MeetOurAwesomeTeam />
    </div>
</template>

<script>
    import NavbarStyleTwoArab from '../layouts/NavbarStyleTwoArab'
    import HomePreviewArab from '../components/Common/Arab/HomePreviewArab'
    import FunFactsaArab from '../components/Common/Arab/FunFactsArab.vue'
    import SomeLovelyFeedback from '../components/Common/SomeLovelyFeedback'
    import MeetOurAwesomeTeam from '../components/Common/MeetOurAwesomeTeam.vue'
    import FrequentlyAskedQuestions from '../components/Common/FrequentlyAskedQuestions'
    import OurLovingClients from '../components/Common/OurLovingClients'
    import RecentStory from '../components/Common/RecentStory'

    export default {
        components: { 
            NavbarStyleTwoArab,
            HomePreviewArab,
            FunFactsaArab,
            SomeLovelyFeedback,
            FrequentlyAskedQuestions,
            OurLovingClients,
            RecentStory,
            MeetOurAwesomeTeam,
        }
    }
</script>
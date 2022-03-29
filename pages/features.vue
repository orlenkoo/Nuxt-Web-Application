<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Features" />
        <AboutText />
        <CreativeSolutions />
        <TheKeyToYourMotivationsuccess />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import CreativeSolutions from '../components/Features/CreativeSolutions'
    import TheKeyToYourMotivationsuccess from '../components/ServicesOne/TheKeyToYourMotivationSuccess'
    import AboutText from '../components/AboutOne/AboutText'
    export default {
        components: { 
            Navbar,
            PageTitle,
            AboutText,
            CreativeSolutions,
            TheKeyToYourMotivationsuccess
        }
    }
</script>
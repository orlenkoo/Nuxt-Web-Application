<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Pricing" />
        <ChooseYourBestPlan />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ChooseYourBestPlan from '../components/Common/ChooseYourBestPlan'

    export default {
        components: { 
            Navbar,
            PageTitle,
            ChooseYourBestPlan,
        }
    }
</script>
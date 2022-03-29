<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Services" />
        <WeAlwaysTryToUnderstand />
        <ProvideAwesomeServices />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ProvideAwesomeServices from '../components/ServicesOne/ProvideAwesomeServices'
    import WeAlwaysTryToUnderstand from '../components/Common/WeAlwaysTryToUnderstand'
    export default {
        components: { 
            Navbar,
            PageTitle,
            WeAlwaysTryToUnderstand,
            ProvideAwesomeServices,
        }
    }
</script>
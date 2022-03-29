<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Partner" />
        <Partner />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import Partner from '../components/Common/Partner'

    export default {
        components: { 
            Navbar,
            PageTitle,
            Partner,
        }
    }
</script>
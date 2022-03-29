<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="F&B" />
        <ProjectsContent />
    </div>
</template>

<script>
    import Navbar from '../layouts/Navbar'
    import PageTitle from '../components/Common/PageTitle'
    import ProjectsContent from '../components/ProjectsOne/ProjectsContent'

    export default {
        components: { 
            Navbar,
            PageTitle,
            ProjectsContent,
        }
    }
</script>
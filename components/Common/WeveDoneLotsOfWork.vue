<template>
    <div class="projects-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Project Gallery</span>
                <h2>We’ve Done Lot’s Of Work, Let’s Check Some From Here</h2>
            </div>
        </div>

        <div class="container-fluid">
            <carousel
                :autoplay = "true"
                :loop = "true"
                :paginationEnabled = "true"
                :perPageCustom = "[[0, 1], [576, 2], [768, 2], [1200, 3]]"
                class="projects-slides owl-carousel owl-theme"
            >
                <slide
                    v-for="project in projects"
                    :key="project.id"
                >
                    <div class="single-projects-box">
                        <img 
                            :src="project.img.url" 
                            alt="image"
                        >

                        <div class="projects-content">
                            <h3>
                                <NuxtLink to="/projects-details">
                                    {{project.title}}
                                </NuxtLink>
                            </h3>
                            <span class="category">
                                {{project.category}}
                            </span>
                        </div>

                        <div class="plus-icon">
                            <NuxtLink to="/projects-details" class="popup-btn">
                                <span></span>
                            </NuxtLink>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeveDoneLotsOfWork',

        data() {
            return {
                projects: []
            }
        },

        created: async function(){
            this.projects = await this.$strapi.find('projectgalleries')
            // console.log(this.projects)
        }
    }
</script>
<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>{{histories.title}}</h2>
                <p>{{histories.shortdesc}}</p>
            </div>

            <div class="row">
                <div 
                    v-for="story in histories.item"
                    :key="story.id"
                    class="col-lg-4 col-md-6"
                >
                    <div class="single-blog-post">
                        <div class="post-image">
                            <NuxtLink to="/blog-details"><img :src="story.img.url"  alt="image"></NuxtLink>
                        </div>

                        <div class="post-content">
                            <div class="post-meta">
                                <ul>
                                    <li>By: <NuxtLink to="/blog-details">{{story.author}}</NuxtLink></li>
                                    <li>{{story.date}}</li>
                                </ul>
                            </div>
                            
                            <h3><NuxtLink to="/blog-details">{{story.title}}</NuxtLink></h3>
                            <p>{{story.description}}</p>
                            <NuxtLink to="/blog-details" class="read-more-btn">Read More <i class="flaticon-right-arrow"></i></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shape-img2"><img src="~/assets/images/shape/shape-2.svg" alt="image"></div>
        <div class="shape-img3"><img src="~/assets/images/shape/shape-3.svg" alt="image"></div>
    </div>
</template>

<script>
    export default {
        name: 'RecentStory',
        data: function () {
            return {
                histories: []
            };
        },
        created: async function(){
            this.histories = await this.$strapi.find('recent-story')
        }
    }
</script>
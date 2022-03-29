<template>
    <div class="blog-area ptb-100 bg-F4F7FC">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Latest News</span>
                <h2>Our Latest Articles And News For Our Clients</h2>
            </div>

            <BlogList 
                v-if="posts !== []" 
                :blogPosts="posts" 
                :cardStyle="cardClass"
            />
        </div>

        <div class="shape-img2">
            <img src="~/assets/images/shape/shape-2.svg" alt="image">
        </div>

        <div class="shape-img3">
            <img src="~/assets/images/shape/shape-3.svg" alt="image">
        </div>
    </div>
</template>

<script>
import BlogList from '../BlogOne/BlogList'
export default {
    name: 'OurLatestNews',

    components: {
        BlogList
    },

    data(){
        return{
            posts: [],
            cardClass: "col-lg-4 col-md-6"
        }
    },

    created: async function(){
        this.posts = await this.$strapi.find('blogs', '_limit=3')
        // console.log(this.posts)
    }
}
</script>
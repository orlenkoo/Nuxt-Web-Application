<template>
    <div class="subscribe-area bg-F4F7FC">
        <div class="container-fluid p-0">
            <div class="subscribe-inner-area">
                <div class="subscribe-content">
                    <span 
                        v-if="newsletter !== null" 
                        class="sub-title"
                    >
                        {{newsletter.helpText}}
                    </span>
                    <h2 
                        v-if="newsletter !== null"
                    >
                        {{newsletter.heading}}
                    </h2>

                    <form class="newsletter-form" data-toggle="validator">
                        <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL">

                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="shape-img2"><img src="~/assets/images/shape/shape-2.svg" alt="image"></div>
        <div class="shape-img3"><img src="~/assets/images/shape/shape-3.svg" alt="image"></div>
        <div class="shape-img4"><img src="~/assets/images/shape/shape-4.png" alt="image"></div>
        <div class="shape-img5"><img src="~/assets/images/shape/shape-5.png" alt="image"></div>
        <div class="shape-img6"><img src="~/assets/images/shape/shape-6.png" alt="image"></div>
    </div>
</template>

<script>
    export default {
        name: 'GetOnlyNewUpdate',

        data(){
            return {
                newsletter: null
            }
        },

        created: async function(){
            this.newsletter = await this.$strapi.find('getstarted')
            // console.log(this.newsletter)
        }
    }
</script>
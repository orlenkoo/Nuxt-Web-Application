<template>
    <div class="team-area ptb-100 pt-0">
        <div class="container" v-if="team !== null">
            <div class="section-title">
                <span class="sub-title">
                    {{team.helpText}}
                </span>
                <h2>
                    {{team.header}}
                </h2>
            </div>

            <div class="row">
                <div
                    v-for="mamber in team.mambers"
                    :key="mamber.id"
                    class="col-lg-4 col-md-6 col-sm-6"
                >
                    <div class="single-team-box">
                        <div class="image">
                            <img 
                                :src="mamber.teamImg.url" 
                                alt="team"
                            >

                            <div class="social">
                                <a :href="mamber.facebook">
                                    <i :class="mamber.facebookIcon"></i>
                                </a>
                                <a :href="mamber.twitter">
                                    <i :class="mamber.twitterIcon"></i>
                                </a>
                                <a :href="mamber.linkedin">
                                    <i :class="mamber.instagramIcon"></i>
                                </a>
                            </div>
                        </div>

                        <div class="content">
                            <h3>{{mamber.name}}</h3>
                            <span>{{mamber.position}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shape-img2"><img src="~/assets/images/shape/shape-2.svg" alt="image"></div>
        <div class="shape-img3"><img src="~/assets/images/shape/shape-3.svg" alt="image"></div>
        <div class="shape-img4"><img src="~/assets/images/shape/shape-4.png" alt="image"></div>
        <div class="shape-img5"><img src="~/assets/images/shape/shape-5.png" alt="image"></div>
        <div class="shape-img6"><img src="~/assets/images/shape/shape-6.png" alt="image"></div>
        <div class="shape-img9"><img src="~/assets/images/shape/shape-9.png" alt="image"></div>
        <div class="shape-img10"><img src="~/assets/images/shape/shape-10.png" alt="image"></div>
    </div>
</template>

<script>
export default {
    name: 'MeetOurAwesomeTeam',
    data(){
        return{
            team: null
        }
    },

    created: async function(){
        this.team = await this.$strapi.find('ourteam')
    }
}
</script>
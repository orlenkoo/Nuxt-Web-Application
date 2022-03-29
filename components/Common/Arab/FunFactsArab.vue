<template>
    <div class="fun-facts-area ptb-100">
        <div class="container">
            <div class="row">
                <div 
                    v-for="funfact in funfacts" 
                    :key="funfact.id"
                    class="col-lg-3 col-sm-6"
                >
                    <div 
                        class="single-fun-facts"
                    >
                        <h3>
                            {{funfact.projectCounte}}

                            <span class="sign-icon">
                                {{funfact.sign}}
                            </span>
                        </h3>
                        
                        <p>
                            {{funfact.title}}
                        </p>

                        <div class="back-text">
                            {{funfact.background}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FunFactsArab',
    data() {
        return {
            funfacts: []
        }
    },

    created: async function(){
        this.funfacts = await this.$strapi.find('funfacts?_locale=uz-Arab')
        // console.log(this.funfacts)
    }
}
</script>
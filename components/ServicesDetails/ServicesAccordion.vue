<template>
    <div class="services-details-overview" v-if="content !== null">
        <div class="services-details-image wow fadeInUp">
            <img 
                :src="content.img.url" 
                alt="image"
            >
        </div>
        
        <div class="services-details-desc">
            <h3>{{content.heading}}</h3>
            <p>{{content.shortDesc}}</p>
            <div class="services-details-accordion">
                <ul 
                    class="accordion" 
                    role="tablist"
                >

                    <b-card 
                        no-body 
                        class="accordion-item"
                        v-for="accordion in content.accordion"
                        :key="accordion.title"
                    >
                        <b-card-header 
                            header-tag="header" 
                            class="p-1" 
                            role="tab"
                        >
                            <b-button 
                                class="accordion-title" 
                                block 
                                v-b-toggle="`accordion-${accordion.id}`"
                                variant="info"
                            >
                                <i :class="accordion.icon"></i>
                                {{accordion.title}}<span></span>
                            </b-button>
                        </b-card-header>
                        <b-collapse 
                            :id="`accordion-${accordion.id}`"
                            visible 
                            accordion="my-accordion" 
                            role="tabpanel"
                        >
                            <b-card-body>
                                <b-card-text>
                                    <p>{{accordion.desc}}</p>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesAccordion',
    data(){
        return{
            content: null
        }
    },
    created: async function(){
        this.content = await this.$strapi.find('servicesocialfaq')
        // console.log(this.content)
    }
}
</script>
<template>
    <div class="pricing-area ptb-100 pt-0">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Pricing Plan</span>
                <h2>Choose Your Best Plan</h2>
                <p>Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.</p>
            </div>

            <div class="row" v-if="plans !== []">

                <div 
                    class="col-lg-4 col-md-6 col-sm-6"
                    v-for="plan in plans"
                    :key="plan.id"
                >
                    <div 
                        :class="`single-pricing-box ${plan.header === 'Starter' ? 'orange' : plan.header === 'Extended' ? 'red' : ''}`"
                    >
                        <div class="pricing-header">
                            <h3>{{plan.header}}</h3>
                        </div>

                        <div class="price">
                            <sub>{{plan.currency}}</sub>
                            {{plan.price}}
                            <sub>{{plan.period}}</sub>
                        </div>

                        <ul class="price-features-list">
                            <li
                                v-for="option in plan.options"
                                :key="option.id"
                            >
                                <i :class="option.iconClass"></i> {{option.optionName}}
                            </li>
                        </ul>

                        <NuxtLink :to="plan.btnLink" class="get-started-btn">{{plan.btnText}}</NuxtLink>
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
        name: 'ChooseYourBestPlan',
        data(){
            return{
                plans: []
            }
        },

        created: async function(){
            this.plans = await this.$strapi.find('planandprices', '_limit=3')
        }
    }
</script>
<template>
   <div class="team-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our Team</span>
                <h2>Our Expert Team</h2>
            </div>

            <carousel
                :autoplay = "true"
                :loop = "true"
                :paginationEnabled = "false"
                :perPageCustom = "[[0, 1], [576, 2], [768, 3]]"
                :perPage="1"
                :navigationEnabled = "true"
                navigationNextLabel="<i class='flaticon-right-chevron'></i>"
                navigationPrevLabel="<i class='flaticon-left-chevron'></i>"
                class="team-slider owl-carousel owl-theme"
            >
                <slide>
                    <div class="single-team-box">
                        <div class="image">
                            <img src="~/assets/images/team/team-10.jpg" alt="team">

                            <div class="social">
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        <div class="content">
                            <h3>John Smith</h3>
                            <span>CEO & Founder</span>
                        </div>
                    </div>
                </slide>
        
                <slide>
                    <div class="single-team-box">
                        <div class="image">
                            <img src="~/assets/images/team/team-11.jpg" alt="team">

                            <div class="social">
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        <div class="content">
                            <h3>Lucy Eva</h3>
                            <span>Backend Team Leader</span>
                        </div>
                    </div>
                </slide>
        
                <slide>
                    <div class="single-team-box">
                        <div class="image">
                            <img src="~/assets/images/team/team-12.jpg" alt="team">

                            <div class="social">
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        <div class="content">
                            <h3>Steven Smith</h3>
                            <span>Frontend Team Leader</span>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-team-box">
                        <div class="image">
                            <img src="~/assets/images/team/team-13.jpg" alt="team">

                            <div class="social">
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        <div class="content">
                            <h3>Steven Smith</h3>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-team-box">
                        <div class="image">
                            <img src="~/assets/images/team/team-14.jpg" alt="team">

                            <div class="social">
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        <div class="content">
                            <h3>Williams Smith</h3>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </slide>
            </carousel>
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
        name: 'OurExpertTeam'
    }
</script>
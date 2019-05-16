<template>
    <div class="footer">
        <div class="d-flex flex-sm-column flex-md-row">
            <div class="col alsdi-logo-section">
                <div class="text-center">
                    <router-link to="/">
                        <img src="@/assets/logo.png" class="footer-logo" alt="شعار الصدي" />
                    </router-link>
                </div>
            </div>
            <div class="col alsdi-sitemap-section">
                <h3 class="mb-3">الصدي للاستشارات الهندسية</h3>
                <ul class="list-unstyled">
                    <li class="alsdi-footer-link">
                        <router-link to="/">الرئيسية</router-link>
                    </li>
                    <li class="alsdi-footer-link">
                        <router-link to="/about-us">من نحن</router-link>
                    </li>
                    <li class="alsdi-footer-link">
                         <router-link to="/contact-us">تواصل معنا</router-link>
                    </li>
                </ul>
            </div>
            <div class="col alsdi-contact-section">
                <h3 class="mb-3">تواصل معنا</h3>
                <div class="alsdi-social-media">
                    <span class="alsdi-icon"><i class="fab fa-facebook fa-3x"></i></span>
                    <span class="alsdi-icon"><i class="fab fa-twitter fa-3x"></i></span>
                    <span class="alsdi-icon"><i class="fab fa-snapchat fa-3x"></i></span>
                    <span class="alsdi-icon"><i class="fab fa-whatsapp fa-3x"></i></span>
                    <span class="alsdi-icon"><i class="fab fa-instagram fa-3x"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
.footer {
    color: #C7944A;
    text-align: right;
    background-color: #2f3640;
    padding: 20px;
    margin-top: 30px;
    .alsdi-logo-section {
        padding: 10px;
        max-width: 33.33333%;
        // Small devices (landscape phones, 576px and up)
        @media (min-width: 320px) { 
            max-width: 100%;
        }
        min-width: 320px;

        .footer-logo {
            width: 200px;
            height: 200px;

        }
    }
    .alsdi-sitemap-section {
        padding: 10px 20px;
        border-right: 1px solid #FFF;
        border-left: 1px solid #FFF;
        max-width: 33.33333%;
        // Small devices (landscape phones, 576px and up)
        @media (max-width: 768px) { 
            max-width: 100%;
            border-right: none;
            border-left: none;
            border-top: 1px solid #FFF;
            border-bottom: 1px solid #FFF;
            margin: 10px 0;
            
        }
        min-width: 320px;

        .alsdi-footer-link {
            font-size: 18px;
            margin: 10px;
            a {
                color: #C7944A;
                text-decoration: none;
                transition: margin .3s ease-in-out;
                &:hover {
                    margin-right: 10px;
                    color: #FFF;
                }
            }

            
        }

    }
    .alsdi-contact-section {
        padding: 10px;
        min-width: 320px;
        max-width: 33.33333%;
        // Small devices (landscape phones, 576px and up)
        @media (min-width: 320px) { 
            max-width: 100%;
        }
        .alsdi-icon {
            padding: 10px;
            cursor: pointer;

            &:hover {
                i {
                    color: #FFF;
                    transform: scale(1.2);
                    transition: all .3s ease-in-out;
                }
               
            }
        }
    }
}
</style>


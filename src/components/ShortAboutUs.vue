<template>
    <div class="alsdi-short-about-us" :style="{backgroundImage: `url('${require('@/assets/bg-alsdi.jpeg')}')` }">
        <div class="container-fluid">
            <div class="d-flex flex-wrap alsdi-short-wrapper">
                <div class="col-md-3 col-sm-12">
                    <div class="short-about-us-image" :style="{backgroundImage: `url('${require('@/assets/alsdi-logo.png')}')` }"></div>
                </div>
                <div class="col-md-9 col-sm-12">
                    <h1>هذا النص فقط ليحتوي المكان</h1>
                    <p>عل أسيا أمدها مكن. ما بين سياسة الإطلاق. أسر شاسعة جديداً قد, وسفن الشرقي اقتصادية وتم تم, بسبب وبحلول الخاطفة انه عل. أكثر للصين ديسمبر فعل عن, عل به، بتطويق بأضرار. التكاليف الإنذار، و عرض, وتم لم جدول مليون. الصفحات العالمية لبولندا، بل دنو.</p>
                    <router-link to="/about-us">
                        <button class="alsdi-button">اقرأ المزيد</button>
                    </router-link>
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
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.alsdi-short-about-us {
    text-align: right;
    padding: 10px 0;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    .alsdi-short-wrapper {
        border: 1px solid $alsdi-gold;
        background-color: rgb(0, 0, 0, .6);
        @media only screen and (min-width: 768px) {
            padding: 50px;
        }
        

        h1 {
            color: $alsdi-gold;
        }

        p {
            color: $alsdi-white;
        }

        .short-about-us-image {
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
            width: 250px;
            height: 250px;
        }

    }
}
</style>


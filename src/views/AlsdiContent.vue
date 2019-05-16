<template>
    <div class="alsdi-content">
        <div class="container-fluid">
            <div class="d-flex flex-wrap">
            <div class="col block-wrapper block-image" data-aos="flip-up" :data-aos-delay="(index * 1) * 100" v-for="(data, index) in dataRow" :key="index" :style="data.bgImage ? {backgroundImage: `url('${data.image_url}')`, backgroundColor: data.bgColor } : {backgroundColor: data.bgColor} ">
                <BlockWithBackground :data="data"></BlockWithBackground>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

import BlockWithBackground from '@/components/BlockWithBackground.vue'

export default {
    name: "alsdi-content",
    components: {
    BlockWithBackground
  },
  data() {
      return {
          dataRow: [  
            {  
                title:"lorem impsum",
                text:"laudantium quaerat, laboriosam necessitatibus veritatis saepe iure non molestiae debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem architecto totam ut sunt. Tempora labore explicabo,",
                bgImage: true,
                image_url: require('../assets/alsdi-logo.png'),
                bgColor: "#000"
            },
            {  
                title:"الصدي للاستشارات الهندسية",
                text:"مكتبنا يهتم بتصميماتكم الداخلية والخارجية ويقدم لكم الافضل",
                color: "#AF9046",
                bgColor: "#072C53"
            },
            {  
                title:"",
                text:"",
                bgImage: true,
                image_url: require('../assets/design01.jpg'),
                bgColor: "#95a5a6"
            },
            {  
                title:"HHgst",
                text:"laudantium quaerat, laborie debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem",
                bgImage: true,
                image_url: require('../assets/img01.jpg'),
                bgColor: "#000"
            },
            {  
                title:"GHGTda",
                text:"laudantium quaerat, autem",
                bgColor: "#c0392b"
            },
            {  
                title:"JHJOU",
                text:"laudantium quaerat, laboriosam necessitatibus veritatis saepe iure non molestiae debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem",
                bgImage: true,
                image_url: require('../assets/img02.jpg'),
                bgColor: "#000"
            },
            {  
                title:"GHGTda",
                text:"laudantium quaerat, autem",
                bgColor: "#2c3e50"
            },
            {  
                title:"FERGV",
                text:"laudantium quaeratn molestiae debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem",
                bgImage: true,
                image_url: require('../assets/img03.jpg'),
                bgColor: "#000"
            },
            {  
                title:"FERGV",
                text:"laudantium quaeratn molestiae debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem",
                bgImage: true,
                image_url: require('../assets/img05.jpg'),
                bgColor: "#000"
            },
            {  
                title:"FERGV",
                text:"laudantium quaeratn molestiae debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem",
                bgImage: true,
                image_url: require('../assets/img06.jpg'),
                bgColor: "#000"
            },
            {  
                title:"FERGV",
                text:"laudantium quaeratn molestiae debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem",
                bgImage: true,
                image_url: require('../assets/img07.jpg'),
                bgColor: "#000"
            }
        ],
            colors: [
                "#8c7ae6",
                "#c23616",
                "#273c75",
                "#00a8ff"
            ] 
    }      
  },
 
}
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css");
    .alsdi-content {
        padding-top: 135px;

        // Small devices (landscape phones, 576px and up)
        @media (min-width: 320px) { 
            .col {
                min-width: 100%;
                max-width: 100%;
                min-height: 99vw;
                max-height: 99vw;
            }
         }

        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) { 
            .col {
                min-width: 50%;
                max-width: 50%;
                min-height: 49vw;
                max-height: 49vw;
            }
         }

        // Large devices (desktops, 992px and up)
        @media (min-width: 992px) { 
             .col {
                min-width: 25%;
                max-width: 25%;
                min-height: 24vw;
                max-height: 24vw;
            }
         }
        
        .block-wrapper {
            position: relative;    
        }

        .block-image {
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
</style>
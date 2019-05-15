<template>
    <div class="alsdi-content">
        <div class="container-fluid">
            <div class="d-flex flex-wrap">
            <div class="col col-md-6 p-0 block-wrapper" v-for="(data, index) in dataRow" :key="index" :style="{backgroundColor: randomColor()}">
                <BlockWithBackground :bgColor="randomColor()" :data="data"></BlockWithBackground>
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
                text:"laudantium quaerat, laboriosam necessitatibus veritatis saepe iure non molestiae debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem architecto totam ut sunt. Tempora labore explicabo,"
            },
            {  
                title:"TFttcs svv",
                text:"laudantium quaerat, laboriosam necessitatibus veritatis saepe iure non molestiae debitis, repellat porro"
            },
            {  
                title:"Gghsgyv",
                text:"laudantium qn molestiae debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem architecto totam ut sunt. Tempora labore explicabo,"
            },
            {  
                title:"HHgst",
                text:"laudantium quaerat, laborie debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem"
            },
            {  
                title:"GHGTda",
                text:"laudantium quaerat, autem"
            },
            {  
                title:"JHJOU",
                text:"laudantium quaerat, laboriosam necessitatibus veritatis saepe iure non molestiae debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem"
            },
            {  
                title:"FERGV",
                text:"laudantium quaeratn molestiae debitis, repellat porro excepturi eos voluptatum impedit amet neque, est autem"
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
  methods: {
      randomColor() {
        let num = Math.floor(Math.random() * this.colors.length);
        return this.colors[num]
      }
  }
}
</script>

<style lang="scss" scoped>
    .alsdi-content {
        padding-top: 110px;

        .col {
            min-height: 49vw;
        }
        
        .block-wrapper {
            position: relative;

            
        }
    }
</style>
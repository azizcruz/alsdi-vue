<template>
  <div class="home">
    <Content></Content>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '@/views/AlsdiContent.vue'

export default {
  name: 'home',
  components: {
    Content
  }
}
</script>

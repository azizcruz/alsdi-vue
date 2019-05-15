<template>
  <div class="home">
    <AlsdiHeader></AlsdiHeader>
    <Content></Content>
  </div>
</template>

<script>
// @ is an alias to /src
import AlsdiHeader from '@/components/AlsdiHeader.vue'
import Content from '@/views/AlsdiContent.vue'

export default {
  name: 'home',
  components: {
    AlsdiHeader,
    Content
  }
}
</script>

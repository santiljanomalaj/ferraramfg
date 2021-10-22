<template>
  <div class="grid-x grid-padding-x labs-logos" v-if="logoimage">
    <div class="large-2 medium-3 small-4 cell" v-for="(image, index) in logoimage" :key="index">
      <a v-if="index<5" :href="image.customData.link" target="_blank"><img :src="image.url"></a>
    </div>
  </div>
</template>

<script>

export default {
  name: "logo",
  props:{
    logoimage:{
      type:Array
    }
  }
}
</script>

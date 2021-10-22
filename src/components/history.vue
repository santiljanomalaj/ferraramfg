<template>
  <div class="history" v-if="data">
    <div class="history-background" :style="{ backgroundImage: `url('${data.history.bannerPhoto.url}')`, opacity:'0.55'}"></div>
        
    <div class="grid-container">
      <div class="grid-x grid-padding-x history-about">
        <div class="large-5 medium-6 cell" v-html="data.history.content">
        </div>
      </div>
    
      <div class="grid-x grid-padding-x history-photos">
        <div class="large-5 medium-5 cell" v-for="(image, index) in data.history.gallery" :key="index">
          <img v-if="index<2" :src="image.url">
        </div>
      </div>
      
      
      <div class="grid-x grid-padding-x" v-for="(item, index) in data.history.description" :key="index">
        <div v-if="index<1" class="large-4 medium-4 history-photos-old cell">
          <img :src="data.history.descriptionImage[index].url">
        </div>
        
        <div v-if="index<1" class="large-5 large-offset-1 medium-6 cell">
          <h3>{{item.label}}</h3>
          <h2>{{item.title}}</h2>
          <div v-html="item.content"></div>
        </div>
      </div>
      
      <div class="grid-x grid-padding-x history-photos">
        <div class="large-5 medium-5 cell" v-for="(image, index) in data.history.gallery" :key="image.url">
          <img v-if="index>1" :src="image.url">
        </div>
      </div>
      
      <div class="grid-x grid-padding-x" v-for="(item, index) in data.history.description" :key="data.history.descriptionImage[index].url">
        <div v-if="index>0" class="large-5 medium-6 cell">
          <h3>{{item.label}}</h3>
          <h2>{{item.title}}</h2>
          <div v-html="item.content"></div>
        </div>
        
        <div v-if="index>0" class="large-4 large-offset-1 medium-4 history-photos-old cell">
          <img :src="data.history.descriptionImage[index].url">
        </div>
      </div>
      
  
    </div>
  </div>
</template>

<script>

import { request } from '../lib/datocms'

export default {
  name: 'History',
  data(){
    return {
      data:null
    }
  },
  async mounted(){
    this.data = await request({
      query:`
      {
        history {
          content
          bannerPhoto {
            url(imgixParams: { w: 1440, auto: format })
              responsiveImage(imgixParams: { w: 1440, auto: format }) {
                base64
            }
          }
          gallery {
            url(imgixParams: { w: 1440, auto: format })
              responsiveImage(imgixParams: { w: 1440, auto: format }) {
                base64
            }
          }
          description
          descriptionImage {
            url(imgixParams: { w: 1440, auto: format })
              responsiveImage(imgixParams: { w: 1440, auto: format }) {
                base64
            }
          }
        }
      }
      `
    })
  }
}
</script>
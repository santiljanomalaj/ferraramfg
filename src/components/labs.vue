<template>
  <div class="labs" v-if="data">
    <div class="labs-background" :style="{ backgroundImage: `url('${data.lab.bannerPhoto.url}')`}"></div>
      
    <div class="grid-container">
      <div class="grid-x grid-padding-x labs-about">
        <div class="large-5 medium-6 cell" v-html="data.lab.content">
        </div>
      </div>
      <div class="grid-x grid-padding-x">
        <div class="large-6 cell">
          <h3>{{data.lab.logoOne}}</h3>
        </div>
      </div>
      <Logos :logoimage="data.lab.logoImage1" />
      
      
      <div class="grid-x grid-padding-x labs-photos">
        <div class="large-5 medium-5 cell" v-for="(image, index) in data.lab.gallery" :key="index">
          <img :src="image.url">
        </div>
      </div>
      
      <div class="grid-x grid-padding-x">
        <div class="large-6 cell">
          <h3>{{data.lab.logoTwo}}</h3>
        </div>
      </div>
      <Logos :logoimage="data.lab.logoImage2" />
    </div>
  </div>
</template>

<script>

import { request } from '../lib/datocms'
import Logos from './childcomponent/logos'

export default {
  name: 'Labs',
  data() {
    return {
      data:null
    }
  },
  components: {
    Logos,
  },
  async mounted(){
    this.data = await request({
    query:`
      {
        lab {
          content
          bannerPhoto {
            url(imgixParams: { w: 1440, auto: format })
            responsiveImage(imgixParams: { w: 1440, auto: format }) {
              base64
            }
          }
          logoOne
          logoTwo
          logoImage1 {
            url(imgixParams: { w: 1440, auto: format })
            responsiveImage(imgixParams: { w: 1440, auto: format }) {
              base64
            }
            customData
          }
          logoImage2 {
            url(imgixParams: { w: 1440, auto: format })
            responsiveImage(imgixParams: { w: 1440, auto: format }) {
              base64
            }
            customData
          }
          gallery {
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
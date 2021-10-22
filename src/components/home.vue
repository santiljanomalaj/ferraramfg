<template>
  <div class="home" v-if="data">
    <div class="grid-container">
      <div class="grid-x grid-padding-x header">
          <div class="large-10 cell">
            <img :src="data.home.bannerPhoto.url">
          </div>
          
          <div class="large-8 large-offset-1 cell headline-home" v-html="data.home.headline">
          </div>
      </div>
      
      <div class="grid-x grid-padding-x areas-expertise"  v-for="(item, index) in data.home.expertise" :key="data.home.capability.length+index">
        <div v-if="(index%2)==0" class="large-6 cell">
          <img :src="data.home.expertisePhoto[index].url">
        </div>
        
        <div v-if="(index%2)==0" class="large-4 cell">
          <h3>{{item.label}}</h3>
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
        </div>
        
        <div v-if="(index%2)==1" class="large-4 small-order-2 medium-order-2 large-order-1 cell">
          <h3>{{item.label}}</h3>
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
        </div>
        
        <div v-if="(index%2)==1" class="large-6 small-order-1 medium-order-1 large-order-2 cell">
          <img :src="data.home.expertisePhoto[index].url">
        </div>
      </div>
          
      <div class="grid-x grid-padding-x areas-expertise" v-for="(item, index) in data.home.capability" :key="index">
        <div class="large-6 cell" v-if="index<3" v-html="item.title">
        </div>
        
        <div class="large-4 cell" v-if="index<3" v-html="item.list">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '../lib/datocms'

export default {
  name: 'Home',
  data() {
    return {
      data:null
    }
  },
  async mounted(){
    this.data = await request({
    query:`
      {
        home {
          headline
          bannerPhoto {
            url(imgixParams: { w: 1440, auto: format })
            responsiveImage(imgixParams: { w: 1440, auto: format }) {
              base64
            }
          }
          expertise
          expertisePhoto {
            url(imgixParams: { w: 1440, auto: format })
            responsiveImage(imgixParams: { w: 1440, auto: format }) {
              base64
            }
          }
          capability
        }
      }
    `
    })
  }
}
</script>
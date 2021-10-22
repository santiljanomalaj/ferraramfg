<template>
  <div class="values" v-if="data">
    <div class="grid-container value-container">
      
      <div class="grid-x grid-padding-x core-value" v-for="(item, index) in data.value.content" :key="index">        
        <div class="large-3 large-offset-1 medium-3 cell" v-if="index<3">
          <h3>0{{index+1}}</h3>
          <h2>{{item.title}}</h2>
        </div>
        <div class="large-5 medium-7 cell" v-if="index<3">
          <p>{{item.value}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { request } from '../lib/datocms'

export default {
  name: 'Values',
  data() {
    return {
      data:null
    }
  },
  async mounted(){
    this.data = await request({
    query:`
      {
        value {
          content
        }
      }
    `
    })
  }
}
</script>
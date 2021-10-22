<template>
  <div>
    <div data-sticky-container class="">
      <header  v-if="data" :style="{backgroundColor:data.theme.bgcolor.hex, color:data.theme.color.hex}">
      <small>{{data.theme.text}}<a :href="data.theme.link" target="_blank"><button :style="{color:data.theme.color.hex}">Learn More</button></a></small>
      </header>
    
      <div class="bar-background"></div>
      
      <div class="title-bar" data-responsive-toggle="example-animated-menu" data-hide-for="medium">
        <button class="menu-icon" type="button" data-toggle></button>
        <div class="title-bar-title"></div>
      </div>
    
      <div data-sticky data-options="marginTop:0;" id="example-animated-menu" data-animate="fade-in fade-out" class="top-bar">
        <div class="top-bar-left">
          <ul class="menu" v-if="data">
            <li :key="index" v-for="(item, index) in data.header.leftMenu">
              <a v-if="item.url.includes('http')" :href="item.url">{{item.label}}</a>
              <router-link v-else :to="item.url">{{item.label}}</router-link>
            </li>
          </ul>
        </div>
    
        <div class="top-bar-right">
          <ul class="menu" v-if="data">
            <li :key="index" v-for="(item, index) in data.header.rightMenu">
              <a v-if="item.url.includes('http')" :href="item.url">{{item.label}}</a>
              <router-link v-else :to="item.url">{{item.label}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      
      <router-link to="/">
        <svg class="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 67.968">
          <g>
            <g>
              <path class="cls-1" d="M53.279,9.51v8.774l2.589.518v.273h-7.3V18.8l1.771-.518V.654L48.565.245V0H62.87V3.352h-.463L61.154.545H53.279V8.938h6.049L59.9,6.812h.435v4.824H59.9L59.328,9.51Z"/>
              <path class="cls-1" d="M80.741,18.53l1.281-2.78h.436v3.325H67.525v-.218l1.771-.436V.654L67.525.245V0h14.66V3.352h-.436L80.469.545h-8.23V8.938h6.649l.572-2.126h.409v4.824H79.46L78.888,9.51H72.239v9.02Z"/>
              <path class="cls-1" d="M97.113,10.137A3.892,3.892,0,0,1,98.992,12.1l3.6,6.267,1.58.436v.273H99.946l-4.959-8.8H91.826v8.011L93.6,18.8v.273H87.112V18.8l1.771-.518V.654L87.112.245V0h8.175c4,0,6.758,1.907,6.758,5.178C102.045,7.9,100.11,9.755,97.113,10.137ZM91.826.545V9.728h3.106c2.4,0,4.115-1.526,4.115-4.578,0-3.079-1.717-4.605-4.115-4.605Z"/>
              <path class="cls-1" d="M116.585,10.137a3.889,3.889,0,0,1,1.88,1.962l3.6,6.267,1.58.436v.273h-4.224l-4.959-8.8H111.3v8.011l1.771.518v.273h-6.485V18.8l1.771-.518V.654L106.585.245V0h8.175c4,0,6.757,1.907,6.757,5.178C121.517,7.9,119.582,9.755,116.585,10.137ZM111.3.545V9.728h3.106c2.4,0,4.115-1.526,4.115-4.578,0-3.079-1.717-4.605-4.115-4.605Z"/>
              <path class="cls-1" d="M141.743,18.284l1.744.518v.273H136.92V18.8l1.8-.518-2.289-5.531H128.2l-2.4,5.531,2.4.518v.273h-4.85V18.8l1.852-.518L133.187,0h.9Zm-13.3-6.1h7.739L132.423,3Z"/>
              <path class="cls-1" d="M154.534,10.137a3.9,3.9,0,0,1,1.88,1.962l3.6,6.267,1.58.436v.273h-4.224l-4.959-8.8h-3.161v8.011l1.771.518v.273h-6.485V18.8l1.771-.518V.654L144.533.245V0h8.175c4,0,6.758,1.907,6.758,5.178C159.466,7.9,157.531,9.755,154.534,10.137ZM149.247.545V9.728h3.107c2.4,0,4.114-1.526,4.114-4.578,0-3.079-1.717-4.605-4.114-4.605Z"/>
              <path class="cls-1" d="M179.691,18.284l1.744.518v.273h-6.567V18.8l1.8-.518-2.289-5.531h-8.23l-2.4,5.531,2.4.518v.273H161.3V18.8l1.853-.518L171.135,0h.9Zm-13.3-6.1h7.739L170.372,3Z"/>
            </g>
            <g>
              <path class="cls-1" d="M35.711,67.053H30V59.424h5.711v1.4H31.428v1.754h4.13v1.341h-4.13v1.722h4.283Z"/>
              <path class="cls-1" d="M43.08,61.266a2.181,2.181,0,0,0-1.808-.85c-1.069,0-1.581.447-1.581,1.014,0,.664.785.849,1.7.958,1.59.2,3.073.61,3.073,2.431,0,1.7-1.5,2.43-3.205,2.43-1.558,0-2.756-.479-3.323-1.874l1.2-.622a2.176,2.176,0,0,0,2.148,1.21c.9,0,1.754-.316,1.754-1.144,0-.719-.752-1.014-1.765-1.123-1.559-.185-3-.6-3-2.311,0-1.568,1.547-2.212,2.953-2.223a3.085,3.085,0,0,1,3,1.515Z"/>
              <path class="cls-1" d="M48.5,60.732h-2.42V59.424h6.277v1.308H49.94v6.321H48.5Z"/>
              <path class="cls-1" d="M54.077,66.366a.785.785,0,0,1-1.569,0A.785.785,0,0,1,54.077,66.366Z"/>
              <path class="cls-1" d="M60.664,65.832h1.145v-5.1H60.62V59.424h2.616v6.408h1.057v1.221H60.664Z"/>
              <path class="cls-1" d="M71,64.688V63.544a2.259,2.259,0,0,1-1.765.806c-1.536,0-3.149-.643-3.149-2.539,0-1.69,1.623-2.529,3.16-2.529,1.558,0,3.182.839,3.182,2.55v2.845c0,1.7-1.569,2.495-3.139,2.495-1.656,0-3.171-.654-3.171-2.255h1.438c0,.675.894,1.013,1.712,1.013.86.011,1.732-.458,1.732-1.286Zm-3.487-2.877c0,.839.763,1.286,1.722,1.286s1.776-.436,1.765-1.286-.817-1.243-1.754-1.243C68.341,60.568,67.513,60.972,67.513,61.811Z"/>
              <path class="cls-1" d="M75.463,63.118a1.68,1.68,0,0,1-.959-1.5c0-1.536,1.417-2.321,3.073-2.321s3.128.8,3.128,2.321a1.563,1.563,0,0,1-.981,1.439,1.917,1.917,0,0,1,1.155,1.7c.033,1.776-1.6,2.485-3.3,2.474-1.656-.011-3.313-.686-3.28-2.474A1.844,1.844,0,0,1,75.463,63.118Zm.338,1.657c-.011.588.621,1.144,1.787,1.144s1.8-.544,1.787-1.144c-.011-.752-.828-1.09-1.787-1.09C76.695,63.685,75.812,64.023,75.8,64.775Zm1.787-2.136c.883,0,1.591-.4,1.613-1.068.021-.643-.654-1.079-1.624-1.079-1.079,0-1.624.556-1.6,1.079C76,62.236,76.749,62.639,77.588,62.639Z"/>
              <path class="cls-1" d="M83.371,67.053,86.488,60.8H82.772V59.424h5.6l.077.763-3.422,6.866Z"/>
              <path class="cls-1" d="M106.06,67.968h-1.286V58.857h1.286Z"/>
              <path class="cls-1" d="M129.685,61.527,127.2,64.84h-.283l-2.43-3.324v5.547h-1.439V59.435h1.657l2.386,3.28,2.387-3.28h1.645v7.628h-1.438Z"/>
              <path class="cls-1" d="M139.581,65.614h-3.989l-.654,1.439H133.38l3.421-7.629h1.57l3.422,7.629h-1.569Zm-1.995-4.588-1.416,3.248H139Z"/>
              <path class="cls-1" d="M148.781,59.413h1.438v7.64h-.894v.01l-4.01-5.154v5.144h-1.438V59.424h1.166l3.738,4.73Z"/>
              <path class="cls-1" d="M158.18,67.063V63.98h-3.749v3.083h-1.438V59.435h1.438V62.65h3.749V59.435h1.428v7.628Z"/>
              <path class="cls-1" d="M167.574,65.614h-3.989l-.654,1.439h-1.558l3.422-7.629h1.57l3.421,7.629h-1.569Zm-1.994-4.588-1.417,3.248H167Z"/>
              <path class="cls-1" d="M172.849,60.732H170.43V59.424h6.277v1.308h-2.42v6.321h-1.438Z"/>
              <path class="cls-1" d="M178.936,60.732h-2.419V59.424h6.277v1.308h-2.42v6.321h-1.438Z"/>
              <path class="cls-1" d="M189.484,65.614H185.5l-.654,1.439h-1.558l3.421-7.629h1.57l3.422,7.629h-1.569Zm-2-4.588-1.416,3.248h2.833Z"/>
              <path class="cls-1" d="M198.562,59.413H200v7.64h-.894v.01l-4.01-5.154v5.144h-1.438V59.424h1.166l3.738,4.73Z"/>
            </g>
            <g>
              <path class="cls-1" d="M14.13,45.352l1.057.323v.171H11.2v-.171l1.107-.323-.716-9.869L7.21,45.846H6.647L2.2,35.466l-.733,9.92,1.039.324v.136H0V45.71l1.108-.324.8-10.978L.8,34.085v-.171H3.409L7.67,43.971,11.9,33.914H14.4v.171l-1.057.323Z"/>
              <path class="cls-1" d="M33.9,45.352l1.091.323v.171H30.885v-.171l1.125-.323-1.432-3.461H25.43l-1.5,3.461,1.5.323v.171H22.4v-.171l1.159-.323,5-11.438h.562Zm-8.319-3.819h4.842l-2.353-5.744Z"/>
              <path class="cls-1" d="M43.378,45.386V34.408l-1.108-.323v-.171H45.3l6.733,9.375V34.375l-1.108-.307v-.154H53.5v.154l-1.108.307V45.846h-.528L43.736,34.562V45.386l1.108.324v.136H42.27V45.71Z"/>
              <path class="cls-1" d="M71.451,41.414a4.313,4.313,0,0,1-4.67,4.534,4.349,4.349,0,0,1-4.705-4.534V34.408l-1.108-.323v-.171h4.057v.171l-1.108.323v7.006c0,2.523,1.5,3.87,3.545,3.87a3.535,3.535,0,0,0,3.648-3.87V34.375L70,34.068v-.154h2.557v.154l-1.108.307Z"/>
              <path class="cls-1" d="M82.99,39.863v5.489l1.619.323v.171H80.041v-.171l1.108-.323V34.323l-1.108-.255v-.154H88.99v2.1H88.7l-.785-1.756H82.99v5.25h3.784l.358-1.329H87.4v3.017h-.272l-.358-1.33Z"/>
              <path class="cls-1" d="M105.915,45.352l1.091.323v.171H102.9v-.171l1.125-.323-1.431-3.461H97.444l-1.5,3.461,1.5.323v.171H94.41v-.171l1.159-.323,4.994-11.438h.562ZM97.6,41.533h4.842l-2.353-5.744Z"/>
              <path class="cls-1" d="M124.307,44.226a5.918,5.918,0,0,1-4.415,1.722c-3.58,0-5.881-2.318-5.881-6.068,0-3.733,2.318-6.068,5.812-6.068a5.991,5.991,0,0,1,3.546,1.023l.716-.427.17.171v2.352h-.29a3.574,3.574,0,0,0-3.8-2.727c-2.608,0-4.228,1.926-4.228,5.608,0,3.358,1.466,5.591,4.586,5.591a4.886,4.886,0,0,0,3.6-1.381Z"/>
              <path class="cls-1" d="M138.658,34.255v11.1l1.108.323v.171h-4.057v-.171l1.108-.323v-11.1h-3.171l-.8,1.756h-.273v-2.1h10.347v2.1h-.29l-.784-1.756Z"/>
              <path class="cls-1" d="M161.088,41.414a4.69,4.69,0,0,1-9.375,0V34.408l-1.107-.323v-.171h4.056v.171l-1.108.323v7.006c0,2.523,1.5,3.87,3.546,3.87a3.535,3.535,0,0,0,3.648-3.87V34.375l-1.109-.307v-.154H162.2v.154l-1.109.307Z"/>
              <path class="cls-1" d="M175.935,40.255a2.436,2.436,0,0,1,1.176,1.227l2.25,3.921.988.272v.171h-2.641l-3.1-5.5h-1.977v5.011l1.107.323v.171h-4.056v-.171l1.108-.323V34.323l-1.108-.255v-.154h5.114c2.5,0,4.227,1.194,4.227,3.239C179.02,38.858,177.809,40.017,175.935,40.255Zm-3.307-6V40h1.943c1.5,0,2.574-.954,2.574-2.863,0-1.927-1.074-2.881-2.574-2.881Z"/>
              <path class="cls-1" d="M190.661,45.352l1.057.323v.171h-3.972v-.171l1.108-.323V34.408l-1.108-.323v-.171h3.972v.171l-1.057.323Z"/>
              <path class="cls-1" d="M200.359,45.386V34.408l-1.108-.323v-.171h3.034l6.733,9.375V34.375l-1.108-.307v-.154h2.574v.154l-1.108.307V45.846h-.528l-8.131-11.284V45.386l1.108.324v.136h-2.574V45.71Z"/>
              <path class="cls-1" d="M228.943,45.232l-.221.222-.938-.392a6.491,6.491,0,0,1-3.426.886c-3.613,0-5.915-2.318-5.915-6.068s2.336-6.068,5.847-6.068a6.041,6.041,0,0,1,3.562,1.023l.733-.427.171.171v2.352h-.29a3.616,3.616,0,0,0-3.852-2.727c-2.642,0-4.245,1.926-4.245,5.71,0,3.307,1.432,5.608,4.228,5.608a4.122,4.122,0,0,0,2.522-.767V40.613l-1.107-.306v-.171H230v.171l-1.057.306Z"/>
            </g>
          </g>
        </svg>
      </router-link>
    </div>
    
    <!-- content part -->
    <router-view></router-view>
    
    <div class="grid-container footer">
      <div class="grid-x">
        <div class="large-10 cell">
          <h3 v-if="data" v-html="data.footer.text"></h3>
        </div>
      </div>
    </div>
    
    <div class="grid-container sign-up">
      <div class="grid-x">
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup" class="large-6 large-offset-2 cell">
          <form action="https://ferraramfg.us19.list-manage.com/subscribe/post?u=8fe61cf57afc65255b6d28a3a&amp;id=5c25d92edc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <h2>Receive updates on our company.</h2>
              <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address </label>
                <input type="email" value="" name="EMAIL" placeholder="Email Address" class="required email" id="mce-EMAIL">
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8fe61cf57afc65255b6d28a3a_5c25d92edc" tabindex="-1" value=""></div>
              <div class="clear"><input type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div> 
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import { request } from './lib/datocms'
import { toHead } from "vue-datocms";

export default {
  name: 'App',
  data() {
    return {
      data:null
    }
  },
  metaInfo() {
    if (!this || !this.data) {
      return;
    }
    return toHead(this.data.theme.seo, this.data.site.favicon);
  },
  async mounted(){
    this.data = await request({
    query:`
      {
        theme {
          text
          link
          bgcolor {hex}
          color {hex}
          seo: _seoMetaTags {
            tag
            attributes
            content
          }
        }
        header {
          leftMenu
          rightMenu
        }
        footer {
          text
        }
        site: _site {
          favicon: faviconMetaTags {
            attributes
            content
            tag
          }
        }
      }
    `
    })
    console.log(this.data)
  }
}
</script>


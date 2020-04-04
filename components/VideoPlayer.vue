<template>
  <div class="youtube-player">
    <h5 v-if="title">{{ title }}</h5>
    <div class="video-container">
      <youtube :video-id="videoId" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

export default {
  name: 'VideoPlayer',
  props: {
    title: {
      type: String,
      required: false
    },
    videoId: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px; height: 0; overflow: hidden;
}
 
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div
    :is="isInternalLink(url) ? 'nuxt-link' : 'a'"
    :to="isInternalLink(url) ? url : ''"
    :href="isInternalLink(url) ? '' : url"
    class="StaticButton"
  >
    <span>
      <v-icon size="21" class="StaticButton-icon">mdi-clipboard-flow-outline</v-icon>
      {{ $t(text) }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class StaticButton extends Vue {
  @Prop({ default: '', required: false })
  url!: string

  @Prop({ default: '', required: false })
  text!: string

  isInternalLink(path: string): boolean {
    return !/^https?:\/\//.test(path)
  }
}
</script>

<style lang="scss">
.StaticButton {
  display: flex;
  align-items: center;
  font-size: 120%;
  font-weight: bold;
  background-color: $blue-1;
  border-radius: 4px;
  padding: 1em;
  margin: .5em auto;
  > span {
    margin: .5em auto;
  }
  &:link,
  &:focus,
  &:visited,
  &:active {
    color: $white;
    text-decoration: none;
  }
  &:hover {
    background-color: $blue-3;
  }
  &-icon:before {
    color: $white;
    margin-right: 5px;
  }
}
</style>

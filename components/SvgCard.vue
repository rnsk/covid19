<template>
  <data-view class="SvgCard" :title="title" :date="date">
    <slot />
        <ul class="Graph-Desc">
          <li>{{$t('岐阜県内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載')}}</li>
          <li>{{$t('チャーター機帰国者、クルーズ船乗客等は含まれていない。')}}</li>
          <li>{{$t('「入院中」には、入院調整中、後方施設入所中を含む。') }}</li>
          <li>{{$t('「退院」には、療養解除を含む。') }}</li>
        </ul>
  </data-view>
</template>

<style lang="scss" scoped>
.SvgCard {
  ::v-deep svg {
    width: 100%;
  }
  .Graph-Desc {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>

<script>
import DataView from '@/components/DataView.vue'

export default {
  components: { DataView },
  props: {
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>

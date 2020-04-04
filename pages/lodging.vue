<template>
  <div class="Parent">
    <page-header :icon="'mdi-home-city'" :title="$t('宿泊事業者の皆様へ')" />
    <StaticCard>
      <h3>{{ $t('') }}</h3>
      <h4>{{ $t('「新型コロナウイルス感染症対応マニュアル(宿泊施設用)」について') }}</h4>
      <p>{{ $t('感染拡大防止対策と宿泊者・従業員に感染の疑い事例が発生した場合の対応などをまとめた、宿泊施設向けの感染症対応マニュアルを作成しました。（令和2年3月31日）')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/sangyo/kanko/kanko-shinko/s11334/kansensyomanual.html"
        target="_blank"
        rel="noopener"
      >{{ $t('新型コロナウイルス感染症対応マニュアル（宿泊施設用）') }}</a>

      <h4>{{ $t('宿泊施設における新型コロナウイルス感染症への対応は、下記をご確認ください。') }}</h4>
      <a
        href="https://www.pref.gifu.lg.jp/kurashi/dobutsu/seikatsu-eisei/11222/ryokan_shingata_corona.html"
        target="_blank"
        rel="noopener"
      >{{ $t('旅館業法による宿泊施設（旅館、ホテル）') }}</a>
      <br />
      <a
        href="https://www.pref.gifu.lg.jp/kurashi/dobutsu/seikatsu-eisei/11222/portal.html"
        target="_blank"
        rel="noopener"
      >{{ $t('住宅宿泊事業法による宿泊施設（民泊）') }}</a>

      <h4>{{ $t('特定建築物における新型コロナウイルス感染症への対応は、下記をご確認ください。') }}</h4>
      <a
        href="https://www.pref.gifu.lg.jp/kurashi/dobutsu/seikatsu-eisei/11222/index_7150.html"
        target="_blank"
        rel="noopener"
      >{{ $t('建築物衛生法による特定建築物') }}</a>
    </StaticCard>
    <static-button :url="'/worker'" :text="$t('事業者の皆様への情報もご覧ください')" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'
import StaticButton from '@/components/StaticButton.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    StaticButton
  }
})
</script>

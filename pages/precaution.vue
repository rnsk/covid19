<template>
  <div class="Parent">
    <page-header
      :icon="'mdi-hand-water'"
      :title="$t('新型コロナウイルス感染症の予防について')"
    />
    <StaticCard>
      <h3>1. {{ $t('新型コロナウイルス感染症の特徴は？') }}</h3>
      <p>
        {{
          $t(
            '発熱や咳が長引くこと（１週間前後）が多く、強いだるさ（倦怠感）を訴える方が多いことが特徴です。'
          )
        }}
        {{
          $t(
            'ご高齢の方や、糖尿病、心不全、呼吸器疾患（COPDなど）のある方などは重症化しやすい可能性があります。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>2. {{ $t('新型コロナウイルス感染症の予防方法は？') }}</h3>
      <p>
        {{
          $t(
            '新型コロナウイルスは、風邪やインフルエンザと同様、患者の咳などの飛沫を吸い込むことによる飛沫感染と、ウイルスが付着した手で口や鼻に触ることによる接触感染によりうつると考えられています。'
          )
        }}
        {{
          $t(
            'また、患者とすれ違う程度では感染するリスクは低いと言われています。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '通常の風邪やインフルエンザの予防方法と同じく、手洗い（よく泡立てて30秒）や手指消毒剤（70％エタノール）での消毒をこまめに行うことが重要です。'
          )
        }}
        {{
          $t(
            '特に、症状がある場合には、周囲の人に感染を広げないために、マスクを着用するなどの咳エチケットが重要です。'
          )
        }}
      </p>
      <v-row class="DataBlock">
        <v-col cols="12" md="4">
          <video-player :title="$t('手洗い編')" :video-id="'brH_cFl-WCM'" />
        </v-col>
        <v-col cols="12" md="4">
          <video-player
            :title="$t('咳エチケット編')"
            :video-id="'M0JcNeMQ75s'"
          />
        </v-col>
        <v-col cols="12" md="4">
          <video-player
            :title="$t('人にうつさない編')"
            :video-id="'siNMgHDRwT4'"
          />
        </v-col>
      </v-row>
    </StaticCard>
    <StaticCard>
      <h3>3. {{ $t('感染症を疑う場合の対応') }}</h3>
      <p>
        {{ $t('次のような方は 帰国者・接触者相談センターにご相談ください。') }}
      </p>
      <ul>
        <li>{{ $t('息苦しさ・強いだるさ・高熱等の強い症状のいずれかがある') }}</li>
        <p>
          {{
            $t(
              '※発熱や咳など比較的軽い風邪の症状が続く場合も、４日以上続く場合は必ずご相談ください。症状には個人差がありますので、強い症状と思う場合にはすぐに相談してください。解熱剤などを飲み続けなければならない方も同様です。'
            )
          }}
        </p>
      </ul>
      <p>
        {{
          $t(
            'なお、以下のような方は重症化しやすいため、 上記の症状のいずれかがある場合には、すぐに御相談ください。'
          )
        }}
      </p>
      <ul>
        <li>{{ $t('高齢者') }}</li>
        <li>
          {{ $t('糖尿病、心不全、呼吸器疾患（COPD等）の基礎疾患がある方') }}
        </li>
        <li>{{ $t('透析を受けている方') }}</li>
        <li>{{ $t('免疫抑制剤や抗がん剤等を用いている方') }}</li>
        <li>{{ $t('妊婦の方') }}</li>
      </ul>
    </StaticCard>
    <static-button :url="'/flow'" :text="$t('相談の手順を確認する')" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'
import StaticButton from '@/components/StaticButton.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    StaticButton,
    VideoPlayer
  }
})
</script>

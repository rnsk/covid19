<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]">
        <SentimentIcon aria-hidden="true" />
      </span>
      <span :class="$style.fzMedium">{{ $t('不安に思う方') }}</span>
    </p>

    <ul :class="[$style.rectContainer, $style.triple]">
      <li :class="$style.symptom">
        {{ $t('微熱') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('軽い咳') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('感染の不安') }}
      </li>
    </ul>

    <div :class="$style.callcenter">
      <p :class="$style.fzLarge">
         {{ $t('健康相談窓口') }}
     </p>
      <p :class="$style.open">
        {{ $t('県庁保健医療課') }}:{{ $t('毎日') }} {{ $t('9:00〜21:00') }}
      </p>
      <p :class="[$style.phone, $style.fzNumeric]">
        <span :class="$style.icon">
          <PhoneIcon alt="Phone" />
        </span>
        <a href="tel:0582728860">058-272-8860<br /></a>
      </p>
      <br/>
      <p :class="$style.open">
        {{ $t('各保健所') }}:{{ $t('平日') }} {{ $t('9:00〜17:00') }}
      </p>
      <p :class="$style.HokenLink">
        <router-link to="/consultations">
          {{ $t('各保健所の電話番号は相談窓口一覧へ') }}
        </router-link>
      </p>
    </div>

    <a
      v-scroll-to="{
        el: '#consult',
        onDone: onDoneScroll
      }"
      href="#consult"
      :class="[$style.button, $style.clickable]"
    >
      <span :class="$style.text">{{ $t('専門的な助言が必要な場合') }}</span>
      <ArrowForwardIcon :class="$style.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { onDoneScroll } from '@/utils/vueScrollTo'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
import PhoneIcon from '@/static/flow/responsive/phone.svg'
import SentimentIcon from '@/static/flow/responsive/sentiment_very_dissatisfied.svg'

export default {
  components: { ArrowForwardIcon, PhoneIcon, SentimentIcon },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.rectContainer {
  // suspect
  &.triple {
    margin-left: px2vw(-11);
    margin-right: px2vw(-11);
    > .symptom {
      margin-left: px2vw(11);
      margin-right: px2vw(11);
      flex-grow: 10;
    }
  }
}
// suspect
.callcenter {
  margin-top: px2vw(25);
  text-align: center;
  .open {
    margin-top: px2vw(10);
  }
}
.HokenLink {
    margin-top: px2vw(10);
    line-height: 22px;
    text-align: center;
    font-weight: bold;
    a {
      color: rgba(0, 0, 0, 0.87);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
}

@include largerThan($small) {
  $vw: 960;
  .rectContainer {
    &.triple {
      margin-left: px2vw(-11, $vw);
      margin-right: px2vw(-11, $vw);
      > .symptom {
        margin-left: px2vw(11, $vw);
        margin-right: px2vw(11, $vw);
      }
    }
  }
  // suspect
  .callcenter {
    margin-top: px2vw(25, $vw);
    .open {
      margin-top: px2vw(10, $vw);
    }
  }
}
</style>

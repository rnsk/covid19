<template>
  <div class="Parent">
    <page-header :icon="'mdi-domain'" :title="$t('事業者の皆様へ')" />
    <StaticCard>
      <h3>{{ $t('新型コロナウイルス感染症に関する相談窓口') }}</h3>
      <h4>
        <a
          href="https://www.pref.gifu.lg.jp/kinkyu-juyo-joho/shingata_corona.data/soudannmadoguti0327.pdf"
          target="_blank"
          rel="noopener"
        >{{ $t('新型コロナウイルス感染症に関する相談窓口一覧') }}(PDF)</a>
      </h4>

      <h4>{{ $t('「新型コロナウイルスに関する休日経営相談会」の開催について') }}</h4>
      <p>{{ $t('新型コロナウイルス感染症の影響を受ける事業者の円滑な資金調達等を支援するため、県商工会議所連合会、県商工会連合会及び（公財）岐阜県産業経済振興センターと共同で、県内事業者向けの休日経営相談会を開催します。')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/event-calendar/c_11351/soudankai.html"
        target="_blank"
        rel="noopener"
      >{{ $t('新型コロナウイルスに関する休日経営相談会') }}</a>

      <h4>{{ $t('「新型コロナウイルス関連融資相談窓口」について') }}</h4>
      <p>{{ $t('新型コロナウイルスの影響を受ける、またはその恐れがある中小企業者・小規模事業者の資金繰りなどの相談窓口を開設しました。')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/event-calendar/c11363/yushisoudanmadoguti.html"
        target="_blank"
        rel="noopener"
      >{{ $t('新型コロナウイルス関連融資相談窓口の開設') }}</a>

      <h4>{{ $t('厚生労働省新型コロナウイルス感染症に関するQ＆A') }}</h4>
      <a
        href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00001.html"
        target="_blank"
        rel="noopener"
      >{{ $t('一般の方向けQ&A') }}（{{ $t('外部サイト') }}）</a>
      <br />
      <a
        href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00004.html"
        target="_blank"
        rel="noopener"
      >{{ $t('医療機関・検査機関向けQ&A') }}（{{ $t('外部サイト') }}）</a>
      <br />
      <a
        href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00007.html"
        target="_blank"
        rel="noopener"
      >{{ $t('企業の方向けQ&A') }}（{{ $t('外部サイト') }}）</a>
      <br />
      <a
        href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00018.html"
        target="_blank"
        rel="noopener"
      >{{ $t('労働者の方向けQ&A') }}（{{ $t('外部サイト') }}）</a>
      <br />
      <a
        href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/covid19_qa_kanrenkigyou.html"
        target="_blank"
        rel="noopener"
      >{{ $t('関連業種の方向けQ&A') }}（{{ $t('外部サイト') }}）</a>
    </StaticCard>

    <StaticCard>
      <h3>{{ $t('支援制度等') }}</h3>
      <h4>{{ $t('「新型コロナウイルスに係る県中小企業資金融資制度の改正」について') }}</h4>
      <p>{{ $t('新型コロナウイルスによる影響を受ける県内中小企業・小規模事業者の早期支援に向けて、岐阜県中小企業資金融資制度のうち、経済変動対策資金の要件を改正します。')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/event-calendar/c11363/yushiseidokaisei.html"
        target="_blank"
        rel="noopener"
      >{{ $t('新型コロナウイルスに係る県中小企業資金融資制度の改正') }}</a>

      <h4>{{ $t('「新型コロナウイルス感染症に伴うセーフティネット保証４号の実施」について') }}</h4>
      <p>{{ $t('売上高が減少している中小企業・小規模事業者の資金繰り支援措置として、信用保証協会が一般保証と別枠で融資額の１００％を保証する制度が始まりました。')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/event-calendar/c11363/koronauirusu.html"
        target="_blank"
        rel="noopener"
      >{{ $t('新型コロナウイルス感染症に伴うセーフティネット保証４号の実施') }}</a>

      <h4>{{ $t('県制度融資「新型コロナウイルス感染症対策資金」の新設と運用開始') }}</h4>
      <p>{{ $t('新型コロナウイルス感染症の影響により売上等が減少している中小企業者の資金繰りを支援するため、新たに「新型コロナウイルス感染症対策資金」を設置し、３月５日から運用を開始します。')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/event-calendar/c11363/saigaitaisaku.html"
        target="_blank"
        rel="noopener"
      >{{ $t('新型コロナウイルスに係る県中小企業資金融資制度の改正') }}</a>

      <h4>{{ $t('県制度融資「新型コロナウイルス感染症対策資金」の短期事業資金に対する支援の拡充') }}</h4>
      <p>{{ $t('「新型コロナウイルス感染症対策資金」について、３月１７日から短期事業資金（償還期間１年以内の運転資金）に対する支援を拡充しました（信用保証料を県が全額補給）。')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/event-calendar/c11363/saigaitunagi.html"
        target="_blank"
        rel="noopener"
      >{{ $t('県制度融資「新型コロナウイルス感染症対策資金」の短期事業資金に対する支援の拡充') }}</a>

      <h4>{{ $t('県制度融資「危機関連対応資金」の運用開始') }}</h4>
      <p>{{ $t('新型コロナウイルス感染症の影響により売上等が減少している中小企業・小規模事業者の資金繰りを支援するため、国の「危機関連保証」に対応した「危機関連対応資金」の運用を３月１３日から開始します。')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/event-calendar/c11363/kikikanren.html"
        target="_blank"
        rel="noopener"
      >{{ $t('県制度融資「危機関連対応資金」の運用を開始') }}</a>

      <h4>{{ $t('「新型コロナウイルス感染症関連：経済産業省の支援策」について') }}</h4>
      <p>{{ $t('新型コロナウイルスによる企業への影響を緩和し、企業を支援するための施策をご案内します。')}}</p>
      <a
        href="https://www.meti.go.jp/covid-19/"
        target="_blank"
        rel="noopener"
      >{{ $t('経済産業省の支援策') }}（{{ $t('外部サイト') }}）</a>
    </StaticCard>
    <StaticCard>
      <h3>{{ $t('申告期限の延長、納税が困難な方について') }}</h3>
      <h4>{{ $t('個人県民税および個人事業税の申告期限を４月１６日（木）まで延長しました。') }}</h4>
      <p>{{ $t('申告の受付は、最寄りの確定申告会場またはお住まいの市町村役場にて行っております。')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/kinkyu-juyo-joho/shingata_corona.data/0203shinkoku.pdf"
        target="_blank"
        rel="noopener"
      >{{ $t('個人県民税および個人事業税の申告期限の延長について') }}(PDF)</a>

      <h4>{{ $t('新型コロナウイルス感染症の影響により県税の納付が困難な方について') }}</h4>
      <p>{{ $t('新型コロナウイルス感染症の影響により、県税を一時に納付することが困難な方には納税の猶予制度をご案内しておりますので、県税事務所（徴収担当課）にご相談ください。')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/kurashi/zeikin/nozei/11110/yuuyoseido.html"
        target="_blank"
        rel="noopener"
      >{{ $t('県税を一時に納められない方のために納税猶予制度があります') }}</a>

      <p>{{ $t('国税については、下記国税庁ホームページをご確認ください。')}}</p>
      <a
        href="http://www.nta.go.jp/taxes/nozei/nofu_konnan.htm"
        target="_blank"
        rel="noopener"
      >{{ $t('「新型コロナウイルス感染症の影響により納税が困難な方について」国税庁ホームページ') }}（{{ $t('外部サイト') }}）</a>
    </StaticCard>

    <StaticCard>
      <h3>{{ $t('その他') }}</h3>
      <h4>{{ $t('「職場における新型コロナウイルス感染症の拡大を防止するためのチェックリスト」について') }}</h4>
      <p>{{ $t('職場における新型コロナウイルス感染症の拡大を防止するための基本的な対策の実施状況について確認いただけます。')}}</p>
      <a
        href="https://www.mhlw.go.jp/content/10900000/000617721.pdf"
        target="_blank"
        rel="noopener"
      >{{ $t('厚生労働省「職場における新型コロナウイルス感染症の拡大を防止するためのチェックリスト（事業主向け）（３月31日）') }}（{{ $t('外部サイト') }}）(PDF)</a>

      <h4>{{ $t('感染症産業廃棄物の適正処理について') }}</h4>
      <p>{{ $t('新型コロナウイルス感染症に係る産業廃棄物の取扱いについて、下記をご確認ください。')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/kurashi/gomi/haikibutsu/11225/tekiseishori-coronavirus.html"
        target="_blank"
        rel="noopener"
      >{{ $t('新型コロナウイルス感染症に係る廃棄物の適正処理について') }}</a>

      <h4>{{ $t('学校給食の休止に伴う未利用食品活用のための取組について') }}</h4>
      <p>{{ $t('食品関連事業者等から発生する学校給食で活用する予定であった未利用食品の有効活用を図るため、フードバンク活用の促進対策及び再生利用の促進対策の事業実施者の公募が開始されました。')}}</p>
      <a
        href="https://www.pref.gifu.lg.jp/kensei/ken-gaiyo/soshiki-annai/nosei/nosan-butsuryu/kyuusyokuhudobanku.html"
        target="_blank"
        rel="noopener"
      >{{ $t('学校給食の休止に伴う未利用食品活用緊急促進事業のうちフードバンク活用の促進対策及び再生利用の促進対策について') }}</a>

      <h4>{{ $t('特定建築物における新型コロナウイルス感染症への対応は、下記をご確認ください。') }}</h4>
      <a
        href="https://www.pref.gifu.lg.jp/kurashi/dobutsu/seikatsu-eisei/11222/index_7150.html"
        target="_blank"
        rel="noopener"
      >{{ $t('建築物衛生法による特定建築物') }}</a>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard
  }
})
</script>

<style lang="scss">
.Worker {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>

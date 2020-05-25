<template>
  <div :class="$style.Flow">
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <p :class="$style.FlowRowRowThreeGeneral">
          <img
            :class="$style.FlowRowRowThreeGeneralIcon"
            src="/flow/accessibility-24px.svg"
            aria-hidden="true"
          />
          {{ $t('一般の方') }}
        </p>
      </div>
      <div>
        <p>
          <i18n path="息苦しさ・強いだるさ・高熱等の" />
          <br />
          <i18n path="強い症状のいずれかがある" :class="$style.FlowRowEmphasis" />
        </p>
      </div>
      <div :class="$style.FlowRowNote">
        <p>
          <i18n path="※発熱や咳など比較的軽い風邪の症状が続く場合も、４日以上続く場合は必ずご相談ください。症状には個人差がありますので、強い症状と思う場合にはすぐに相談してください。解熱剤などを飲み続けなければならない方も同様です。" />
        </p>
      </div>
    </div>

    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <ul :class="$style.FlowRowRowThreeCareTargetList">
          <li :class="$style.FlowRowRowThreeCareTargetListItem">
            <img
              :class="$style.FlowRowRowThreeCareTargetListItemIcon"
              src="/flow/directions_walk-24px.svg"
              aria-hidden="true"
            />
            {{ $t('ご高齢な方') }}
          </li>
          <li :class="$style.FlowRowRowThreeCareTargetListItem">
            <img
              :class="$style.FlowRowRowThreeCareTargetListItemIcon"
              src="/flow/accessible-24px.svg"
              aria-hidden="true"
            />
            {{ $t('基礎疾患のある方') }}
          </li>
          <li :class="$style.FlowRowRowThreeCareTargetListItem">
            <img
              :class="$style.FlowRowRowThreeCareTargetListItemIcon"
              src="/flow/pregnant_woman-24px.svg"
              aria-hidden="true"
            />
            {{ $t('妊娠中の方') }}
          </li>
        </ul>
      </div>
      <div>
        <p>
          <i18n path="発熱や咳などの比較的軽い風邪の" />
          <br />
          <i18n path="症状がある" :class="$style.FlowRowEmphasis" />
        </p>
        <p>
          <i18n path="息苦しさ・強いだるさ・高熱等の" />
          <br />
          <i18n path="強い症状のいずれかがある" :class="$style.FlowRowEmphasis" />
        </p>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.Flow {
  @include card-container($withDivider: true);
  display: flex;
  flex-direction: row;
  padding: 20px 20px !important;
  position: relative;
  color: $gray-2;
  &Row {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 36%;
    display: flex;
    flex-direction: column;
    text-align: center;
    &RowCheck {
      flex-basis: calc(28% - 20px);
      margin: 0 10px;
    }
    &RowThree {
      flex-grow: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      &General {
        &Icon {
          display: block;
          margin: auto;
          width: 44px;
          height: 44px;
        }
      }
      &CareTargetList {
        margin: 16px 0;
        text-align: left;
        list-style: none;
        &Item + &Item {
          margin-top: 14px;
        }
        &Item {
          display: flex;
          align-items: center;
          &Icon {
            display: inline-block;
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    &Note {
      font-size: 12px;
      margin: 0 20px;
    }
    &Condition {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      padding: 10px;
      position: relative;
      border: 2px solid $blue-1 !important;
      border-radius: 2px;
      background-color: $white;
      p {
        text-align: center;
        display: inline-block;
        margin: 0 !important; // FIXME: IEだとv-applicationのmarginが優先される
        font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
        font-weight: bold;
        @include largerThan($large) {
          font-size: 20px;
        }
      }
      &Large {
        font-size: calc(1rem + ((1vw - 7.68px) * 2.4876));
        @include largerThan($large) {
          font-size: 25px;
        }
      }
      &Small {
        font-size: 15px;
      }
      &Icon {
        position: absolute;
        left: -8px;
        top: -8px;
        width: 24px;
        height: 24px;
      }
      &::before {
        position: absolute;
        left: -4px;
        top: -4px;
        width: 20px;
        height: 20px;
        background-color: white;
        content: '';
      }
    }
    &Emphasis {
      font-size: 24px;
      font-weight: bold;
      border-bottom: solid 3px $blue-1;
      &Day {
        font-size: 41px;
      }
    }
  }
}
</style>

<template>
  <div>
    <h1>哪里不会点哪里</h1>
    <div class="korean-wrapper">
      <table border="1">
        <thead>
        <tr>
          <th  v-for="(item, index) in tableHeader" :key="index" @click="play(item.roma,true)">
            <div class="koren-value">{{item.value}}</div>
            <div class="korean-roma"> {{item.roma}}</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in tableContent" :key="index">
          <td v-for="(i,num) in item" :key="num"  @click="play(Boolean(i.roma)? i.roma : i.value, Boolean(i.roma))">
            <div class="koren-value">{{i.value }}</div>
            <div class="korean-roma"> {{Boolean(i.roma) ? i.roma : `${item[0].roma}${tableHeader[num].roma}`}}</div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <audio :src="audioSrc" id="RomaSound" ></audio>
  </div>
</template>

<script  setup>
import {computed, ref} from "vue";
const nowRoma = ref('')
const nowValue = ref('')
const audioSrc = computed(()=> nowRoma.value? `https://www.2hanyu.com/mp3/yinbiao/${nowRoma.value}.mp3`: `https://dict.youdao.com/dictvoice?audio=${nowValue.value}&le=ko`)
const play = (roma, isRoma) => {
  console.log(roma, isRoma)
  nowValue.value = isRoma ? '' : roma
  nowRoma.value = isRoma ? roma : '';
  if(!nowRoma.value && !nowValue.value) return
  setTimeout(()=> {
    document.getElementById('RomaSound').pause()
    document.getElementById('RomaSound').play()
  },100)
}
const tableHeader = [{value: '', roma: ''},
                          {"value":"ㅏ", roma:"a"}, {"value":"ㅐ", roma:"ae"}, {"value":"ㅑ", roma:"ya"}, {"value":"ㅒ", roma:"yae"},{"value":"ㅓ", roma:"eo"},{"value":"ㅔ", roma:"e"}, {"value":"ㅕ", roma:"yeo"}, {"value":"ㅖ", roma:"ye"}, {"value":"ㅗ", roma:"o"}, {"value":"ㅘ", roma:"wa"}, {"value":"ㅙ", roma:"wae"}, {"value":"ㅚ", roma:"oe"}, {"value":"ㅛ", roma:"yo"}, {"value":"ㅜ", roma:"u"}, {"value":"ㅝ", roma:"wo"}, {"value":"ㅞ", roma:"we"}, {"value":"ㅟ", roma:"wi"}, {"value":"ㅠ", roma:"yu"}, {"value":"ㅡ", roma:"eu"}, {"value":"ㅢ", roma:"ui"}, {"value":"ㅣ", roma:"i"}]
const tableContent = [
  [{"value":"ㄱ",roma:"g"},{value:"가", roma:""},{value:"개", roma:""},{value:"갸", roma:""},{value:"걔", roma:""},{value:"거", roma:""},{value:"게", roma:""},{value:"겨", roma:""},{value:"계", roma:""},{value:"고", roma:""},{value:"과", roma:""},{value:"괘", roma:""},{value:"괴", roma:""},{value:"교", roma:""},{value:"구", roma:""},{value:"궈", roma:""},{value:"궤", roma:""},{value:"귀", roma:""},{value:"규", roma:""},{value:"그", roma:""},{value:"긔", roma:""},{value:"기", roma:""}],
  [{"value":"ㄷ",roma:"d"},{value:"다", roma:""},{value:"대", roma:""},{value:"댜", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅂ",roma:"b"},{value:"바", roma:""},{value:"배", roma:""},{value:"뱌", roma:""},{value:"뱨", roma:""},{value:"버", roma:""},{value:"베", roma:""},{value:"벼", roma:""},{value:"볘", roma:""},{value:"보", roma:""},{value:"봐", roma:""},{value:"봬", roma:""},{value:"뵈", roma:""},{value:"뵤", roma:""},{value:"부", roma:""},{value:"붜", roma:""},{value:"붸", roma:""},{value:"뷔", roma:""},{value:"뷰", roma:""},{value:"브", roma:""},{value:"븨", roma:""},{value:"비", roma:""}],
  [{"value":"ㅅ",roma:"s"},{value:"사", roma:""},{value:"새", roma:""},{value:"샤", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅈ",roma:"j"},{value:"자", roma:""},{value:"재", roma:""},{value:"쟈", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㄲ",roma:"kk"},{value:"까", roma:""},{value:"깨", roma:""},{value:"꺄", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㄸ",roma:"tt"},{value:"따", roma:""},{value:"때", roma:""},{value:"땨", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅃ",roma:"pp"},{value:"빠", roma:""},{value:"빼", roma:""},{value:"뺘", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅆ",roma:"ss"},{value:"싸", roma:""},{value:"쌔", roma:""},{value:"쌰", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅉ",roma:"jj"},{value:"짜", roma:""},{value:"째", roma:""},{value:"쨔", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅋ",roma:"k"},{value:"카", roma:""},{value:"캐", roma:""},{value:"캬", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅌ",roma:"t"},{value:"타", roma:""},{value:"태", roma:""},{value:"탸", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅍ",roma:"p"},{value:"파", roma:""},{value:"패", roma:""},{value:"퍄", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅊ",roma:"ch"},{value:"차", roma:""},{value:"채", roma:""},{value:"챠", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㄴ",roma:"n"},{value:"나", roma:""},{value:"내", roma:""},{value:"냐", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㄹ",roma:"l"},{value:"라", roma:""},{value:"래", roma:""},{value:"랴", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅁ",roma:"m"},{value:"마", roma:""},{value:"매", roma:""},{value:"먀", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅇ",roma:""},{value:"아", roma:""},{value:"애", roma:""},{value:"야", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}],
  [{"value":"ㅎ",roma:"h"},{value:"하", roma:""},{value:"해", roma:""},{value:"햐", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""},{value:"", roma:""}]]
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.korean-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 40px;
}
.koren-value {
  min-width: 55px;
}
.korean-roma {
  font-size: 20px;
}
.korean-wrapper table {
  cursor: pointer;
}
</style>

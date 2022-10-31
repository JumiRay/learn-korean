<template>
    <h1 class="korean-header">哪里不会点哪里</h1>
    <div class="korean-wrapper">
      <table border="1" style="display: inline-block">
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
const tableHeader = [{value: '', roma: ''}, {"value":"ㅏ", roma:"a"}, {"value":"ㅐ", roma:"ae"}, {"value":"ㅑ", roma:"ya"}, {"value":"ㅒ", roma:"yae"},{"value":"ㅓ", roma:"eo"},{"value":"ㅔ", roma:"e"}, {"value":"ㅕ", roma:"yeo"}, {"value":"ㅖ", roma:"ye"}, {"value":"ㅗ", roma:"o"}, {"value":"ㅘ", roma:"wa"}, {"value":"ㅙ", roma:"wae"}, {"value":"ㅚ", roma:"oe"}, {"value":"ㅛ", roma:"yo"}, {"value":"ㅜ", roma:"u"}, {"value":"ㅝ", roma:"wo"}, {"value":"ㅞ", roma:"we"}, {"value":"ㅟ", roma:"wi"}, {"value":"ㅠ", roma:"yu"}, {"value":"ㅡ", roma:"eu"}, {"value":"ㅢ", roma:"ui"}, {"value":"ㅣ", roma:"i"}]
const tableContent = [[{"value":"ㄱ","roma":"g"},{"value":"가","roma":""},{"value":"개","roma":""},{"value":"갸","roma":""},{"value":"걔","roma":""},{"value":"거","roma":""},{"value":"게","roma":""},{"value":"겨","roma":""},{"value":"계","roma":""},{"value":"고","roma":""},{"value":"과","roma":""},{"value":"괘","roma":""},{"value":"괴","roma":""},{"value":"교","roma":""},{"value":"구","roma":""},{"value":"궈","roma":""},{"value":"궤","roma":""},{"value":"귀","roma":""},{"value":"규","roma":""},{"value":"그","roma":""},{"value":"긔","roma":""},{"value":"기","roma":""}],[{"value":"ㄷ","roma":"d"},{"value":"다","roma":""},{"value":"대","roma":""},{"value":"댜","roma":""},{"value":"댸","roma":""},{"value":"더","roma":""},{"value":"데","roma":""},{"value":"뎌","roma":""},{"value":"데","roma":""},{"value":"도","roma":""},{"value":"돠","roma":""},{"value":"돼","roma":""},{"value":"되","roma":""},{"value":"됴","roma":""},{"value":"두","roma":""},{"value":"둬","roma":""},{"value":"뒈","roma":""},{"value":"뒤","roma":""},{"value":"듀","roma":""},{"value":"드","roma":""},{"value":"듸","roma":""},{"value":"디","roma":""}],[{"value":"ㅂ","roma":"b"},{"value":"바","roma":""},{"value":"배","roma":""},{"value":"뱌","roma":""},{"value":"뱨","roma":""},{"value":"버","roma":""},{"value":"베","roma":""},{"value":"벼","roma":""},{"value":"볘","roma":""},{"value":"보","roma":""},{"value":"봐","roma":""},{"value":"봬","roma":""},{"value":"뵈","roma":""},{"value":"뵤","roma":""},{"value":"부","roma":""},{"value":"붜","roma":""},{"value":"붸","roma":""},{"value":"뷔","roma":""},{"value":"뷰","roma":""},{"value":"브","roma":""},{"value":"븨","roma":""},{"value":"비","roma":""}],[{"value":"ㅅ","roma":"s"},{"value":"사","roma":""},{"value":"새","roma":""},{"value":"샤","roma":""},{"value":"섀","roma":""},{"value":"서","roma":""},{"value":"세","roma":""},{"value":"셔","roma":""},{"value":"셰","roma":""},{"value":"소","roma":""},{"value":"솨","roma":""},{"value":"쇄","roma":""},{"value":"쇠","roma":""},{"value":"쇼","roma":""},{"value":"수","roma":""},{"value":"숴","roma":""},{"value":"쉐","roma":""},{"value":"쉬","roma":""},{"value":"슈","roma":""},{"value":"스","roma":""},{"value":"싀","roma":""},{"value":"시","roma":""}],[{"value":"ㅈ","roma":"j"},{"value":"자","roma":""},{"value":"재","roma":""},{"value":"쟈","roma":""},{"value":"쟤","roma":""},{"value":"저","roma":""},{"value":"제","roma":""},{"value":"져","roma":""},{"value":"졔","roma":""},{"value":"조","roma":""},{"value":"좌","roma":""},{"value":"좨","roma":""},{"value":"죄","roma":""},{"value":"죠","roma":""},{"value":"주","roma":""},{"value":"줘","roma":""},{"value":"줴","roma":""},{"value":"쥐","roma":""},{"value":"쥬","roma":""},{"value":"즈","roma":""},{"value":"즤","roma":""},{"value":"지","roma":""}],[{"value":"ㄲ","roma":"kk"},{"value":"까","roma":""},{"value":"깨","roma":""},{"value":"꺄","roma":""},{"value":"꺠","roma":""},{"value":"꺼","roma":""},{"value":"께","roma":""},{"value":"껴","roma":""},{"value":"꼐","roma":""},{"value":"꼬","roma":""},{"value":"꽈","roma":""},{"value":"꽤","roma":""},{"value":"꾀","roma":""},{"value":"꾜","roma":""},{"value":"꾸","roma":""},{"value":"꿔","roma":""},{"value":"꿰","roma":""},{"value":"뀌","roma":""},{"value":"뀨","roma":""},{"value":"끄","roma":""},{"value":"끠","roma":""},{"value":"끼","roma":""}],[{"value":"ㄸ","roma":"tt"},{"value":"따","roma":""},{"value":"때","roma":""},{"value":"땨","roma":""},{"value":"떄","roma":""},{"value":"떠","roma":""},{"value":"떼","roma":""},{"value":"뗘","roma":""},{"value":"뗴","roma":""},{"value":"또","roma":""},{"value":"똬","roma":""},{"value":"뙈","roma":""},{"value":"뙤","roma":""},{"value":"뚀","roma":""},{"value":"뚜","roma":""},{"value":"뚸","roma":""},{"value":"뛔","roma":""},{"value":"뛰","roma":""},{"value":"뜌","roma":""},{"value":"뜨","roma":""},{"value":"띄","roma":""},{"value":"띠","roma":""}],[{"value":"ㅃ","roma":"pp"},{"value":"빠","roma":""},{"value":"빼","roma":""},{"value":"뺘","roma":""},{"value":"뺴","roma":""},{"value":"뻐","roma":""},{"value":"뻬","roma":""},{"value":"뼈","roma":""},{"value":"뼤","roma":""},{"value":"뽀","roma":""},{"value":"뽜","roma":""},{"value":"뽸","roma":""},{"value":"뾔","roma":""},{"value":"뾰","roma":""},{"value":"뿌","roma":""},{"value":"뿨","roma":""},{"value":"쀄","roma":""},{"value":"쀠","roma":""},{"value":"쀼","roma":""},{"value":"쁘","roma":""},{"value":"쁴","roma":""},{"value":"삐","roma":""}],[{"value":"ㅆ","roma":"ss"},{"value":"싸","roma":""},{"value":"쌔","roma":""},{"value":"쌰","roma":""},{"value":"썌","roma":""},{"value":"써","roma":""},{"value":"쎄","roma":""},{"value":"쎠","roma":""},{"value":"쎼","roma":""},{"value":"쏘","roma":""},{"value":"쏴","roma":""},{"value":"쐐","roma":""},{"value":"쐬","roma":""},{"value":"쑈","roma":""},{"value":"쑤","roma":""},{"value":"쒀","roma":""},{"value":"쒜","roma":""},{"value":"쒸","roma":""},{"value":"쓔","roma":""},{"value":"쓰","roma":""},{"value":"씌","roma":""},{"value":"씨","roma":""}],[{"value":"ㅉ","roma":"jj"},{"value":"짜","roma":""},{"value":"째","roma":""},{"value":"쨔","roma":""},{"value":"쨰","roma":""},{"value":"쩌","roma":""},{"value":"쩨","roma":""},{"value":"쪄","roma":""},{"value":"쪠","roma":""},{"value":"쪼","roma":""},{"value":"쫘","roma":""},{"value":"쫴","roma":""},{"value":"쬐","roma":""},{"value":"쬬","roma":""},{"value":"쭈","roma":""},{"value":"쭤","roma":""},{"value":"쮀","roma":""},{"value":"쮜","roma":""},{"value":"쮸","roma":""},{"value":"쯔","roma":""},{"value":"쯰","roma":""},{"value":"찌","roma":""}],[{"value":"ㅋ","roma":"k"},{"value":"카","roma":""},{"value":"캐","roma":""},{"value":"캬","roma":""},{"value":"컈","roma":""},{"value":"커","roma":""},{"value":"케","roma":""},{"value":"켜","roma":""},{"value":"켸","roma":""},{"value":"코","roma":""},{"value":"콰","roma":""},{"value":"쾌","roma":""},{"value":"쾨","roma":""},{"value":"쿄","roma":""},{"value":"쿠","roma":""},{"value":"쿼","roma":""},{"value":"퀘","roma":""},{"value":"퀴","roma":""},{"value":"큐","roma":""},{"value":"크","roma":""},{"value":"킈","roma":""},{"value":"키","roma":""}],[{"value":"ㅌ","roma":"t"},{"value":"타","roma":""},{"value":"태","roma":""},{"value":"탸","roma":""},{"value":"턔","roma":""},{"value":"터","roma":""},{"value":"테","roma":""},{"value":"텨","roma":""},{"value":"톄","roma":""},{"value":"토","roma":""},{"value":"톼","roma":""},{"value":"퇘","roma":""},{"value":"퇴","roma":""},{"value":"툐","roma":""},{"value":"투","roma":""},{"value":"퉈","roma":""},{"value":"퉤","roma":""},{"value":"튀","roma":""},{"value":"튜","roma":""},{"value":"트","roma":""},{"value":"틔","roma":""},{"value":"티","roma":""}],[{"value":"ㅍ","roma":"p"},{"value":"파","roma":""},{"value":"패","roma":""},{"value":"퍄","roma":""},{"value":"퍠","roma":""},{"value":"퍼","roma":""},{"value":"페","roma":""},{"value":"펴","roma":""},{"value":"폐","roma":""},{"value":"포","roma":""},{"value":"퐈","roma":""},{"value":"퐤","roma":""},{"value":"푀","roma":""},{"value":"표","roma":""},{"value":"푸","roma":""},{"value":"풔","roma":""},{"value":"풰","roma":""},{"value":"퓌","roma":""},{"value":"퓨","roma":""},{"value":"프","roma":""},{"value":"픠","roma":""},{"value":"피","roma":""}],[{"value":"ㅊ","roma":"ch"},{"value":"차","roma":""},{"value":"채","roma":""},{"value":"챠","roma":""},{"value":"챼","roma":""},{"value":"처","roma":""},{"value":"체","roma":""},{"value":"쳐","roma":""},{"value":"쳬","roma":""},{"value":"초","roma":""},{"value":"촤","roma":""},{"value":"쵀","roma":""},{"value":"최","roma":""},{"value":"쵸","roma":""},{"value":"추","roma":""},{"value":"춰","roma":""},{"value":"췌","roma":""},{"value":"취","roma":""},{"value":"츄","roma":""},{"value":"츠","roma":""},{"value":"츼","roma":""},{"value":"치","roma":""}],[{"value":"ㄴ","roma":"n"},{"value":"나","roma":""},{"value":"내","roma":""},{"value":"냐","roma":""},{"value":"냬","roma":""},{"value":"너","roma":""},{"value":"네","roma":""},{"value":"녀","roma":""},{"value":"녜","roma":""},{"value":"노","roma":""},{"value":"놔","roma":""},{"value":"놰","roma":""},{"value":"뇌","roma":""},{"value":"뇨","roma":""},{"value":"누","roma":""},{"value":"눠","roma":""},{"value":"눼","roma":""},{"value":"뉘","roma":""},{"value":"뉴","roma":""},{"value":"느","roma":""},{"value":"늬","roma":""},{"value":"니","roma":""}],[{"value":"ㄹ","roma":"l"},{"value":"라","roma":""},{"value":"래","roma":""},{"value":"랴","roma":""},{"value":"럐","roma":""},{"value":"러","roma":""},{"value":"레","roma":""},{"value":"려","roma":""},{"value":"례","roma":""},{"value":"로","roma":""},{"value":"롸","roma":""},{"value":"뢔","roma":""},{"value":"뢰","roma":""},{"value":"료","roma":""},{"value":"루","roma":""},{"value":"뤄","roma":""},{"value":"뤠","roma":""},{"value":"뤼","roma":""},{"value":"류","roma":""},{"value":"르","roma":""},{"value":"릐","roma":""},{"value":"리","roma":""}],[{"value":"ㅁ","roma":"m"},{"value":"마","roma":""},{"value":"매","roma":""},{"value":"먀","roma":""},{"value":"먜","roma":""},{"value":"머","roma":""},{"value":"메","roma":""},{"value":"며","roma":""},{"value":"몌","roma":""},{"value":"모","roma":""},{"value":"뫄","roma":""},{"value":"뫠","roma":""},{"value":"뫼","roma":""},{"value":"묘","roma":""},{"value":"무","roma":""},{"value":"뭐","roma":""},{"value":"뭬","roma":""},{"value":"뮈","roma":""},{"value":"뮤","roma":""},{"value":"므","roma":""},{"value":"믜","roma":""},{"value":"미","roma":""}],[{"value":"ㅇ","roma":""},{"value":"아","roma":""},{"value":"애","roma":""},{"value":"야","roma":""},{"value":"얘","roma":""},{"value":"어","roma":""},{"value":"에","roma":""},{"value":"여","roma":""},{"value":"예","roma":""},{"value":"오","roma":""},{"value":"와","roma":""},{"value":"왜","roma":""},{"value":"외","roma":""},{"value":"요","roma":""},{"value":"우","roma":""},{"value":"워","roma":""},{"value":"웨","roma":""},{"value":"위","roma":""},{"value":"유","roma":""},{"value":"으","roma":""},{"value":"의","roma":""},{"value":"이","roma":""}],[{"value":"ㅎ","roma":"h"},{"value":"하","roma":""},{"value":"해","roma":""},{"value":"햐","roma":""},{"value":"햬","roma":""},{"value":"허","roma":""},{"value":"헤","roma":""},{"value":"혀","roma":""},{"value":"혜","roma":""},{"value":"호","roma":""},{"value":"화","roma":""},{"value":"홰","roma":""},{"value":"회","roma":""},{"value":"효","roma":""},{"value":"후","roma":""},{"value":"훠","roma":""},{"value":"훼","roma":""},{"value":"휘","roma":""},{"value":"휴","roma":""},{"value":"흐","roma":""},{"value":"희","roma":""},{"value":"히","roma":""}]]

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.korean-wrapper {
  font-size: 40px;
  width: 100vw;
  height: calc(100vh - 40px);
  overflow: scroll;
  text-align: center;
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

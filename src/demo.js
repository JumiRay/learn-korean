const tableHeader = [{"value":"ㅏ", roma:"a"}, {"value":"ㅐ", roma:"ae"}, {"value":"ㅑ", roma:"ya"}, {"value":"ㅒ", roma:"yae"},
    {"value":"ㅓ", roma:"eo"},{"value":"ㅔ", roma:"e"}, {"value":"ㅕ", roma:"yeo"}, {"value":"ㅖ", roma:"ye"},
    {"value":"ㅗ", roma:"o"}, {"value":"ㅘ", roma:"wa", component: ["ㅗ","ㅏ"]},
    {"value":"ㅙ", roma:"wae", component: ["ㅗ","ㅐ"]},
    {"value":"ㅚ", roma:"oe", component: ["ㅗ","ㅣ"]}, {"value":"ㅛ", roma:"yo"}, {"value":"ㅜ", roma:"u"},
    {"value":"ㅝ", roma:"wo",component: ["ㅜ","ㅓ"]},
    {"value":"ㅞ", roma:"we", component: ["ㅜ","ㅔ"]},
    {"value":"ㅟ", roma:"wi", component: ["ㅜ","ㅣ"]}, {"value":"ㅠ", roma:"yu"}, {"value":"ㅡ", roma:"eu"}, {"value":"ㅢ", roma:"ui", component: ["ㅡ", "ㅣ"]}, {"value":"ㅣ", roma:"i"}];

    const editorText = document.getElementById('editor')
    const shiftKeyBtn = document.getElementById('lovekr-left-shift')
    const spaceBtn = document.getElementById('lovekr-space')

    const tableContent = [[{"value":"ㄱ","roma":"g"},{"value":"가","roma":""},{"value":"개","roma":""},{"value":"갸","roma":""},{"value":"걔","roma":""},{"value":"거","roma":""},{"value":"게","roma":""},{"value":"겨","roma":""},{"value":"계","roma":""},{"value":"고","roma":""},{"value":"과","roma":""},{"value":"괘","roma":""},{"value":"괴","roma":""},{"value":"교","roma":""},{"value":"구","roma":""},{"value":"궈","roma":""},{"value":"궤","roma":""},{"value":"귀","roma":""},{"value":"규","roma":""},{"value":"그","roma":""},{"value":"긔","roma":""},{"value":"기","roma":""}],[{"value":"ㄷ","roma":"d"},{"value":"다","roma":""},{"value":"대","roma":""},{"value":"댜","roma":""},{"value":"댸","roma":""},{"value":"더","roma":""},{"value":"데","roma":""},{"value":"뎌","roma":""},{"value":"데","roma":""},{"value":"도","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"됴","roma":""},{"value":"두","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"듀","roma":""},{"value":"드","roma":""},{"value":"","roma":""},{"value":"디","roma":""}],[{"value":"ㅂ","roma":"b"},{"value":"바","roma":""},{"value":"배","roma":""},{"value":"뱌","roma":""},{"value":"뱨","roma":""},{"value":"버","roma":""},{"value":"베","roma":""},{"value":"벼","roma":""},{"value":"볘","roma":""},{"value":"보","roma":""},{"value":"봐","roma":""},{"value":"봬","roma":""},{"value":"뵈","roma":""},{"value":"뵤","roma":""},{"value":"부","roma":""},{"value":"붜","roma":""},{"value":"붸","roma":""},{"value":"뷔","roma":""},{"value":"뷰","roma":""},{"value":"브","roma":""},{"value":"븨","roma":""},{"value":"비","roma":""}],[{"value":"ㅅ","roma":"s"},{"value":"사","roma":""},{"value":"새","roma":""},{"value":"샤","roma":""},{"value":"섀","roma":""},{"value":"서","roma":""},{"value":"세","roma":""},{"value":"셔","roma":""},{"value":"셰","roma":""},{"value":"소","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"쇼","roma":""},{"value":"수","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"슈","roma":""},{"value":"스","roma":""},{"value":"","roma":""},{"value":"시","roma":""}],[{"value":"ㅈ","roma":"j"},{"value":"자","roma":""},{"value":"재","roma":""},{"value":"쟈","roma":""},{"value":"쟤","roma":""},{"value":"저","roma":""},{"value":"제","roma":""},{"value":"져","roma":""},{"value":"졔","roma":""},{"value":"조","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"죠","roma":""},{"value":"주","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"쥬","roma":""},{"value":"즈","roma":""},{"value":"","roma":""},{"value":"지","roma":""}],[{"value":"ㄲ","roma":"kk"},{"value":"까","roma":""},{"value":"깨","roma":""},{"value":"꺄","roma":""},{"value":"꺠","roma":""},{"value":"꺼","roma":""},{"value":"께","roma":""},{"value":"껴","roma":""},{"value":"꼐","roma":""},{"value":"꼬","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"꾜","roma":""},{"value":"꾸","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"뀨","roma":""},{"value":"끄","roma":""},{"value":"","roma":""},{"value":"끼","roma":""}],[{"value":"ㄸ","roma":"tt"},{"value":"따","roma":""},{"value":"때","roma":""},{"value":"땨","roma":""},{"value":"떄","roma":""},{"value":"떠","roma":""},{"value":"떼","roma":""},{"value":"뗘","roma":""},{"value":"뗴","roma":""},{"value":"또","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"뚀","roma":""},{"value":"뚜","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"뜌","roma":""},{"value":"뜨","roma":""},{"value":"","roma":""},{"value":"띠","roma":""}],[{"value":"ㅃ","roma":"pp"},{"value":"빠","roma":""},{"value":"빼","roma":""},{"value":"뺘","roma":""},{"value":"뺴","roma":""},{"value":"뻐","roma":""},{"value":"뻬","roma":""},{"value":"뼈","roma":""},{"value":"뼤","roma":""},{"value":"뽀","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"뾰","roma":""},{"value":"뿌","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"쀼","roma":""},{"value":"쁘","roma":""},{"value":"","roma":""},{"value":"삐","roma":""}],[{"value":"ㅆ","roma":"ss"},{"value":"싸","roma":""},{"value":"쌔","roma":""},{"value":"쌰","roma":""},{"value":"썌","roma":""},{"value":"써","roma":""},{"value":"쎄","roma":""},{"value":"쎠","roma":""},{"value":"쎼","roma":""},{"value":"쏘","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"쑈","roma":""},{"value":"쑤","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"쓔","roma":""},{"value":"쓰","roma":""},{"value":"","roma":""},{"value":"씨","roma":""}],[{"value":"ㅉ","roma":"jj"},{"value":"짜","roma":""},{"value":"째","roma":""},{"value":"쨔","roma":""},{"value":"쨰","roma":""},{"value":"쩌","roma":""},{"value":"쩨","roma":""},{"value":"쪄","roma":""},{"value":"쪠","roma":""},{"value":"쪼","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"쬬","roma":""},{"value":"쭈","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"쮸","roma":""},{"value":"쯔","roma":""},{"value":"","roma":""},{"value":"찌","roma":""}],[{"value":"ㅋ","roma":"k"},{"value":"카","roma":""},{"value":"캐","roma":""},{"value":"캬","roma":""},{"value":"컈","roma":""},{"value":"커","roma":""},{"value":"케","roma":""},{"value":"켜","roma":""},{"value":"켸","roma":""},{"value":"코","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"쿄","roma":""},{"value":"쿠","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"큐","roma":""},{"value":"크","roma":""},{"value":"","roma":""},{"value":"키","roma":""}],[{"value":"ㅌ","roma":"t"},{"value":"타","roma":""},{"value":"태","roma":""},{"value":"탸","roma":""},{"value":"턔","roma":""},{"value":"터","roma":""},{"value":"테","roma":""},{"value":"텨","roma":""},{"value":"톄","roma":""},{"value":"토","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"툐","roma":""},{"value":"투","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"튜","roma":""},{"value":"트","roma":""},{"value":"","roma":""},{"value":"티","roma":""}],[{"value":"ㅍ","roma":"p"},{"value":"파","roma":""},{"value":"패","roma":""},{"value":"퍄","roma":""},{"value":"퍠","roma":""},{"value":"퍼","roma":""},{"value":"페","roma":""},{"value":"펴","roma":""},{"value":"폐","roma":""},{"value":"포","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"표","roma":""},{"value":"푸","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"퓨","roma":""},{"value":"프","roma":""},{"value":"","roma":""},{"value":"피","roma":""}],[{"value":"ㅊ","roma":"ch"},{"value":"차","roma":""},{"value":"채","roma":""},{"value":"챠","roma":""},{"value":"챼","roma":""},{"value":"처","roma":""},{"value":"체","roma":""},{"value":"쳐","roma":""},{"value":"쳬","roma":""},{"value":"초","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"쵸","roma":""},{"value":"추","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"츄","roma":""},{"value":"츠","roma":""},{"value":"","roma":""},{"value":"치","roma":""}],[{"value":"ㄴ","roma":"n"},{"value":"나","roma":""},{"value":"내","roma":""},{"value":"냐","roma":""},{"value":"냬","roma":""},{"value":"너","roma":""},{"value":"네","roma":""},{"value":"녀","roma":""},{"value":"녜","roma":""},{"value":"노","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"뇨","roma":""},{"value":"누","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"뉴","roma":""},{"value":"느","roma":""},{"value":"","roma":""},{"value":"니","roma":""}],[{"value":"ㄹ","roma":"l"},{"value":"라","roma":""},{"value":"래","roma":""},{"value":"랴","roma":""},{"value":"럐","roma":""},{"value":"러","roma":""},{"value":"레","roma":""},{"value":"려","roma":""},{"value":"례","roma":""},{"value":"로","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"료","roma":""},{"value":"루","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"류","roma":""},{"value":"르","roma":""},{"value":"","roma":""},{"value":"리","roma":""}],[{"value":"ㅁ","roma":"m"},{"value":"마","roma":""},{"value":"매","roma":""},{"value":"먀","roma":""},{"value":"먜","roma":""},{"value":"머","roma":""},{"value":"메","roma":""},{"value":"며","roma":""},{"value":"몌","roma":""},{"value":"모","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"묘","roma":""},{"value":"무","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"뮤","roma":""},{"value":"므","roma":""},{"value":"","roma":""},{"value":"미","roma":""}],[{"value":"ㅇ","roma":""},{"value":"아","roma":""},{"value":"애","roma":""},{"value":"야","roma":""},{"value":"얘","roma":""},{"value":"어","roma":""},{"value":"에","roma":""},{"value":"여","roma":""},{"value":"예","roma":""},{"value":"오","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"요","roma":""},{"value":"우","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"유","roma":""},{"value":"으","roma":""},{"value":"","roma":""},{"value":"이","roma":""}],[{"value":"ㅎ","roma":"h"},{"value":"하","roma":""},{"value":"해","roma":""},{"value":"햐","roma":""},{"value":"햬","roma":""},{"value":"허","roma":""},{"value":"헤","roma":""},{"value":"혀","roma":""},{"value":"혜","roma":""},{"value":"호","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"효","roma":""},{"value":"후","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"","roma":""},{"value":"휴","roma":""},{"value":"흐","roma":""},{"value":"","roma":""},{"value":"히","roma":""}]]

    let lovebtn = [...document.querySelectorAll('.lovekr-key')]
    let loveKey = lovebtn.map(item => ({btn: item, html: item.innerHTML, shift: false}))
    shiftKeyBtn.click();
    loveKey = [...loveKey, ...lovebtn.map(item => ({btn: item, html: item.innerHTML, shift: true}))]
    shiftKeyBtn.click();
    const loveKeyClick = (key) => {
        if(key.shift) shiftKeyBtn.click();
        key.btn.click();
    }
    for (let j = 0; j< tableContent.length; j++) {
        const jndex = loveKey.findIndex(key => key.html.includes(tableContent[j][0].value))
        if (jndex > -1) {
            for (let i=0; i< tableHeader.length; i++) {
                if (tableHeader[i].component) {
                    const index1 = loveKey.findIndex(key => key.html.includes(tableHeader[i].component[0]))
                    const index2 = loveKey.findIndex(key => key.html.includes(tableHeader[i].component[1]))
                    if (index2 > -1 && index1 > -1) {
                        if(!tableContent[j][i+1].value) {
                            spaceBtn.click()
                            loveKeyClick(loveKey[jndex])
                            loveKeyClick(loveKey[index1])
                            loveKeyClick(loveKey[index2])
                            tableContent[j][i+1].value = editorText.value.split('').pop()
                        }
                    }
                } else {
                    const index = loveKey.findIndex(key => key.html.includes(tableHeader[i].value))
                    if (index > -1) {
                        if(!tableContent[j][i+1].value) {
                            spaceBtn.click()
                            loveKeyClick(loveKey[jndex])
                            loveKeyClick(loveKey[index])
                            tableContent[j][i+1].value = editorText.value.split('').pop()
                        }
                    }
                }

            }
        }
    }



    console.log(JSON.stringify(tableContent))




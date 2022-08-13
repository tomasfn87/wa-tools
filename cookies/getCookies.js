import colors from 'colors'

/* 1) Load function getCookiesAsObjArr and then run the command above on the browser console:
getCookiesAsObjArr(document.URL, document.cookie. 'decode')
*/

const getCookiesAsObjArr = (URL, cookie_str, process = 'none') => {
  const regex_url = /(https?:\/\/)(www.)?(.+)\/?/
  URL = URL.replace(regex_url, "$3")

  const regex_full_cookie = /([^=]+)=[^=](\S+);?\s?/g
  const cookies = cookie_str.match(regex_full_cookie)

  const regex_key_value = /^([^=]+)=(\S+)(;\s)?$/
  const cookiesAsObjArr = { URL: URL, cookies: [] }

  cookies.forEach(element => {
    cookiesAsObjArr.cookies.push({
      key: element.replace(regex_key_value, "$1"),
      value: element.replace(regex_key_value, "$2")
    })
  })
  process == 'decode' && cookiesAsObjArr.cookies.forEach(element => {
    element.value = decodeURIComponent(element.value)
  })
  return cookiesAsObjArr
}

/* 2) Load function printCookieAndURL and then run the command above on the browser console:
printCookieAndURL(document.URL, document.cookie, 1, 'decode')
*/

const printCookieAndURL = (URL, cookie, index='-', decode='none') => {
  let data = getCookiesAsObjArr(URL = URL, cookie = cookie, process = decode)
  console.log(`${index}) URL: ${data.URL}`)
  console.log(`${' '.repeat(String(index).length+2)}Cookies (${data.cookies.length}): {`)
  data.cookies.forEach((element, index) => {
    console.log(`     ${index+1}) ${element.key}: ${element.value.replaceAll(/&/g, '\n' + ' '.repeat(String(index).length+7) + ' '.repeat(element.key.length) + '& ')}${index < data.cookies.length - 1 ? ',' : ''}`)
  })
  console.log(`  }`)  
}

const printColoredCookieAndURL = (URL, cookie, index='-', decode='none') => {
  let data = getCookiesAsObjArr(URL = URL, cookie = cookie, process = decode)
  console.log(`${String(index).yellow}) URL: ${String(data.URL).brightGreen}`)
  console.log(`${' '.repeat(String(index).length+2)}Cookies (${String(data.cookies.length).brightGreen}): {`)
  data.cookies.forEach((element, index) => {
    console.log(`     ${String(index + 1).yellow}) ${element.key.green}: ${String(element.value.cyan).replaceAll(/&/g, '\n' + ' '.repeat(String(index).length+7) + ' '.repeat(element.key.length) + '& ')}${index < data.cookies.length - 1 ? ',' : ''}`)
  })
  console.log(`  }`)  
}

const cookiesAndURLs = [
  {
    cookie: '_octo=GH1.1.1130998117.1626027327; tz=America%2FSao_Paulo',
    URL: 'https://github.com/'
  },
  {
    cookie: '_gcl_au=1.1.1906796950.1655160999; _ga=GA1.3.233077739.1655160999; _gid=GA1.3.992325026.1655160999; _fbp=fb.2.1655160999226.674615363; OptanonConsent=isGpcEnabled=0&datestamp=Mon+Jun+13+2022+20%3A13%3A16+GMT-0300+(Hor%C3%A1rio+Padr%C3%A3o+de+Bras%C3%ADlia)&version=6.30.0&isIABGlobal=false&hosts=&consentId=1f71f2fc-4737-42de-8d92-5ded34eb69cd&interactionCount=1&landingPath=https%3A%2F%2Fwww.coca-cola.com.br%2F&groups=1%3A1%2C2%3A1%2C4%3A0; _gat_UA-176757580-1=1',
    URL: 'https://coca-cola.com.br/'
  },
  {
    cookie: 'abtest_stickness=3c3106c99d500000360def5b500200003d0a0000; _gcl_au=1.1.157456011.1655168652; _ga=GA1.3.1414512807.1655168653; _gid=GA1.3.1781585086.1655168653; _dc_gtm_UA-140135526-14=1; _fbp=fb.2.1655168653573.986301727',
    URL: 'https://itau.com.br/'
  },
  {
    cookie: 'templateVariant=AR; __utma=231852301.416056996.1655169359.1655169359.1655169359.1; __utmc=231852301; __utmz=231852301.1655169359.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmt=1; __utmb=231852301.3.9.1655169573810; OptanonAlertBoxClosed=2022-06-14T01:19:33.818Z; OptanonConsent=isIABGlobal=false&datestamp=Mon+Jun+13+2022+22%3A19%3A33+GMT-0300+(Hor%C3%A1rio+Padr%C3%A3o+de+Bras%C3%ADlia)&version=6.28.0&hosts=&consentId=aa717cf6-af76-4536-9778-c454f34a23d8&interactionCount=1&landingPath=NotLandingPage&groups=1%3A1%2C2%3A1',
    URL: 'https://cookiepedia.co.uk/'
  },
  {
    cookie: 'wide=1; PREF=tz=America.Sao_Paulo&f6=40000000&f4=4000000; SID=KwgtLv0f_oGtCTyHuzsccEPfCmUHwFrk0oEFMJ6Pxg0HSpm4qhblSk855yksUQfQLlcaNg.; APISID=GWEY0rRbGv_DqyjR/AjIIVAiTt3mAEwNVS; SAPISID=VdVf6So5kf1wuhEQ/AS34GxAk_wIi8Uoq2; __Secure-1PAPISID=VdVf6So5kf1wuhEQ/AS34GxAk_wIi8Uoq2; __Secure-3PAPISID=VdVf6So5kf1wuhEQ/AS34GxAk_wIi8Uoq2; SIDCC=AJi4QfFtiTZ8p3IbHULfDgHgDKSMZ3bSUPUz11YIQr2R53TCTpT62OTvNW6cCANq5VLVNDEXoY0',
    URL: 'https://www.youtube.com/'
  }
]

let text = 'Codificado, sem coloração:'
console.log(text)
console.log('-'.repeat(text.trim().length) + '\n')
cookiesAndURLs.forEach((element, index) => {
  printCookieAndURL(element.URL, element.cookie, index+1)
  index != cookiesAndURLs.length-1 && console.log()
})
console.log('\n')
text = 'Decodificado e colorido:'
console.log(text)
console.log('-'.repeat(text.trim().length) + '\n')
cookiesAndURLs.forEach((element, index) => {
  printColoredCookieAndURL(element.URL, element.cookie, index+1, 'decode')
  index != cookiesAndURLs.length-1 && console.log()
})


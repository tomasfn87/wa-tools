const getCookiesAsObjArr = (url, cookie_str) => {
  regex_url = /(https?:\/\/)(www.)?(.+)\/?/
  url = url.replace(regex_url, "$3")

  regex_full_cookie = /([^=]+)={1}(\S+);?\s?/g
  cookies = cookie_str.match(regex_full_cookie)

  regex_key_value = /^([^=]+)={1}(\S+)(;\s)?$/
  cookiesAsObjArr = { url: url, cookies: [] }

  cookies.forEach(i => {
    cookiesAsObjArr['cookies'].push({
      key: i.replace(regex_key_value, "$1"),
      value: i.replace(regex_key_value, "$2")
    })
  })

  return cookiesAsObjArr
}

/* Load function getCookiesAsObjArr and then run the command above on the browser console:
getCookiesAsObjArr(document.URL, document.cookie)
*/

a = '_octo=GH1.1.1130998117.1626027327; tz=America%2FSao_Paulo'
b = '_gcl_au=1.1.1906796950.1655160999; _ga=GA1.3.233077739.1655160999; _gid=GA1.3.992325026.1655160999; _fbp=fb.2.1655160999226.674615363; OptanonConsent=isGpcEnabled=0&datestamp=Mon+Jun+13+2022+20%3A13%3A16+GMT-0300+(Hor%C3%A1rio+Padr%C3%A3o+de+Bras%C3%ADlia)&version=6.30.0&isIABGlobal=false&hosts=&consentId=1f71f2fc-4737-42de-8d92-5ded34eb69cd&interactionCount=1&landingPath=https%3A%2F%2Fwww.coca-cola.com.br%2F&groups=1%3A1%2C2%3A1%2C4%3A0; _gat_UA-176757580-1=1'
c = 'abtest_stickness=3c3106c99d500000360def5b500200003d0a0000; _gcl_au=1.1.157456011.1655168652; _ga=GA1.3.1414512807.1655168653; _gid=GA1.3.1781585086.1655168653; _dc_gtm_UA-140135526-14=1; _fbp=fb.2.1655168653573.986301727'
d = 'templateVariant=AR; __utma=231852301.416056996.1655169359.1655169359.1655169359.1; __utmc=231852301; __utmz=231852301.1655169359.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmt=1; __utmb=231852301.3.9.1655169573810; OptanonAlertBoxClosed=2022-06-14T01:19:33.818Z; OptanonConsent=isIABGlobal=false&datestamp=Mon+Jun+13+2022+22%3A19%3A33+GMT-0300+(Hor%C3%A1rio+Padr%C3%A3o+de+Bras%C3%ADlia)&version=6.28.0&hosts=&consentId=aa717cf6-af76-4536-9778-c454f34a23d8&interactionCount=1&landingPath=NotLandingPage&groups=1%3A1%2C2%3A1'
e = 'wide=1; PREF=tz=America.Sao_Paulo&f6=40000000&f4=4000000; SID=KwgtLv0f_oGtCTyHuzsccEPfCmUHwFrk0oEFMJ6Pxg0HSpm4qhblSk855yksUQfQLlcaNg.; APISID=GWEY0rRbGv_DqyjR/AjIIVAiTt3mAEwNVS; SAPISID=VdVf6So5kf1wuhEQ/AS34GxAk_wIi8Uoq2; __Secure-1PAPISID=VdVf6So5kf1wuhEQ/AS34GxAk_wIi8Uoq2; __Secure-3PAPISID=VdVf6So5kf1wuhEQ/AS34GxAk_wIi8Uoq2; SIDCC=AJi4QfFtiTZ8p3IbHULfDgHgDKSMZ3bSUPUz11YIQr2R53TCTpT62OTvNW6cCANq5VLVNDEXoY0'

console.log(getCookiesAsObjArr('https://github.com/', a))
console.log(getCookiesAsObjArr('https://coca-cola.com.br/', b))
console.log(getCookiesAsObjArr('https://itau.com.br/', c))
console.log(getCookiesAsObjArr('https://cookiepedia.co.uk/', d))
console.log(getCookiesAsObjArr('https://www.youtube.com/', e))
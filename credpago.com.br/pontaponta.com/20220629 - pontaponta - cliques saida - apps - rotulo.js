() => {
    const click_url = '{{Click URL}}'
    const reAndroid = /https:\/\/play.google.com\/store\/apps\/\S*ponta?aponta\.?credpago\S*/igm
    const reIOS = /https:\/\/apps.apple.com\/\S*pontaponta\S*/igm

    if (reAndroid.test(click_url)) {
        return 'Android'
    } else if (reIOS.test(click_url)) {
        return 'iOS'
    }
}
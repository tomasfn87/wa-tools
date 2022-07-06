() => {
    const click_url = '{{Click URL}}'
    const reYouTubeUrl = /(https?:\/\/)?(www\.)?((m\.)?youtube.com|youtu.be)\/(o?embed\/|watch\?v=)?([0-9A-Za-z_-]{10}[048AEIMQUYcgkosw])([\?&]\S*)*/
    const reYouTubeVideoID = /[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]/
    let video_id
    
    if (reYouTubeUrl.test(click_url)) {
        video_id = click_url.replace(reYouTubeUrl, '$6')
    }
    if (reYouTubeVideoID.test(video_id)) {
        return 'youtu.be/' + video_id;
    }
    return click_url
}

// teste
(() => {
    const reYouTubeUrl = /(https?:\/\/)?(www\.)?((m\.)?youtube.com|youtu.be)\/(o?embed\/|watch\?v=)?([0-9A-Za-z_-]{10}[048AEIMQUYcgkosw])([\?&]\S*)*/
    const reYouTubeVideoID = /[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]/

    const test_list = [
        'https://www.youtube.com/embed/52uLdhW6qFk?enablejsapi=1&origin=https%3A%2F%2Fpontaponta.com',
        'https://www.youtube.com/embed/52uLdhW6qFk?',
        'https://www.youtube.com/watch?v=52uLdhW6qFk&',
        'https://www.youtube.com/embed/52uLdhW6qFk',
        'https://www.youtube.com/oembed/52uLdhW6qFk',
        'https://www.youtube.com/watch?v=52uLdhW6qFk&feature=emb_imp_woyt',
        'https://www.youtube.com/watch?v=52uLdhW6qFk',
        'https://youtube.com/watch?v=52uLdhW6qFk',
        'https://m.youtube.com/watch?v=52uLdhW6qFk',
        'http://youtube.com/embed/52uLdhW6qFk',
        'www.youtube.com/watch?v=52uLdhW6qFk',
        'youtube.com/watch?v=52uLdhW6qFk',
        'https://www.youtu.be/52uLdhW6qFk',
        'https://youtu.be/52uLdhW6qFk',
        'youtu.be/52uLdhW6qFk'
    ]

    const test_yt_shorten_url = (n, click_url) => {
        console.log(' * Teste #'+String(Number(n)+1)+':')
        let video_id;
        if (reYouTubeUrl.test(click_url)) {
            video_id = click_url.replace(reYouTubeUrl, '$6')
        }
        let message = 'de: ' + click_url + '\npara: '
        if (reYouTubeVideoID.test(video_id)) {
            console.log(message + '(Ok) youtu.be/' + video_id);
        } else {
            console.log(message + '(RegEx não pegou) ' + click_url)
        }
    }
    test_list.forEach((t, i) => {
        i > 0 && console.log()
        test_yt_shorten_url(i, t)
    })
})()
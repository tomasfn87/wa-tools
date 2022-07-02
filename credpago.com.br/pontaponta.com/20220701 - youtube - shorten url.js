() => {
    const click_url = '{{Click URL}}'
    const reYouTubeUrl = /(https?:\/\/)?(www\.)?youtube.com\/(embed\/|watch\?v=)([a-z0-9]{5,15})([\?&]\S*)*/i
    let video_id
    
    if (reYouTubeUrl.test(click_url)) {
        video_id = click_url.replace(reYouTubeUrl, '$4')
    }
    if (video_id) {
        return 'youtu.be/' + video_id;
    }
    return click_url
}

// teste
(() => {
    const reYouTubeUrl = /(https?:\/\/)?(www\.)?youtube.com\/(embed\/|watch\?v=)([a-z0-9]{5,15})([\?&]\S*)*/i

    const test_list = [
        'https://www.youtube.com/embed/52uLdhW6qFk?enablejsapi=1&origin=https%3A%2F%2Fpontaponta.com',
        'https://www.youtube.com/embed/52uLdhW6qFk?',
        'https://www.youtube.com/embed/52uLdhW6qFk&',
        'https://www.youtube.com/embed/52uLdhW6qFk',
        'https://www.youtube.com/watch?v=52uLdhW6qFk&feature=emb_imp_woyt',
        'https://www.youtube.com/watch?v=52uLdhW6qFk',
        'https://youtube.com/watch?v=52uLdhW6qFk',
        'http://youtube.com/embed/52uLdhW6qFk',
        'www.youtube.com/watch?v=52uLdhW6qFk',
        'youtube.com/watch?v=52uLdhW6qFk'
    ]

    const test_yt_shorten_url = (n, click_url) => {
        console.log(' * Teste #'+String(Number(n)+1)+':')
        let video_id;
        if (reYouTubeUrl.test(click_url)) {
            video_id = click_url.replace(reYouTubeUrl, '$4')
        }
        let message = 'de: ' + click_url + '\npara: '
        if (video_id) {
            console.log(message + '(if) youtu.be/' + video_id);
        } else {
            const Click_url = click_url.replace('https://www.youtube.com/watch?v=', 'youtu.be')
            console.log(message + '(else) ' + Click_url.replace('https://www.youtube.com/embed/', 'youtu.be'))
        }
    }
    test_list.forEach((t, i) => {
        i > 0 && console.log()
        test_yt_shorten_url(i, t)
    })
})()
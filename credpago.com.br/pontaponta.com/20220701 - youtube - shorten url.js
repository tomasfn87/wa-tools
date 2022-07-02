() => {
    let click_url = '{{Click URL}}'
    const reYouTubeEmbedUrl = /https?:\/\/www\.?youtube.com\/.*?embed\/([^?]+)(\?\S*)?/
    const reYouTubeUrl = /https?:\/\/www\.youtube.com\/watch\?v=([^&]*)&?((feature\S+))*/
    let video_id
    
    if (reYouTubeEmbedUrl.test(click_url)) {
        video_id = click_url.replace(reYouTubeEmbedUrl, '$1')
    }
    else if (reYouTubeUrl.test(click_url)) {
        video_id = click_url.replace(reYouTubeUrl, '$1')
    }
    if (video_id) {
        return 'youtu.be/' + video_id;
    }
    return click_url.replace('https://www.youtube.com', 'youtu.be')
}

// teste
(() => {
    const reYouTubeEmbedUrl = /https?:\/\/www\.?youtube.com\/.*?embed\/([^?]+)\?\S*/
    const reYouTubeUrl = /https?:\/\/www\.youtube.com\/watch\?v=([^&]*)&?((feature\S+))*/

    const test_list = [
        'https://www.youtube.com/embed/52uLdhW6qFk?enablejsapi=1&origin=https%3A%2F%2Fpontaponta.com',
        'https://www.youtube.com/watch?v=52uLdhW6qFk&feature=emb_imp_woyt',
        'https://www.youtube.com/watch?v=52uLdhW6qFk'
    ]

    const test_yt_shorten_url = (n, click_url) => {
        console.log(' * Teste #'+String(Number(n)+1)+':')
        let video_id;
        if (reYouTubeEmbedUrl.test(click_url)) {
        video_id = click_url.replace(reYouTubeEmbedUrl, '$1')
        }
        else if (reYouTubeUrl.test(click_url)) {
            video_id = click_url.replace(reYouTubeUrl, '$1')
        }
        let message = 'de: ' + click_url + '\npara: '
        if (video_id) {
            console.log(message + '(if) youtu.be/' + video_id);
        } else {
            console.log(message + '(else) ' + click_url.replace('https://www.youtube.com', 'youtu.be'))
        }
    }
    test_list.forEach((t, i) => {
        i > 0 && console.log()
        test_yt_shorten_url(i, t)
    })
})()
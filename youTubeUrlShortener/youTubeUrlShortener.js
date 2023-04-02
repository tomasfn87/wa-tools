const youTubeUrlShortener = (ytUrl) => {
    if (!ytUrl) return "";
    const reYouTubeUrl = /(https?:\/\/)?(www\.)?((m\.)?youtube.com|youtu.be)\/(o?embed\/|watch\?v=)?([0-9A-Za-z_-]{10}[048AEIMQUYcgkosw])([\?&]\S*)*/;
    const reYouTubeVideoID = /[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]/;
    let video_id;
    if (reYouTubeUrl.test(ytUrl)) {
        video_id = ytUrl.replace(reYouTubeUrl, '$6');
    }
    if (reYouTubeVideoID.test(video_id)) {
        return 'youtu.be/' + video_id;
    }
    return ytUrl;
}

export default youTubeUrlShortener;

if (process.argv.length > 2) {
    let youTubeUrl = process.argv[2];
    console.log("https://" + youTubeUrlShortener(youTubeUrl));
}
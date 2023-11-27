import { runTestArray } from './runTestArray.js'
import youTubeUrlShortener from '../youTubeUrlShortener.js'

const r = "youtu.be/I845O57ZSy4"; [
    {
        title:   'YouTube URL Shortener (youTubeUrlShortener)',
        fn:      youTubeUrlShortener,
        testArr: [
            {
                value: "https://www.youtube.com/embed/I845O57ZSy4?enablejsapi=1&origin=https%3A%2F%2Ftest.com",
                result: r
            },
            {
                value: "https://www.youtube.com/watch?v=I845O57ZSy4&feature=emb_imp_woyt",
                result: r
            },
            {
                value: "https://www.youtube.com/watch?v=I845O57ZSy4&",
                result: r
            },
            {
                value: "https://www.youtube.com/watch?v=I845O57ZSy4",
                result: r
            },
            {
                value: "https://www.youtube.com/embed/I845O57ZSy4?",
                result: r
            },
            {
                value: "https://www.youtube.com/oembed/I845O57ZSy4",
                result: r
            },
            {
                value: "https://m.youtube.com/watch?v=I845O57ZSy4",
                result: r
            },
            {
                value: "https://www.youtube.com/embed/I845O57ZSy4",
                result: r
            },
            {
                value: "https://youtube.com/watch?v=I845O57ZSy4",
                result: r
            },
            {
                value: "http://youtube.com/embed/I845O57ZSy4",
                result: r
            },
            {
                value: "https://www.youtu.be/I845O57ZSy4",
                result: r
            },
            {
                value: "youtube.com/watch?v=I845O57ZSy4",
                result: r
            },
            {
                value: "https://youtu.be/I845O57ZSy4",
                result: r
            },
            {
                value: r,      result: r
            },
            {
                value: "test", result: 'test'
            },
            {
                value: '',     result: ''
            }
        ]
    }
].forEach(e => runTestArray( e.title, e.fn, e.testArr ))


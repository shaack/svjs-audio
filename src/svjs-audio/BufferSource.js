/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/svjs-audio
 * License: MIT, see file 'LICENSE'
 */

import {Audio} from "./Audio.js"

export class BufferSource {

    constructor(url, gain = 1) {
        this.url = url
        this.gainNode = Audio.getContext().createGain()
        this.gainNode.gain.value = gain
        this.audioBuffer = null
    }

    setGain(gain) {
        this.gainNode.gain.value = gain
    }

    async play() {
        await this.loading
        let source
        if (this.audioBuffer) {
            source = this.createBufferSource()
            source.start()
        } else {
            this.load(() => {
                source = this.createBufferSource()
                source.start()
            })
        }

    }

    createBufferSource() {
        const source = Audio.getContext().createBufferSource()
        source.buffer = this.audioBuffer
        source.connect(this.gainNode)
        this.gainNode.connect(Audio.getOutput())
        return source
    }

    load() {
        this.loading = new Promise(((resolve, reject) => {
            const request = new XMLHttpRequest()
            request.open('GET', this.url, true)
            request.responseType = 'arraybuffer'
            request.onload = () => {
                Audio.getContext().decodeAudioData(request.response, (audioBuffer) => {
                    this.audioBuffer = audioBuffer
                    resolve()
                }, () => {
                    console.error("error loading sound", this.url)
                    reject()
                })
            }
            request.send()
        }))

    }

}
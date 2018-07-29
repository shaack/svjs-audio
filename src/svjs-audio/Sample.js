/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/svjs-audio
 * License: MIT, see file 'LICENSE'
 */

import {Audio} from "./Audio.js"

export class Sample {

    constructor(src, props = {}) {
        this.src = src
        this.props = {
            gain: 1
        }
        Object.assign(this.props, props)
        this.gainNode = Audio.getContext().createGain()
        this.gainNode.gain.value = this.props.gain
        this.audioBuffer = null
    }

    setGain(gain) {
        this.gainNode.gain.value = gain
    }

    play() {
        let source
        if (this.audioBuffer) {
            source = this.createBufferSource()
            source.start()
        } else {
            this.load().then(() => {
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
            request.open('GET', this.src, true)
            request.responseType = 'arraybuffer'
            request.onload = () => {
                Audio.getContext().decodeAudioData(request.response, (audioBuffer) => {
                    this.audioBuffer = audioBuffer
                    console.log(audioBuffer.getChannelData(0))
                    resolve()
                }, () => {
                    console.error("error loading sound", this.src)
                    reject()
                })
            }
            request.send()
        }))
        return this.loading
    }

}
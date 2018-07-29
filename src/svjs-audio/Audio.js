/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/svjs-audio
 * License: MIT, see file 'LICENSE'
 */

window.AudioContext = window.AudioContext || window.webkitAudioContext

const audioContext = new AudioContext()
const mainGainNode = audioContext.createGain()
mainGainNode.gain.value = 1
mainGainNode.connect(audioContext.destination)

export class Audio {

    static getContext() {
        return audioContext
    }

    static setGain(gain) {
        mainGainNode.gain.value = gain
    }

    static getOutput() {
        return mainGainNode
    }

}
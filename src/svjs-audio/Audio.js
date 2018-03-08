/**
 * Author: shaack
 * Date: 05.02.2018
 */

window.AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();
const mainGainNode = audioContext.createGain();
mainGainNode.gain.value = 1;
mainGainNode.connect(audioContext.destination);

export class Audio {

    static getContext() {
        return audioContext;
    }

    static setGain(gain) {
        mainGainNode.gain.value = gain;
    }

    static getOutput() {
        return mainGainNode;
    }

}
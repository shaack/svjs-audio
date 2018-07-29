# svjs-audio

Simple ES6 Module around the [Web Audio API](https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API).
For playing audio samples in a web page.

## Play a Sample

```html
<script type="module">
    import {Sample}  from "./node_modules/svjs-audio/src/svjs-audio/Sample
    // Parameters are: File URL, gain (0-1)
    const gameStartSound = new Sample("/assets/sounds/game_start.mp3", {
        gain: 0.7
    })
    gameStartSound.play();
</script>
```

`Sample` also has a `setGain(gain)` method to change the gain after creation.
`Audio`, the wrapper around the `AudioContext` has a static `setGain(gain)` method to set the main gain
of all sounds.

## Use an AudioSprite

```js
const audioSprite = new AudioSprite("./assets/sound/test_sprite.mp3",
    {
        slices: {
            "blip": {offset: 0, duration: 0.45},
            "plong": {offset: 0.45, duration: 0.45},
            "whoop": {offset: 0.9, duration: 0.45}
        }
    })
document.getElementById("play-blip").addEventListener("mousedown", () => {
    audioSprite.play("blip")
})
document.getElementById("play-plong").addEventListener("mousedown", () => {
    audioSprite.play("plong")
})
document.getElementById("play-whoop").addEventListener("mousedown", () => {
    audioSprite.play("whoop")
})
```
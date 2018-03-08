# svjs-audio

Simple ES6 Module around the [Web Audio API](https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API).
For playing audio samples in a web page.

## Example Usage

```html
<script type="module">
    import {BufferSource}  from "./node_modules/svjs-audio/src/svjs-audio/BufferSource.js";

    // Parameters are: File URL, gain (0-1)
    const gameStartSound = new BufferSource("/assets/sounds/game_start.mp3", 0.7):
    gameStartSound.play();
</script>
```

BufferSource also has a `setGain(gain)` method to change the gain after creation.
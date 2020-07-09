Deprecated, moved to https://github.com/shaack/cm-web-modules

# svjs-audio

Simple ES6 Module around the [Web Audio API](https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API).
For playing audio samples in a web page.

[Demo Page](https://shaack.com/projekte/svjs-audio)

## Documentation

### Sample

#### constructor(src, props?)

The parameter props is optional, the only property for now is `gain`.

```js
props = {
    gain: 1 // sets the gain (volume) of the sample, default is "1"
}
```

#### setGain(value)

Set the gain of the sample after creation.

#### play(when?, offset?, duration?)

Play the Sample. Parameters are optional.

### AudioSprite

#### constructor(src, props)

```js
props = {
    gain: 1, // optional, sets the gain (volume) of the sprite, default is "1"
    slices: { // define the slices in the sprite-file
        "sliceName1": {offset: 0, duration: 0.5},
        "sliceName2": {offset: 0.5, duration: 0.5}
        // [...]
    }
}
```

#### play(sliceName)

Play the slice named `sliceName`.

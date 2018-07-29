import {Sample} from "./Sample.js"

/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/svjs-audio
 * License: MIT, see file 'LICENSE'
 */

export class AudioSprite extends Sample {

    play(sliceName, when = 0) {
        const slice = this.props.slices[sliceName]
        if (!slice) {
            throw new Error(`slice ${sliceName} not found in sprite`)
        }
        super.play(when, slice.offset, slice.duration)
    }

}
import {getEnableSound} from 'neuroglancer/preferences/user_preferences';

// Current sound effects come from Meta Design Sound Kit.
// License https://design.facebook.com/soundkitlicense/

function playSound(src: string) {
    if (getEnableSound().value) {
        const audio = document.createElement("audio");
        audio.setAttribute("src", src)
        audio.setAttribute("autoplay", "true");
        audio.play();
        audio.remove();
    }
}

export const playSoundSplitSuccess = () => {
    playSound("https://microns-neuvue-datalake.s3.amazonaws.com/public/success.m4a");
}

export const playSoundMergeSuccess = () => {
    playSound("https://microns-neuvue-datalake.s3.amazonaws.com/public/success2.m4a");
}

export const playSoundError = () => {
    if (Math.random() < 0.05) {
        playSound("https://microns-neuvue-datalake.s3.amazonaws.com/public/meep_merp.mp3");
    }
    playSound("https://microns-neuvue-datalake.s3.amazonaws.com/public/error.m4a");
}


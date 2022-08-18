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
    playSound("https://neuvue-public-data.s3.amazonaws.com/success.m4a");
}

export const playSoundMergeSuccess = () => {
    playSound("https://neuvue-public-data.s3.amazonaws.com/success2.m4a");
}

export const playSoundError = () => {
    if (Math.random() < 0.05) {
        playSound("https://neuvue-public-data.s3.amazonaws.com/meep_merp.mp3");
    }
    playSound("https://neuvue-public-data.s3.amazonaws.com/error.m4a");
}


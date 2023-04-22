import { between } from 'polished';
import { maxWidth } from './constants';

export const createFontRules = (
    minFontSize,
    minLineHeight,
    maxFontSize = null,
    maxLineHeight = null,
) => {
    const minScreen = 320, maxScreen = maxWidth;

    return `
        ${maxFontSize
            ? `font-size: clamp(${minFontSize}px, ${between(
                minFontSize + 'px', maxFontSize + 'px', minScreen + 'px', maxScreen + 'px'
            )}, ${maxFontSize}px);`
            : `font-size: ${minFontSize}px;`
        }
        ${maxLineHeight
            ? `line-height: clamp(${minLineHeight}px, ${between(
                minLineHeight + 'px', maxLineHeight + 'px', minScreen + 'px', maxScreen + 'px'
            )}, ${maxLineHeight}px);`
            : `line-height: ${minLineHeight}px;`
        }
    `;
}

export const createClamp = (min, max, minScreen = 320, maxScreen = 1600) => {
    if (max < 0) {
        return `clamp(${min}px, ${between(max + 'px', min + 'px', minScreen + 'px', maxScreen + 'px')}, ${max}px)`;
    }
    else {
        return `clamp(${min}px, ${between(min + 'px', max + 'px', minScreen + 'px', maxScreen + 'px')}, ${max}px)`
    }
}

export const anchorTo = (id) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'instant' });
};

export const debounce = (method, delay, event) => {
    clearTimeout(method._timerID);
    method._timerID = setTimeout(() => {
        method(event);
    }, delay);
};

export const throttle = (method, frequency) => {
    let wait = false;

    return (...args) => {
        if (wait) {
            return;
        }

        method(...args);
        wait = true;
        setTimeout(() => {
            wait = false;
        }, frequency);
    }
}
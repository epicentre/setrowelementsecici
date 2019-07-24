import {COPY_BUTTON_TEXT, TOGGLE_POSITION_BUTTON_TEXT} from './constants';
import { copyToClipboard } from "./clipboard";

export const getCopyButton = global => {
    const copyButton = document.createElement("button");
    copyButton.innerHTML = COPY_BUTTON_TEXT;
    copyButton.className =  'ses_button';
    copyButton.addEventListener('click', function() {
        let text = global.selectorTextElem.value;
        if (text.trim() !== '') {
            copyToClipboard(text);
            console.log("Setrow Selector Seçici: Panoya Kopyalanan Değer: " + text);
        }
    });

    return copyButton;
};

export const getTogglePositionButton = global => {
    const getTogglePositionButton = document.createElement('button');
    getTogglePositionButton.innerHTML = TOGGLE_POSITION_BUTTON_TEXT;
    getTogglePositionButton.className =  'ses_button';
    getTogglePositionButton.addEventListener('click', function() {
        if (global.actionBar.classList.contains('gs_bottom')) {
            global.actionBar.classList.remove('gs_bottom');
            global.actionBar.classList.add('gs_top');
        } else {
            global.actionBar.classList.add('gs_bottom');
            global.actionBar.classList.remove('gs_top');
        }
    });

    return getTogglePositionButton;
};

export const getSelectorTextElem = global => {
    const selectorTextElem = document.createElement("input");
    selectorTextElem.type = "text";
    selectorTextElem.className =  'ses_text_elem';

    return selectorTextElem;
};

export const getSelectParentElButton = global => {
    const selectParentElButton = document.createElement('button');
    selectParentElButton.className =  'ses_button';

    let childEl = document.createElement('span');
    childEl.className = 'ses_arrow-up';
    selectParentElButton.appendChild(childEl);
    
    selectParentElButton.addEventListener('click', function() {
        global.selectParentElement();
    });

    return selectParentElButton;
};
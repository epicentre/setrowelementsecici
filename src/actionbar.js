import {INFO_MESSAGE} from './constants';

export const showActionBar = (global) => {
  global.actionBar.classList.toggle("gs_show", true);
};

export const hideActionBar = global => {
  global.actionBar.classList.toggle("gs_show", false);
};

export const initActionBar = global => {
  global.actionBar = document.createElement("div");
  global.actionBar.className = "ses_container gs_bottom";

  const actionElems = document.createElement('div');
  actionElems.className = 'ses_actions';

  const infoElem = document.createElement('div');
  infoElem.className = 'ses_subtitle_message';
  infoElem.innerHTML = INFO_MESSAGE;

  actionElems.appendChild(global.selectorTextElem);
  actionElems.appendChild(global.selectParentElButton);
  actionElems.appendChild(global.copyButton);
  actionElems.appendChild(global.reSelectButton);

  global.actionBar.appendChild(actionElems);
  global.actionBar.appendChild(infoElem);

  document.body.appendChild(global.actionBar);
};

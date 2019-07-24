import finder from "@medv/finder";
import debounce from "lodash/debounce";
import { addStyle } from "./addStyle";
import { initActionBar, showActionBar, hideActionBar } from "./actionbar";
import { STYLES } from './constants';
import {getCopyButton, getTogglePositionButton, getSelectorTextElem, getSelectParentElButton} from './actionelements';

const clearHoveredClass = el => el && el.classList.remove("ses_hover");
const clearSelectedClass = el => el && el.classList.remove("ses_selected");

export const toggle = global => {
  const state = !global.state;
  global.state = state;
  const action = state ? "addEventListener" : "removeEventListener";
  document[action]("mouseover", global.hoverFunc);
  document[action]("mouseout", global.clearHoveredClassDebounce);

  if (state) {
    showActionBar(global);
  } else {
    clearHoveredClass(global.hoveredEl);
    clearSelectedClass(global.selectedEl);
    hideActionBar(global);
  }
};

export const init = global => {
  global.isInit = true;
  global.actionBar = null;
  global.hoveredEl = null;
  global.selectedEl = null;

  global.clearHoveredClassDebounce = debounce(
    () => clearHoveredClass(global.hoveredEl),
    200
  );

  global.hoverFunc = debounce(e => {
    let el = e.target;

    if (el.closest('.ses_container')) {
      return;
    }

    if (global.hoveredEl !== el) {
      clearHoveredClass(global.hoveredEl);
    }
    global.hoveredEl = el;
    const hoveredEl = global.hoveredEl;
    hoveredEl.classList.add("ses_hover");
  }, 200);

  global.selectElement = (el = global.hoveredEl) => {
    if (!el) {
      return;
    }

    if (global.selectedEl !== el) {
      clearSelectedClass(global.selectedEl);
    }
    global.selectedEl = el;
    const selectedEl = global.selectedEl;
    selectedEl.classList.add("ses_selected");

    const selectorText = finder(selectedEl, {
      root: document.body,
      className: (name) => name !== 'ses_hover' && name !== 'ses_selected',
      tagName: (name) => true,
      attr: (name, value) => false,
      seedMinLength: 1,
      optimizedMinLength: 2,
      threshold: 1000
    });
    global.selectorTextElem.value = selectorText;
  };

  global.selectParentElement = () => {
    let el = global.selectedEl;
    let parentElement = el && el.parentElement;
    if (parentElement) {
      global.selectElement(parentElement);
    }
  }

  global.copyButton = getCopyButton(global);
  global.reSelectButton = getTogglePositionButton(global);
  global.selectorTextElem = getSelectorTextElem(global);
  global.selectParentElButton = getSelectParentElButton(global);

  addStyle(STYLES);
  initActionBar(global); 
  showActionBar(global);
};

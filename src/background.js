const getState = tabId =>
  new Promise(resolve => {
    chrome.tabs.executeScript(
      tabId,
      {
        code: "window.__gs && window.__gs.state"
      },
      result => resolve(result && result[0])
    );
  });

const selectElement = (tabId) =>
  chrome.tabs.executeScript(tabId, {
    code: "window.__gs && window.__gs.selectElement()"
  });

const updateIcon = isPressed =>
  chrome.browserAction.setIcon({
    path: `icon_128${isPressed ? "_pressed" : ""}.png`
  });

!(() => {
  const MENU_ID = "SETROWELEMENTSEC";


  const toggle = async () => {
    const state = await getState(selectedTabId);
    updateIcon(state);
  
    if (state) {
      chrome.contextMenus.create({
        id: MENU_ID,
        title: "Elementi Seç",
        contexts: ["all"],
        documentUrlPatterns: ["*://*/*"],
        onclick: e => {
          if (e.menuItemId !== MENU_ID) {
            return;
          }
          selectElement(selectedTabId);
        }
      });
      isMenuAdded = true; 
    } else if (isMenuAdded) {
      chrome.contextMenus.remove(MENU_ID);
    }
  }  

  let isMenuAdded = false;
  let selectedTabId = null;

  chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.executeScript(
      tab.ib,
      {
        file: "inject.js"
      },
      async () => {
        selectedTabId = tab.id;
        toggle();
      }
    );
  });

  chrome.tabs.onActivated.addListener(async tab => {
    selectedTabId = tab.id;
    toggle();
  });

  chrome.tabs.onUpdated.addListener(async tab => {
    selectedTabId = tab.id;
    toggle();
  });

})();

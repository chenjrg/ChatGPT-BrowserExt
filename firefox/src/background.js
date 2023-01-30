const DEFAULT_DATA_URL = "https://raw.githubusercontent.com/yoanbernabeu/YoanDevGPT/main/data.json";

browser.runtime.onInstalled.addListener(setup);
browser.runtime.onStartup.addListener(setup);

function setup() {
    // clear all context menus entries firstly
    browser.contextMenus.removeAll().then(() => {
        browser.storage.local.get('data
const DEFAULT_DATA_URL = "https://raw.githubusercontent.com/yoanbernabeu/YoanDevGPT/main/data.json";

chrome.runtime.onInstalled.addListener(setup);
chrome.runtime.onStartup.addListener(setup);

function setup() {
    // clear all context menus entries fir
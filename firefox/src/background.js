const DEFAULT_DATA_URL = "https://raw.githubusercontent.com/yoanbernabeu/YoanDevGPT/main/data.json";

browser.runtime.onInstalled.addListener(setup);
browser.runtime.onStartup.addListener(
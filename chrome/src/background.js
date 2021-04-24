const DEFAULT_DATA_URL = "https://raw.githubusercontent.com/yoanbernabeu/YoanDevGPT/main/data.json";

chrome.runtime.onInstalled.addListener(setup);
chrome.runtime.onStartup.addListener(setup);

function setup() {
    // clear all context menus entries firstly
    chrome.contextMenus.removeAll(function() {
        chrome.storage.local.get('dataURL', data => {
            let DATA_URL = data.dataURL || DEFAULT_DATA_URL;

            fetch(DATA_URL)
                .then((response) => response.json())
                .then((data) => {
                    data.forEach((item, index) => {
                        chrome.contextMenus.create({
                            id: index.toString(),
                            title: item.title,
                            contexts: ["editable"],
                            parentId: "parent",
                        });
                    });
                });

            chrome.contex
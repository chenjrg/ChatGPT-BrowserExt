const DEFAULT_DATA_URL = "https://raw.githubusercontent.com/yoanbernabeu/YoanDevGPT/main/data.json";

browser.runtime.onInstalled.addListener(setup);
browser.runtime.onStartup.addListener(setup);

function setup() {
    // clear all context menus entries firstly
    browser.contextMenus.removeAll().then(() => {
        browser.storage.local.get('dataURL').then(data => {
            let DATA_URL = data.dataURL || DEFAULT_DATA_URL;

            fetch(DATA_URL)
                .then((response) => response.json())
                .then((data) => {
                    data.forEach((item, index) => {
                        browser.contextMenus.create({
                            id: index.toString(),
                            title: item.title,
                            contexts: ["editable"],
                            parentId: "parent",
                        });
                    });
                });

            browser.contextMenus.create({
                id: "parent",
                title: "YoanDevGPT",
                contexts: ["editable"],
    
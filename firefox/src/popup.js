
document.addEventListener('DOMContentLoaded', function () {
    const dataUrlElement = document.getElementById('data-url');
    const optionsForm = document.getElementById('options-form');
    const resetBtn = document.getElementById('reset-btn');
    const messageElement = document.getElementById('message');

    // Load saved data url
    browser.storage.local.get('dataURL').then(function (result) {
        if (result.dataURL) {
            dataUrlElement.value = result.dataURL;
        }
    });

    optionsForm.addEventListener('submit', function (e) {
        e.preventDefault();
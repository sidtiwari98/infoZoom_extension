document.getElementById("search_button").addEventListener("click", getSelectedText);

function getSelectedText() {
  chrome.storage.sync.get('selectedText', function(data) {
    document.testform.selectedtext.value = data.selectedText;
  })
}
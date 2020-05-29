// let changeColor = document.getElementById('changeColor');
//
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
//
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//       tabs[0].id,
//       {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };

document.getElementById("search_button").addEventListener("click", getSelectedText);

function getSelectedText() {
  // var selectedText = '';
  chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
  }, function(selection) {
    chrome.storage.sync.get('selectedText', function(data) {
      data.selectedText = selection[0];
      document.testform.selectedtext.value =  data.selectedText;
});
    // selectedText = selection[0];
    // document.testform.selectedtext.value = selectedText;
  });
}
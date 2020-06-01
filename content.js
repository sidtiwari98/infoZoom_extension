window.addEventListener('mouseup', function (event) {
  console.log("hello from listener");
  let highlightedText = window.getSelection().toString();
  if(highlightedText.length){
    chrome.storage.sync.set({selectedText: highlightedText}, function() {
      console.log("selected text is set to" , highlightedText )
    });
  }
  // chrome.tabs.executeScript({
  //   code: "window.getSelection().toString();"
  // }, function (selection) {
  //   chrome.storage.sync.get('selectedText', function (data) {
  //     data.selectedText = selection[0];
  //     console.log("selected text is ", selection[0])
  //     // document.testform.selectedtext.value =  data.selectedText;
  //   })
  // })
});

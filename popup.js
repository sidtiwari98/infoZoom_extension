document.getElementById("search_button").addEventListener("click", getSelectedText);
let textToSearch = '';
function getSelectedText() {
  chrome.storage.sync.get('selectedText', function(data) {
    //for testing if the highlighted word is stored
    // document.testform.selectedtext.value = data.selectedText;
    textToSearch = data.selectedText;
    if(textToSearch.length) {
      SearchImage();
    }
  })
}

async function SearchImage(){
  let response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${textToSearch}&key=AIzaSyAkCdD1ro_UiO05w8iqAdFjNCCCbgqnSlY&num=7&start=1&searchType=image&imgSize=medium&cx=014315630586445032606:me0hgspmvrs`);
  let data = await response.json();
  console.log(data.items[0].image.thumbnailLink,data.items[1].image.thumbnailLink, data.items[2].image.thumbnailLink);
  setImage(data.items[0].image.thumbnailLink,data.items[1].image.thumbnailLink, data.items[2].image.thumbnailLink);
  // console.log(data);
}

function setImage(source1, source2, source3){
  document.getElementById("image1").src = source1;
  document.getElementById("image2").src = source2;
  document.getElementById("image3").src = source3;
}

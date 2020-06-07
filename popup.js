document.getElementById("search_button").addEventListener("click", getSelectedText);
let textToSearch = '';

function getSelectedText() {
  chrome.storage.sync.get('selectedText', function (data) {
    //for testing if the highlighted word is stored
    // document.testform.selectedtext.value = data.selectedText;
    console.log(data.selectedText);
    textToSearch = data.selectedText;
    if (textToSearch.length) {
      // SearchImage();
      getWiki(textToSearch);
    }
  })
}

async function SearchImage() {
  let data;
  try {
    let response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${textToSearch}&key=AIzaSyAkCdD1ro_UiO05w8iqAdFjNCCCbgqnSlY&num=7&start=1&searchType=image&imgSize=medium&cx=014315630586445032606:me0hgspmvrs`);
    data = await response.json();
  } catch (err) {
    console.log(err);
  }
  // console.log(data.items[0].image.thumbnailLink,data.items[1].image.thumbnailLink, data.items[2].image.thumbnailLink);
  setImage(data.items[0].image.thumbnailLink, data.items[1].image.thumbnailLink, data.items[2].image.thumbnailLink);
  // console.log(data);
}

function setImage(source1, source2, source3) {
  document.getElementById("image1").src = source1;
  document.getElementById("image2").src = source2;
  document.getElementById("image3").src = source3;
}


async function getWiki(searchText) {
  console.log(searchText);
  let url = "https://en.wikipedia.org/w/api.php";

  let params = {
    action: "query",
    list: "search",
    srsearch: searchText,
    format: "json"
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) {
    url += "&" + key + "=" + params[key];
  });


  try {
    let response = await fetch(url);
    let response_json = await response.json();
    for (let i = 0; i < 10; i++) {
      if (response_json.query.search[i].title.includes(searchText)) {
        document.getElementsByTagName("p")[0].innerHTML = response_json.query.search[0].snippet + "...." +
          `<a href = https://en.wikipedia.org/?curid=${response_json.query.search[i].pageid} target = "_blank">Wikipedia</a>`;
        break;
      }
    }
  } catch (err) {
    console.log(err);
  }

}

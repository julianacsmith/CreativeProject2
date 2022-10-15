document.getElementById("catSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  //const value = document.getElementById("weatherInput").value;
  //if (value === "")
  //  return;
  //console.log(value);
  
    const url = "https://api.thecatapi.com/v1/images/search?api_key=live_LNT8fQmDiJdFD8iRCG4CUoPltcFhAs95Zuk7QH6FWd3iblUrcSVCdUxhcyykXR2r";
    /*global fetch*/
    fetch(url)
        .then(function(response) {
          /*global respone*/
          console.log(response);
            return response.json();
        }).then(function(json) {
            console.log(json[0].url);
            let result = '<img src="' + json[0].url + '" width=500>';
            document.getElementById("catPic").innerHTML = result;
        });
        
    const url2 = "https://api.breakingbadquotes.xyz/v1/quotes";
    /*global fetch*/
    fetch(url2)
      .then(function(response) {
        return response.json();
      }).then(function(json){
        console.log(json[0].quote);
        let result = json[0].quote + "\n\t-" + json[0].author;
        document.getElementById("quote").innerHTML = result;
      });
});
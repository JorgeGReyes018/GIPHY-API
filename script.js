// ***** API CODE *****
let key = "4Q4m7pj8IPe8DFPLfknrbhZQuDl8tMLH"
let output = document.querySelector(".out")
document.addEventListener("DOMContentLoaded",search)
function search() {
    document.getElementById("btnS").addEventListener("click", getData => {
        getData.preventDefault();
        output.innerHTML = "";
        let val = document.getElementById("search").value;
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=49&q=${val}`;
        console.log(url);
        fetch(url)
        .then(response => response.json() )
        .then(content => {
            console.log(content.data);
            content.data.forEach(function(info){
                console.log(info.images.downsized_large.url);
                let cont = document.createElement("img")
                cont.setAttribute("src",info.images.downsized_large.url);
                output.appendChild(cont)
            })
        })
        .catch(error => {
            console.log(error);
        })
    } );
}
// ***** DROPDOWN MENU ON TRIGRAM *****
function dropdownmenu() {
    var x = document.getElementById("trigramclick");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
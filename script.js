let key = "4Q4m7pj8IPe8DFPLfknrbhZQuDl8tMLH"
let output = document.querySelector(".out")
document.addEventListener("DOMContentLoaded",search)
function search() {
    document.getElementById("btnS").addEventListener("click", getData => {
        getData.preventDefault();
        output.innerHTML = "";
        let val = document.getElementById("search").value;
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=60&q=${val}`;
        console.log(url);
    } );
}

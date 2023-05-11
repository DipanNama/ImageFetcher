
let randomImage = document.getElementById("randomImage")
const searchBtn = document.getElementsByClassName("searchBtn")

randomImage.addEventListener("submit",async (e) => {
    e.preventDefault()
    let showImage = document.getElementById("image")
    let searchTerm = document.getElementById("search-item").value
    let url = "https://source.unsplash.com/random/800x700?" + searchTerm
    await fetch(url).then((res) => {
        console.log(res.url)
        showImage.style.backgroundImage = `url(${res.url})`;
    })
})
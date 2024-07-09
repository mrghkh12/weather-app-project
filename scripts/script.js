const $ = document;
const searchInputElem = $.querySelector(".search input")
const searchBtn = $.querySelector(".search button")

searchBtn.addEventListener('click' , () => {
    console.log(searchInputElem.value);
})


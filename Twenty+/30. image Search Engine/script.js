const accessKey = "E4SdMASCFyWJSOqv3lf48_rzi8CoXa9FJo-RqknF844"

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResults = document.getElementById("search-results")
const showMore = document.getElementById("show-more")

// 1
let keyword = ""
let page = 1

async function searchImage(){
    // assign the value of input field to variable (keyword).
    keyword = searchBox.value;
    // we are getting only one page initailly and then will get more pages on clicking the show more button, and there we set 12 results on the page.
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);

    // 6 
    //  if we are on page one, which by default we are, remove all previouse images and show only those images whose are searched now.
    if (page === 1) {
        searchResults.innerHTML = ""
    }
    
    // store the data in variable 
    // we recieve the data from the url as an object and inside the object information is store in array name (results).
    // so we have all info in variable (allResults) as an array
    let allResults = data.results

    // 3
    // to display the information on our application 
    allResults.map( (obj) =>{                            // obj is each object we get from array (allResults)
        const image = document.createElement("img")     // create an image tag.
        image.src = obj.urls.small                      // put the path of small from urls in src of image.
        const imageLink = document.createElement("a")   // create anchor tag
        imageLink.href = obj.links.html                 // put the path of html from links in href of anchor tag.
        imageLink.target = "_blank"                      // when click on anchor tag, to open in new tab.

        imageLink.append(image)                  //append the image tag inside the anchor tag, to make the image clickable.

        searchResults.appendChild(imageLink)    // add all the images to the div with id (search-results)
    })

    // 4
    // To display the show more button 
    showMore.style.display = "block"
}

// 2
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    // when  we click on submit button, it will called the function and display results on one page.
    page = 1
    searchImage()
})

// 5
// To display more page on clicking the show more button.
showMore.addEventListener("click", () =>{
    // Each time we click on the show more button, it will display new images on one more page, and also called the function as well to get the information, because we heva written the logic behind getting the information in the function.
    page++;
    searchImage()
})
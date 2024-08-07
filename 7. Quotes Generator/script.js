
const api_url = "https://api.quotable.io/quotes/random"

const myQuote = document.getElementById("quote");
const myAuthor = document.getElementById("author");


async function getQuote(url){
    const res = await fetch(url);
    const data = await res.json()

    // console.log(data);

    myQuote.innerHTML = data[0].content
    myAuthor.innerHTML = data[0].author
    
}


function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + myQuote.innerHTML + " --- " + myAuthor.innerHTML, "Tweet Window", "width=600, height=300")
}
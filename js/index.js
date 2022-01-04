const cardImage = document.querySelector(".card-image")

function handleClick(){
    cardImage.classList.toggle("card-image-click")
}

cardImage.addEventListener("click", handleClick)



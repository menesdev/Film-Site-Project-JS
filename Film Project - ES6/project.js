const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const secondCardBody = document.querySelectorAll(".card-body")[1]

// Load all events
eventListeners()

function eventListeners() {
    form.addEventListener("submit",addFilm)



    secondCardBody.addEventListener("click",deleteFilm)
}

function addFilm(event) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if (title === "" || director === "" || url === "") {
        // Information message
    }
    else {
        const newFilm = new Film(title, director, url)

        UI.addFilmToUI(newFilm)
    }

    UI.clearInputs(titleElement,directorElement,urlElement)

    event.preventDefault()
}

function deleteFilm(event) {
    if(event.target.id === "delete-film"){
        UI.deleteFilmFromUI(event.target)
    }
}




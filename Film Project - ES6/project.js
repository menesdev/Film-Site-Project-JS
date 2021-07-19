const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const secondCardBody = document.querySelectorAll(".card-body")[1]
const clearFilms =  document.getElementById("clear-films")

// Tüm eventleri yükleme
eventListeners()

function eventListeners() {
    form.addEventListener("submit",addFilm) 
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage()
        UI.loadAllFilms(films)
    })

    secondCardBody.addEventListener("click",deleteFilm)
    clearFilms.addEventListener("click",clearAllFilms)
}

function addFilm(event) {
    const title = titleElement.value
    const director = directorElement.value 
    const url = urlElement.value 

    if(title === "" || director === "" || url === "")
    {
        // Hata mesajı
        UI.displayMessages("Tüm alanları doldurun!","danger")
        
    }
    else{
        const newFilm = new Film(title,director,url) // Yeni film 

        UI.addFilmToUI(newFilm) // Arayüze film ekleme
        Storage.addFilmToStorage(newFilm) // Storage'a film ekleme
        UI.displayMessages("Film başarıyla eklendi!", "success")
    }

    UI.clearInputs(titleElement,urlElement,directorElement)

    event.preventDefault() // Submit eventinin default özelliklerini yoksay(amaç:sayfanın yenilenmesini engelleme)
}

function deleteFilm(event) {
    if(event.target.id === "delete-film"){
        UI.deleteFilmFromUI(event.target)
        Storage.deleteFilmFromStorage(event.target.parentElement.previousElementSibling
            .previousElementSibling.textContent)

        UI.displayMessages("Silme işlemi başarılı!","success")
    }
}

function clearAllFilms() {

    if(confirm("Emin misiniz?")){
        UI.clearAllFilmsFromUI()
        Storage.clearAllFilmsFromStorage()
    }
    
}

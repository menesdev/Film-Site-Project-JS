const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const secondCardBody = document.querySelectorAll(".card-body")[1]
const clearFilms =  document.getElementById("clear-films")

//UI objesini başlatma 
const ui = new UI()

// Storage objesini oluşturma
const storage = new Storage()

// Tüm eventleri yükleme
eventListeners()

function eventListeners() {
    form.addEventListener("submit",addFilm) 
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage()
        ui.loadAllFilms(films)
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
        ui.displayMessages("Tüm alanları doldurun!","danger")
        
    }
    else{
        const newFilm = new Film(title,director,url) // Yeni film 

        ui.addFilmToUI(newFilm) // Arayüze film ekleme
        storage.addFilmToStorage(newFilm) // Storage'a film ekleme
        ui.displayMessages("Film başarıyla eklendi!", "success")
    }

    ui.clearInputs(titleElement,urlElement,directorElement)

    event.preventDefault() // Submit eventinin default özelliklerini yoksay(amaç:sayfanın yenilenmesini engelleme)
}

function deleteFilm(event) {
    if(event.target.id === "delete-film"){
        ui.deleteFilmFromUI(event.target)
        storage.deleteFilmFromStorage(event.target.parentElement.previousElementSibling
            .previousElementSibling.textContent)

        ui.displayMessages("Silme işlemi başarılı!","success")
    }
}

function clearAllFilms() {

    if(confirm("Emin misiniz?")){
        ui.clearAllFilmsFromUI()
        storage.clearAllFilmsFromStorage()
    }
    
}

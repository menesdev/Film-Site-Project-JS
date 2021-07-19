function Storage(){

}
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage()

    films.push(newFilm)

    localStorage.setItem("films",JSON.stringify(films)) // JSON.stringify: stringe çevirme
}

Storage.prototype.getFilmsFromStorage = function(){
    let films

    if (localStorage.getItem("films") === null) {// Bu isimde bir item var mı?
        films = []
    }
    else {
        films = JSON.parse(localStorage.getItem("films")) // JSON.parse : arraye çevirme
    }

    return films
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage()

    // splice : array'den silme.
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1) //bulunan indexten bir eleman sil.
        }
    })

    localStorage.setItem("films",JSON.stringify(films))
}

Storage.prototype.clearAllFilmsFromStorage = function() {
    localStorage.removeItem("films")
}
// function Storage(){

// }

class Storage {
    static addFilmToStorage (newFilm) {
        let films = this.getFilmsFromStorage()

        films.push(newFilm)

        localStorage.setItem("films", JSON.stringify(films)) // JSON.stringify: stringe çevirme
    }

    static getFilmsFromStorage () {
        let films

        if (localStorage.getItem("films") === null) {// Bu isimde bir item var mı?
            films = []
        }
        else {
            films = JSON.parse(localStorage.getItem("films")) // JSON.parse : arraye çevirme
        }

        return films
    }

    static deleteFilmFromStorage (filmTitle) {
        let films = this.getFilmsFromStorage()

        // splice : array'den silme.
        films.forEach(function (film, index) {
            if (film.title === filmTitle) {
                films.splice(index, 1) //bulunan indexten bir eleman sil.
            }
        })

        localStorage.setItem("films", JSON.stringify(films))
    }

    static clearAllFilmsFromStorage () {
        localStorage.removeItem("films")
    }
}


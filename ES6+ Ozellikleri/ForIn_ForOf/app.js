const person = {
    name : "Mustafa Enes",
    age: 20,
    salary: 4000
}

const langs = ["Python","Java","C","Rust"]

const name = "Mustafa"


// For in

// //Obje
// for(let prop in person){
//     console.log(prop,person[prop])
// }

// //Array
// for (let index in langs) {
//     console.log(index,langs[index])
// }

// //String
// for (let index in name) {
//     console.log(index, name[index])
// }


//For Of (obje üzerinde gezinemeyiz.)

for (value of langs){
    console.log(value)
}


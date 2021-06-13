// const hello = function () {
//     console.log("hello")
// }

// hello()


// Arrow function:

// const hello = () => {
//     console.log("hello")
// }

// hello()


const hello = (firstName) => { //fonks. tek parametre alıyorsa paranteze gerek yok.
    console.log("Merhaba ",firstName)
}
hello("Ahmet")

//const hello = (firstName) => console.log("Merhaba ", firstName)

const cube = x => x * x * x;    //return kullanmadan arrow func. kullanımı.

console.log(cube(4))
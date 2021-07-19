//Sets - Kümeler

const mySet = new Set()

mySet.add(100)
mySet.add(100) // Setler bir değeri sadece bir defa taşır.
mySet.add(3.14)
mySet.add("Mustafa")
mySet.add(true)
mySet.add([1,2,3])
mySet.add({a:1,b:2})

const mySet2 = new Set([100,3.14,"Mustafa"])

// console.log(mySet)
// console.log(mySet2)

// //Size
// console.log(mySet.size)

// //Delete method
// //mySet.delete("Mustafa")

// //Has method
// console.log(mySet.has("Mustafa"))
// console.log(mySet.has(8))

// //For Each

// mySet.forEach(function(value) {
//     console.log(value)
// })

//For Of

// for (let value of mySet){
//     console.log(value)
// }

const array = Array.from(mySet)

console.log(array)


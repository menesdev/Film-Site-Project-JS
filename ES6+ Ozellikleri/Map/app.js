let myMap = new Map()

console.log(typeof myMap)

const key1 = "Mustafa"
const key2 = {a:10,b:20}
const key3 = () => 2

//Set
    
myMap.set(key1,"String Değer")
myMap.set(key2,"Object Literal Değer")
myMap.set(key3,"Function Değer")

//Get
// console.log(myMap.get(key1))
// console.log(myMap.get(key2))
// console.log(myMap.get(key3))
// console.log(myMap)

// console.log(myMap.size)


const cities = new Map()

cities.set("Ankara",5)
cities.set("İstanbul",15)
cities.set("İzmir",5)

//For Each ile gezinme

// cities.forEach(function(value, key) {
//     console.log(key,value)
// })

//For Of

for(let [key,value] of cities){ //Destructing
    console.log(key,value) 
}
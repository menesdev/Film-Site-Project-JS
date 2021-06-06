
//rest (geriye kalan, rest of)
let showProducts = function (id,...products) { //"...products boş bir array."
    console.log(id)
    console.log(products)
}

// console.log(typeof showProducts);
//showProducts(10, "Elma","Armut","Kavun")


//spread ((elimizdeki bir array'i) ayrıştırmak)
let points = [1,2,3,70,12,60,50,5]

console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")


//!!! Destructuring (Şeklini bozma, parçalama) -> Elinizdeki array'in değerlerini değişkenlere atama
let populations = [10000, 20000, 30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations //small = 10000, medium = 20000, high = 3000 değerleri oluşmuş gibi oldu

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name1} = category //Object Destructuring
console.log(id)
console.log(name1)

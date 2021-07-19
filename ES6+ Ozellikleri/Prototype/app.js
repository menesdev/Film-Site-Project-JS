function Employee(name,age) {
    this.name = name
    this.age = age 
    this.showInfos = function(){
        console.log("Bilgiler gösteriliyor...")
    }
}
const emp1 = new Employee("Mustafa",25)
emp1.showInfos()
console.log(emp1)

console.log(emp1.toString())
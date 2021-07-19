function Employee(name,age,salary){ //Constructor function
    this.name = name
    this.age = age
    this.salary = salary

    this.showInfos = function () {
        console.log(this.name,this.age,this.salary)
    }
}

const emp1 = new Employee("Mustafa",20,4500)
const emp2 = new Employee("Ahmet",22,5600)

emp1.showInfos()
emp2.showInfos()


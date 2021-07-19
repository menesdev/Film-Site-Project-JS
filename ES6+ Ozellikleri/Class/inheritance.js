class Person { //Superclass, Baseclass
    constructor(name,age){
        this.name = name
        this.age = age 
    }

    showInfos(){
        console.log("İsim: " + name + " Yaş: " + this.age)
    }
}

class Employee extends Person { // Derivedclass, Subclass, Childclass
    constructor(name,age,salary){
        // this.name = name
        // this.age = age
        super(name,age) // Üst sınıfın constructor'ını kullan.
        this.salary = salary 
    }
}

const emp = new Employee("Mustafa",25,4000)

console.log(emp)
emp.showInfos()



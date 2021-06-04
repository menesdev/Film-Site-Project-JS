export class Customer{  //Java veya C# taki public'in yaklaşık karşılığı : export
    constructor(id,customerNumber){
        this.id = id                      //this : instance'taki ... anlamına gelir
        this.customerNumber = customerNumber                      
    }
}

let customer = new Customer(1,"12345");

//propotyping
customer.name = "Mecnun Çınar"
console.log(customer.name)

Customer.bisey = "Bi şey"
console.log(Customer.bisey)

console.log(customer.customerNumber)


class IndividualCustomer extends Customer {
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer {
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}
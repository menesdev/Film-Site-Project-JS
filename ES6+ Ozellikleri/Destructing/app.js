// Destructing

// let number1, number2

// array = [100,200,300,400]

// [number1, number2] = array //number1 = array[0], number2 = array[1] oldu.

//const [number1, number2] = array


//Obje Destructing: 

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}

const {a,c,e} = numbers // Değişken değerleri obje içindeki değer isimleriyle aynı olmalı, veya 
const { a:number1, c:number2, e:number3 } = numbers 


//Function Destructing

const getLangs = () => ["Python","Java","C++"]

const [lang1,lang2,lang3] = getLangs()



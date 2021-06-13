//Spread Operator

const langs = ["Python","C++","Java","Rust"]

//console.log(langs[0], langs[1], langs[2], langs[3])

console.log(...langs) // = console.log(langs[0], langs[1], langs[2], langs[3]) 
//Output: Python C++ Java Rust

const langs2 = ["Javascript", "C#", ...langs]






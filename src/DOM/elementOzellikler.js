const element = document.querySelector("#clear-todos");

// Element özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);


// style ve element özelliklerini değiştirme

// element.className = "btn btn-warning";
// element.style.color = "#000";
// element.style.marginLeft = "10px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";

element.textContent = "Sil";
element.innerHTML = "<span style='color:orange'>Silin</span>"



// DOM Elementleri üzerinde gezinme 

let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(1)");
const cardrow = document.querySelector(".card-row");

value = todoList;
value = todo;
value = card;




console.log(value);




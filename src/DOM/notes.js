let value;

value = document;
value = document.all; //Html Collection döner.
value = document.all[document.all.length-1];
value = document.body;
value = document.head;
value = document.location;
value = document.location.port;
value = document.URL;


//Linkler

value = document.links;
value = document.links[0];
value = document.links[document.links.length-1]
.getAttribute("class");
value = document.links[document.links.length-1]
.getAttribute("href");


//Formlar

value = document.forms;
value = document.forms.length;
value = document.forms[0];





//console.log(value);



// Element'i Id'ye göre seçme:

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Element'i classa göre seçme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

// Element'i tag'e göre seçme

element = document.getElementsByTagName("div");

// Query Selector - Css Selector (Tek bir elementi, yani ilk bulduğunu döner.)

element = document.querySelector("#todo-form"); // Id'ye göre
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group"); // Classa göre

element = document.querySelector("div"); // Tag'e göre


// QuerySelectorAll - Tüm Elementleri seç

element = document.querySelectorAll(".list-group");

element.forEach(function(el) {
    console.log(el);
});

console.log(element);


//Yeni Element Oluşturma

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

//Text Node 

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));


//newLink'i cardbody'nin (div'in) sonuna child  olarak ekleme
cardbody.appendChild(newLink);

//const text = document.createTextNode("Naber");
//cardbody.appendChild(text); //En sona child olarak ekle


console.log(newLink);
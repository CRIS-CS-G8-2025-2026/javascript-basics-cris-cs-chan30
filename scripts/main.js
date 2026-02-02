let firstName = "Senghom";
let lastName = "Hom";

let fullName = firstName + " " + lastName;
document.querySelector("h1") .textContent = fullName;

let age = 14;
document.getElementById("age").textContent = "My age is " + age;

let futureAge = age + 20;
let futureParagraph = document.createElement("p");
    futureParagraph.textContent =
  "In 20 years, I will be " + futureAge + " years old.";

document.getElementById("age").after(futureParagraph);
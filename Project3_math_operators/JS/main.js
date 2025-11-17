//mai.js
function addition() { // Defines and name the      function
    var add = 1+2;
    document.getElementById("Add").innerHTML="1+2=" + add; //Print the result in Html
}

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
function subtraction() { // Defines and name the      function
    var sub = 9-7;
    document.getElementById("Sub").innerHTML="9-7=" +sub; //Print the result in Html
}

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
function multiplication () {// Defines and name the      function
    var mult= 5*6;
    document.getElementById("Mlt").innerHTML ="5*6=" + mult; //Print the result in Html
}

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
function division() {// Defines and name the      function
    var divide = 30/5;
    document.getElementById("Div").innerHTML ="30/5=" + divide; //Print the result in Html
}

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
function random() {// Defines and name the      function
    document.getElementById("Ran").innerHTML = Math.random()*10; //Print the result in Html
}

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
function modulus_operator () {// Defines and name the      function
    var modulus= 38%4;
    document.getElementById("Mod").innerHTML = "when you divide 38 by 4 you have a remainder of:" + modulus; //Print the result in Html
}

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
function Increment(){// Defines and name the      function
    var value = document.getElementById("IncrementText").innerHTML; //Saves the text of the HTML element to a variable
    value++;
    document.getElementById("IncrementText").innerHTML=value; //Print the result in Html
}

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//
function Decrement(){// Defines and name the      function
    var value = document.getElementById("DecrementText").innerHTML; //Saves the text of the HTML element to a variable
    value--;
    document.getElementById("DecrementText").innerHTML=value; //Print the result in Html
}

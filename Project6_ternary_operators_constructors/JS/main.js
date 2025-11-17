function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color= Color;
}
var Jack = new Vehicle ("Dodge","Viper",2020,"Red");
var Emily = new Vehicle ("Jeep","Trail Hawk",2019,"White and Black");
var Erick = new Vehicle ("Ford","Pinto",1971," Mustard");

//A function to display the result of the constructor in an HTML element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + 
    Erick.vehicle_Color +
    "-colored" + Erick.vehicle_Model +
     "manufactured in " +
      Erick.vehicle_Year;
}

//A nested function 
function add_Strings() {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("World");
    document,getElementById("Nested_Function").innerHTML = start_string;
}
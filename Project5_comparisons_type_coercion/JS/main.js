//This is a variable with a boolen data type
var x = true;

//this print the data type of the variable x
document.writeln(typeof x);
document.writeln("<br>");

//this is an expression that combine a string and a number
document.writeln("10" + 10);
document.writeln("<br>");

//using the == operator
document.writeln(5 == 5);
document.writeln("<br>");

//using the === operator
x= 1;
y= 1;
document.writeln(x === y);
document.writeln("<br>");

//using the < and || operators
document.writeln(10 < 5 || 11 < 6);
document.writeln("<br>");

//using the ! operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(1 > 2);
}
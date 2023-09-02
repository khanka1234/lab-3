var too1=+prompt("Too 1 oruulna uu")
var op =prompt("Operator oruulnuu")
var too2=+prompt("Too 2 oruulnuu")
switch(op){
    case "+":
        alert(too1+too2)
        break;
    case "-":
        alert(too1-too2);
        break;
    case "*":
        alert(too1*too2);
        break;
    default:
        console.log("Not found")
}
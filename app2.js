var number=+prompt("Too oruulnuu.")
if(number>0){
    console.log("Eyreg too bn.")
}
else{
    console.log("Sorog too bn.")
}
var too=+prompt("Too oruulnuu")
if(too%2==0){
    console.log("Tegsh too bn");
}
else{
    console.log("Sondgoi too bn");
}
var numba=+prompt("Dungee oruulnuu")
if(numba>=90 && numba<=100){
    console.log("A garsan bn")
}
else if(numba>=80 && numba<=90){
    console.log("B garsan bn")
}
else if(numba>=70 && numba<=80){
    console.log("C garsan bn")
}
else if(numba>=60 && numba<=70){
    console.log("D garsan bn")
}
else if(numba>=0 && numba<=60){
    console.log("F garsan bn")
}
// switch - nuhtsul shalgana
var today=6;
switch(today){
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Not found");
        break;
        case 7:
        console.log("Sunday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 1:
        console.log("Monday");
        break;
}
var lang = "Mongolia";
switch(lang){
    case "English":
        console.log("Hello")
        break;
    case "Mongolia":
        console.log("Sain bnuu");
        break;
    case "Spanish":
        console.log("Hola!");
        break;
    default:
        console.log("Not found")
}
var numbar=+prompt("Too ooruulnuu")
var toon=numbar;
var numbar2=+prompt("Too oruulnuu")
var toon2=numbar2
var op="-";
switch(op){
    case "-":
        console.log(numbar-numbar2)
        break;
        case "+":
            console.log(numbar+numbar2)
            break;
            case "*":
                console.log(numbar*numbar2)
                break;
                case "/":
                    console.log(numbar/numbar2)
                    break;    
                    default:
                        console.log("Not found")        
}
alert(op)



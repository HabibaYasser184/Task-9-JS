    // Java Script Basics

   
 window.alert("Hello");
console.log("Hello World");
console.warn("warning");
console.error("error occur");
console.info("information");
var in1= Number(window.prompt("Enter Your Number:"));
var in2= Number(window.prompt("Enter Your Number:"));
     // JS Comments
/*
    *This is a important comment
    !This is waring comment
    ? This ia a question comment
    TODO:This is a todo comment
 
 */
    //  JS Data Types
var integerNumber=3;
var floatNumber=3.5;
console.log(typeof( integerNumber));
console.log(typeof( floatNumber));

var text="name";
console.log(typeof(text));

var onSale=null;  
console.log(typeof(onSale));

console.log(typeof(one)); // undefined

var test=true;
console.log(typeof(test));

 console.log(typeof(NaN));  //number

console.log("Var value:",integerNumber ,"  ","Var name:",text);  // Var value: 3 Var name: name
    //JS Arithmetic Operators
var num2=10;
var num3=2;
console.log(num2+num3); 
console.log(num2-num3); 
console.log(num2*num3);
console.log(num2/num3);
console.log(num2%num3);
console.log(num2++);
console.log(num2--);
    // JS Comparison Operators
var x=5;
var y=10;
console.log(x==y);
console.log(x!=y);
console.log(x<y);
console.log(x>y);
console.log(x>=y);
console.log(x<=y);
console.log(x===y);
console.log(x!==y);
    // JS Logical Operators
    var test1=3;
    var test2=2;
    var test3=false;
if (test1==3 && test2==2){
console.log("And");
}
if (test1==3 || test2==2){
console.log("OR");
}
if (! test3){
console.log("NOT");
}
    // Indexing and Escaping
var quote = "She said, \"JavaScript is fun!\"";
console.log(quote);   // Output:She said, "JavaScript is fun!"

var text2 = "Line 1\nLine 2";
console.log(text2);   

let text3 = "Line 1\tLine 2";
console.log(text3);      
   //--------------------------------------------------------
var firstName= "Habiba";
var  age=20;
console.log(firstName +" "+age);
console.log(age + 5);

   //JS If Statement
     // -----Example 1------
var n=20;
if(n>0){
console.log("Positive Number");
    if(n%2==0){
       console.log("Even Number");
    }
        else {

         console.log("Odd Number");
         
        }
        
    }

else if (n<0){

console.log("Negative Number");

}
else{
    console.log("Number is Zero");
    
}
    // -----Example 2------
var playerOneChoice="scissors";
var playerTwoChoice="rock";
if ( playerOneChoice== playerTwoChoice){
    console.log("Tie");
    
}
 else if (
  (playerOneChoice == "rock" && playerTwoChoice == "scissors") ||
  (playerOneChoice == "scissors" && playerTwoChoice == "paper") ||
  (playerOneChoice == "paper" && playerTwoChoice == "rock")
) {
  console.log("playerOneChoice is the Winner");
} else {
  console.log("playerTwoChoice is the Winner");
}

    
    //  JS Switch Statement
var day=window.prompt("Enter a Day:");
switch (day) {
    case "Sunday":
    console.log("work day");
       break;
    case"Monday":
    console.log("work day");
     break;
     case "Friday":
     console.log("Holiday");
     break;
    default:
        console.log("hello");
        break;

}
    // JS Ternary Operator
var check=10;
var result=check?"check true":"false";
console.log(result);
    //  JS Loops
// For loop
for(var i=1 ; i<11 ; i++){
console.log(i);
}
  // While
  var i=1;
  while(i<21){
 console.log("Number", i);
 i++
  }

// Do While

var i=1;
do{

console.log("Number:" ,i);
i++;

}while(i<21);

    // Functions
    //-------Example1-----------
function average(num1,num2) {

 var average=(num1+num2)/2;
return average;
 
}

var result = average(100,200);
console.log(result);

 //-------Example2-----------
 function calculatePrice(price,profit,tax,ads){
 var mainPrice=price+profit;
var priceAfterTaxes=mainPrice *tax;
var priceAfterAds=priceAfterTaxes+ads;

return priceAfterAds;

 }
 var product1=calculatePrice(500,100,20,60);
console.log(product1);
    //  JS Object
var habiba = {

    fullName:"Habiba",
    age:20,
    gender:"female",
    job:"Developer",
    brother:{
    fullName:"Mohamed",
    age:17,
    gender:"male",
    job:"Student",
    },
    study: function(subject) {
      console.log("Habiba is studying",subject);
      
    }

}
console.log(habiba.fullName);  // output:Habiba
console.log(habiba.brother.fullName); // output:Mohamed
habiba.study("cs");   // output:Habiba is studying cs

//-------------------------------------------------------------
   // Self Invoke Function

(function(){
    var x=20;
    console.log(x);
    
})();





















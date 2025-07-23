"use strict"
// JS Arrays 

var studentsArray = ["Ali","Mohamed","Ahmed","Jana","Sarah"]
console.log(studentsArray[0]);   // Output:Ali  
console.log(studentsArray.length);  //Output:5  length of the array
// ---- Methods----
console.log(studentsArray);

console.log(studentsArray.sort());     // Arrange 

console.log(studentsArray.push("Aya","Nader"));  // add at the end of the array
console.log(studentsArray);

console.log(studentsArray.pop());       // remove the last element from  the array
console.log(studentsArray);

console.log(studentsArray.shift());       // remove the beginning element from  the array
console.log(studentsArray);

console.log(studentsArray.unshift("Waled"));   // add from the beginning 
console.log(studentsArray);

console.log(studentsArray.splice(0,1));      // remove by index 
console.log(studentsArray);

console.log(studentsArray.reverse());   // reverse the array

//    DOM Manipulation

//---------By ID----------
var element =document.getElementById("one");
console.log(element);
//---------By Class Name-------
var element1 = document.getElementsByClassName("item");
console.log(element1);
//---------By Name--------------
var element2 = document.getElementsByName("text");
console.log(element2);
//---------By Tag Name----------
var element3 = document.getElementsByTagName("p");
console.log(element3);
//--------By Selector---------------------
var element4 = document.querySelector(".items")
console.log(element4);
//----------By SelectorAll-----------
var element5 = document.querySelector("div")
console.log(element5);
//------------Event listener----------------------
var headings=document.querySelectorAll("h2.item");
function sayHello(userName){
    console.log("Hello",userName);
}
for (var i=0;i<headings.length;i++){
    headings[i].addEventListener("click",function(){
sayHello("Habiba")
    })
}
//---------inner HTML , innerText ,text content------------------
var element =document.getElementById("one");
console.log(element.innerHTML);     // get HTML Content


var element =document.getElementById("one");
console.log(element.innerText);   // text only
var element =document.getElementById("one");
console.log(element.textContent);   // text and hidden text



 //------------------------------------------------------------------------------------------------------------------------------------
var newElement=document.createElement("div");           // creat new element

document.body.appendChild(newElement);                 // put it in the  body tag

newElement.setAttribute("class","parent");            // put class name= parent

var myText=document.createTextNode("Hello World");   // text in the elemnt we creat it

newElement.appendChild(myText);

var childElement = document.createElement("p");

childElement.setAttribute("class","child");

var text=document.createTextNode("child paragraph");  

childElement.appendChild(text);

newElement.appendChild(childElement);                  // put paragraph as a chlid to div

document.querySelector(".parent2").remove();           // remove class

var headingElement=document.querySelector("h1");  

headingElement.classList.add("parent3","demo");      //add to the class list

headingElement.classList.remove("demo");             //remove from class list

 





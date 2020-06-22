var a = document.getElementById("tom-1"); 
var x = document.getElementById("tom-2");
var y = document.getElementById("tom-3");
var z = document.getElementById("tom-4");
var b = document.getElementById("crash");
var c = document.getElementById("kick-bass");
var d = document.getElementById("snare");    


function wdrum() { 
  a.play(); 
  document.getElementById("title").innerHTML  = "U PRESSED it!";
  
} 

function adrum() {
   x.play(); 
   document.getElementById("title").innerHTML  = "U PRESSED it!!";
  
}
function sdrum() {
    y.play(); 
    document.getElementById("title").innerHTML  = "U PRESSED it!!!";
}
 function ddrum() {
    z.play(); 
    document.getElementById("title").innerHTML  = "U PRESSED it!!!!";
  
 }
 function jdrum() {
    b.play(); 
    document.getElementById("title").innerHTML  = "U PRESSED it!!!!!";
  
 }
 function kdrum() {
    c.play(); 
    document.getElementById("title").innerHTML  = "U PRESSED it!!!!!!";
  
 }
 function ldrum() {
    d.play(); 
    document.getElementById("title").innerHTML  = "U PRESSED it!!!!!!!";
  
 }
     
 var activeButton = document.querySelector("." + currentKey);

 activeButton.classList.add("pressed");

 setTimeout(function() {
   activeButton.classList.remove("pressed");
 }, 100);


 
 
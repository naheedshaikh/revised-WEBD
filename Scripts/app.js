"use strict";
// IIFE - Immediately Invoked Function Expression
// means? -> anonyomous self-executing function

(function(){
  
    let h2;

     //event handlers
     function Mouseover()
     {
         h2.style.color  = "green";
         h2.style.fontSize = "80px";
     }

     function Mouseout()
     {
         h2.style.color = "black";
         h2.style.fontSize = "32px";
        
     }
 
    
    function Start()
    {
        console.log("%cApp Started...","color:blue; font-size:20px");
       
        //get a refrence to the contentArea
        let contentArea = document.getElementById("contentArea");

        //create an h2 tag
        h2 = document.createElement("h2");

        //add a class attribute
        h2.setAttribute("class","display-6");
        h2.textContent = "a secondary header";

        //append the new node to the content area
        contentArea.appendChild(h2);

        //inline function for event handler that we use for one time
        h2.addEventListener("click", function(){
           // h2.style.color = "blue";
           //To toggle
           h2.style.color = (h2.style.color == "blue") ? "black" : "blue";
        });

        h2.addEventListener("mouseover", Mouseover);

        h2.addEventListener("mouseout", Mouseout);

    }

    window.addEventListener("load", Start);
})();
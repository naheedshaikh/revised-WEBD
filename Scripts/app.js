"use strict";

// IIFE - Immediately Invoked Function Expression
// means? -> anonyomous self-executing function

(function(){
  
    let h2;

    // event handlers
    function MouseOver()
    {
        h2.style.color="green";
        h2.style.fontSize = "20px";
    }
    function MouseOut()
    {
        h2.style.color = "black";
        h2.style.fontSize = "40px";
    }

    function Start()
    {
        console.log("%cApp Started...","color:blue; font-size:20px");

        //get a refrence to the content area
        let contentArea = document.getElementById("contentArea");

        //Create an h2 element
        h2 = document.createElement("h2");
        //add a class attributes to the h2 element
        h2.setAttribute("class", "display-6");
        h2.textContent="A secondary header";

        //append the new node to  the content area
        contentArea.appendChild(h2);

        h2.addEventListener("click", function(){
            h2.style.color=(h2.style.color=="blue") ? "black" : "blue";
        });

        h2.addEventListener("mouseover", MouseOver);

        h2.addEventListener("mouseout", MouseOut);
    }

    window.addEventListener("load", Start);
})();
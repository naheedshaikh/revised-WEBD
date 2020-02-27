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

        //creating a new paragraph element
        let firstParagraph = document.createElement("p");
        //configuring the new element
        firstParagraph.textContent = "This is a very short paragraph!";

        //get a refrence to the parenetNode of the h2 element
        let parentDiv = h2.parentNode;

        //insert the new paragraph before the h2 element
        parentDiv.insertBefore(firstParagraph, h2);
       
        //get a refrence to the first h1 tag
        let h1 = document.getElementsByTagName("h1")[0];

        //copy by value from one element to another
        let anotherParagraph = firstParagraph.cloneNode(true);

         //Move the paragraph above the h1 passing it by reference
         h1.parentNode.insertBefore(anotherParagraph, h1);

         let ul = document.getElementsByTagName("ul")[0];
         for(let index = 0; index < ul.children.length; index++)
         {
             let child = ul.children[index];
             child.style.display = "none";
         }
        //To see all the children  of ul
         for(const child of ul.children)
         {
            console.log(child);
         }
         
    }

    window.addEventListener("load", Start);
})();
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

        //creating a new paragraph element
        let firstParagraph = document.createElement("p");

        //configuring the new element
        firstParagraph.textContent="This is a very short Paragraph";
        
        //get a refrence to the parentNode of the h2 element
        let parentDiv = h2.parentNode;

        //insert the new paragraph before the h2 element
        parentDiv.insertBefore(firstParagraph, h2);

        //get a refrence to the first h1 tag
        let h1 = document.getElementsByTagName("h1")[0];
        
        //copy by value from one element to another
        let anothetParagraph =  firstParagraph.cloneNode(true);

        //move the paragraph above the h1
        h1.parentNode.insertBefore(anothetParagraph, h1);

        let ul = document.getElementsByTagName("ul")[0];
        console.log(ul);

    //     //hide li navbar elemets
    //    for(let index = 0; index < ul.children.length; index++)
    //     {
    //           let child =  ul.children[index];
    //           child.style.display = "none"
    //     }
    
    //to hide all the elements from nav bar
    /* for (const child of ul.children) 
    {
        child.style.display = "none";
    } */
    //to hide only last element      of nav bar
    //ul.lastElementChild.style.display = "none";

    ul.lastElementChild.style.fontWeight = "bold";
    ul.lastElementChild.lastElementChild.style.color = "green";
    }
    //https://github.com/naheedshaikh/revised-WEBD.git
    window.addEventListener("load", Start);
})();
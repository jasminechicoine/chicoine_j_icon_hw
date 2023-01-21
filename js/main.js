console.log('JavaScript is running!');

/* this is a JS block comment
the let statement creates a variable - a chunk of computer memory that can hold 
references to data that you want to save. were storing a reference to an element 
on the page with this line - look for the element with the ID we specify inside 
of the round brackets (the image tag with the id of bitmapgraphic)

document refers to the index.html page; querySelector is How JS uses CSS to select
 elements on the page (called a method)
*/

// step 1 - select the elements you want the user to interact with
const p = document.querySelector("#icon")
const p2 = document.querySelector("#icon2")
const p3 = document.querySelector("#icon3")
const p4 = document.querySelector("#icon4")
const p5 = document.querySelector("#icon5")
const p6 = document.querySelector("#icon6")
const p7 = document.querySelector("#icon7")
const p8 = document.querySelector("#icon8")
const p9= document.querySelector("#icon9")
const p10= document.querySelector("#icon10")
const p11= document.querySelector("#icon11")
const p12= document.querySelector("#icon12")

// step #3 - what happens when events are triggered?
function logID() {
    console.log('clicked on this element:', this.id);
}

// step #2 - how do you want the user to interact with the element?

p.addEventListener('click', logID);
p2.addEventListener('click', logID);
p3.addEventListener('click', logID);
p4.addEventListener('click', logID);
p5.addEventListener('click', logID);
p6.addEventListener('click', logID);
p7.addEventListener('click', logID);
p8.addEventListener('click', logID);
p9.addEventListener('click', logID);
p10.addEventListener('click', logID);
p11.addEventListener('click', logID);
p12.addEventListener('click', logID);




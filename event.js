 let e = document.getElementsByTagName("button")[0];

 e.addEventListener('click', function(x) {

     let color = document.getElementById("input").value;
     let screen = document.getElementsByClassName("color-box")[0];
     screen.style.backgroundColor = color

 })


 //-----------------------------------------------------------------------------------------------
 //  Event               Description
 //  onchange            An HTML element has been changed
 //  onclick             The user clicks an HTML element
 //  onmouseover         The user moves the mouse over an HTML element
 //  onmouseout          The user moves the mouse away from an HTML element
 //  onkeydown           The user pushes a keyboard key
 //  onload              The browser has finished loading the page
 //-----------------------------------------------------------------------------------------
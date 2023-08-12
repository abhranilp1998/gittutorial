// document.addEventListener("DOMContentLoaded", function() {
//     var listItems = document.getElementsByClassName("list-group-item");
//     console.log("Number of list items:", listItems.length);

//     if (listItems.length >= 3) {
//         console.log("Target element:", listItems[2]);
//         listItems[2].style.background = "green";
//         for (const element of listItems) {
//             element.style.fontWeight = 'bold'
//         }
//     }
// });
var listItems = document.getElementsByClassName("list-group-item");
console.log("Number of list items:", listItems.length);
listItems[2].style.background = 'green';
for (const e of listItems) {
    e.style.fontWeight = 'bold';
}

var item = document.querySelectorAll('li');
item[4].style.fontWeight = 'bold';
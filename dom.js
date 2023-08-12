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
listItems[1].style.background = 'lightgreen';
for (const e of listItems) {
    e.style.fontWeight = 'bold';
}

var item = document.querySelectorAll('li');
item[4].style.fontWeight = 'bold';
item[4].style.display = 'none';
item[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for (const e of odd) {
    e.style.background = 'green';
}
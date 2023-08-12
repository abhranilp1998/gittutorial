// parentElement
// lastelementchild
// lastchild
// createchild
// firstelementchild
// firstchild
// nextsibling
// nextelementsibling
// previoussibling
// previouselementsibling
// createelement
// setAttribute
// createtesxtnode
// appendchild

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

var lists = document.querySelector('#items');
// console.log("Number of list items:", listItems.length);
// listItems[1].style.background = 'lightgreen';
// for (const e of listItems) {
//     e.style.fontWeight = 'bold';
// }

// var item = document.querySelectorAll('li');
// item[4].style.fontWeight = 'bold';
// item[4].style.display = 'none';
// item[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (const e of odd) {
//     e.style.background = 'green';
// }
// console.log(lists.parentNode)
// console.log(lists.parentElement)

lists.parentElement.style.backgroundColor = '#f4f4f4';

// console.log(lists.children);
lists.children[1].style.fontWeight = 'bold';

var listItem = lists.children[1];
// console.log(listItem.nextElementSibling)
// console.log(lists.firstElementChild)

// // console.log(listItem);
// console.log(typeof(listItem.parentElement));
// // listItem.parentElement.style.fontStyle = 'italic'
// // console.log(typeof(items));
// console.log(lists.children[1]);

// var lists = document.querySelector('#items');

// // Change the background color of the parent element of lists
// lists.parentElement.style.backgroundColor = '#f4f4f4';

// // Change the font weight of the second child element of lists
// lists.children[1].style.fontWeight = 'bold';

// // Print the children of the lists element
// console.log(lists.children);

var newDiv = document.createElement('div');

newDiv.className = 'hello';
newDiv.id = 'hello1';

newDiv.setAttribute('title', 'hello Div');

var text = document.createTextNode('HelloWorld!');

newDiv.appendChild(text);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30 px';

// console.log(container.outerHTML);
// console.log(text)
console.log(newDiv);
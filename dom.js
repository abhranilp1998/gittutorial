// // parentElement
// // lastelementchild
// // lastchild
// // createchild
// // firstelementchild
// // firstchild
// // nextsibling
// // nextelementsibling
// // previoussibling
// // previouselementsibling
// // createelement
// // setAttribute
// // createtesxtnode
// // appendchild

// // document.addEventListener("DOMContentLoaded", function() {
// //     var listItems = document.getElementsByClassName("list-group-item");
// //     console.log("Number of list items:", listItems.length);

// //     if (listItems.length >= 3) {
// //         console.log("Target element:", listItems[2]);
// //         listItems[2].style.background = "green";
// //         for (const element of listItems) {
// //             element.style.fontWeight = 'bold'
// //         }
// //     }
// // });

// var lists = document.querySelector('#items');
// // console.log("Number of list items:", listItems.length);
// // listItems[1].style.background = 'lightgreen';
// // for (const e of listItems) {
// //     e.style.fontWeight = 'bold';
// // }

// // var item = document.querySelectorAll('li');
// // item[4].style.fontWeight = 'bold';
// // item[4].style.display = 'none';
// // item[1].style.color = 'green';

// // var odd = document.querySelectorAll('li:nth-child(odd)');
// // for (const e of odd) {
// //     e.style.background = 'green';
// // }
// // console.log(lists.parentNode)
// // console.log(lists.parentElement)

// lists.parentElement.style.backgroundColor = '#f4f4f4';

// // console.log(lists.children);

// lists.children[1].style.fontWeight = 'bold';

// var listItem = lists.children[1];
// // console.log(listItem.nextElementSibling)
// // console.log(lists.firstElementChild)

// // // console.log(listItem);
// // console.log(typeof(listItem.parentElement));
// // // listItem.parentElement.style.fontStyle = 'italic'
// // // console.log(typeof(items));
// // console.log(lists.children[1]);

// // var lists = document.querySelector('#items');

// // // Change the background color of the parent element of lists
// // lists.parentElement.style.backgroundColor = '#f4f4f4';

// // // Change the font weight of the second child element of lists
// // lists.children[1].style.fontWeight = 'bold';

// // // Print the children of the lists element
// // console.log(lists.children);

// var newele = document.createElement('div')
// newele.className = 'element'
// newele.id = 'ele'
// newele.setAttribute('title', 'helloelement');

// var text = document.createTextNode('HelloWorld!!!');
// newele.appendChild(text);

// // var h1 = document.querySelector('header h1');
// var container = document.querySelector('header .container ')
// container.insertBefore(newele, document.querySelector('header h1'))

// // var newDiv = document.createElement('div');

// // newDiv.className = 'hello';
// // newDiv.id = 'hello1';

// // newDiv.setAttribute('title', 'hello Div');

// // var text = document.createTextNode('HelloWorld!');

// // newDiv.appendChild(text);

// // var container = document.querySelector('header .container');
// // var h1 = document.querySelector('header h1');

// // container.insertBefore(newDiv, h1);

// // newDiv.style.fontSize = '30 px';

// // // console.log(container.outerHTML);
// // // console.log(text)
// // console.log(newDiv);var form = document.getElementById('addForm');

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Call editItem function to add "Edit" button
    editItem(li);

    // Append li to list
    itemList.appendChild(li);
}

//edit functionality

function editItem(li) {


    //create edit button
    var editBtn = document.createElement('button');

    //add class
    editBtn.className = 'btn btn-primary btn-sm float-right edit';

    //append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    // Append button to li
    li.appendChild(editBtn);

    // Append li to list
    itemList.appendChild(li);


}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
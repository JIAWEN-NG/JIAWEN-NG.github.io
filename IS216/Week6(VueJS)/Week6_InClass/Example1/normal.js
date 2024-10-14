// Existing fruits in the basket
let fruits = [
    'Apple',
    'Orange',
    'Pear'
];

// Task 1
// When normal.html loads (fresh load),
//  the HTML page must display the existing fruits in <ul id='fruits'>
// Each fruit will appear as an <li>...</li>
// DO NOT USE Template Literals
function populate_fruits() {
    // YOUR CODE GOES HERE
    // console.log(fruits);
    // console.log("=== [START] populate_fruits() ===");
    // let ul = document.getElementById('fruits');
    // for (let i = 0; i < fruits.length; i++) {
    //     let li = document.createElement('li');
    //     li.textContent = fruits[i];
    //     ul.appendChild(li);
    //     console.log(li);
    // }
    // console.log("=== [END] populate_fruits() ===");

    let ul = document.getElementById('fruits');
    for (fruit of fruits) {
        let li = document.createElement('li');
        let li_text = document.createTextNode(fruit);
        li.appendChild(li_text);
        ul.appendChild(li);
    }

}

// Task 2
// Add a new fruit input by the user
// DO NOT USE Template Literals
function add_fruit() {
    // YOUR CODE GOES HERE
    console.log("=== [START] add_fruit() ===");
    let fruit = document.getElementById('add_fruit_name').value;
    console.log(fruit);

    let ul = document.getElementById('fruits');

    let li = document.createElement('li');
    li_text = document.createTextNode(fruit);
    li.appendChild(li_text);
    ul.appendChild(li);

    // fruits.push(fruit);
    // console.log(fruits);
    console.log("=== [END] add_fruit() ===");
    fruit = document.getElementById('add_fruit_name').value = '';
}

// Task 3
// Remove a fruit whose name is input by the user
// If the given fruit name can't be found, then don't do anything.
// DO NOT USE Template Literals
function remove_fruit() {
    // YOUR CODE GOES HERE
    console.log("=== [START] remove_fruit() ===");
    // let fruit = document.getElementById('remove_fruit_name').value;
    // let index = fruits.indexOf(fruit);
    // if (index !== -1) {
    //     fruits.splice(index, 1);
    // }

    let fruit = document.getElementById('remove_fruit_name').value;
    console.log(fruit);
 
    let ul = document.getElementById('fruits');

    let ul_children = ul.children;   // childern is a HTMLCollection array in UL  

    for (child of ul_children) {
        console.log(child.innerHTML);
        if (child.innerHTML === fruit) {
            ul.removeChild(child);  //remove the child from the UL

        }
    }
    fruit = document.getElementById('remove_fruit_name').value = '';

    console.log("=== [END] remove_fruit() ===");
}
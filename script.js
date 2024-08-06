const display = document.getElementById("idea");
let array;

//Split file into array
function FirstIdea(list) {
    array = list.toString().split("\n");
    NewIdea();
}
// show random element
function NewIdea() {
    let item = array[Math.floor(Math.random() * array.length)];
    //capitalise first letter
    // item = item.charAt(0).toUpperCase() + item.slice(1);

    display.innerHTML = item;
}

// Load plain text list
window.onload = function () {
    fetch('list.txt')
        .then(response => response.text())
        .then(text => FirstIdea(text))
}
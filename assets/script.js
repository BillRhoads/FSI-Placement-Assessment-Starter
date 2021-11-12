// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Bill Rhoads" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons//Gingerbread 

let gingerMinus = document.querySelector("#minus-gb")

let gingerBreadQty = 0
gingerMinus.addEventListener("click", function(){
    gingerBreadQty = gingerBreadQty - 1
    document.querySelector("#qty-gb").textContent = gingerBreadQty


})
let gingerAdd = document.querySelector("#add-gb")


gingerAdd.addEventListener("click", function(){
    gingerBreadQty = gingerBreadQty + 1
    document.querySelector("#qty-gb").textContent = gingerBreadQty

})

//Chocolate Chip
let chocolateChipMinus = document.querySelector("#minus-cc")

let chocolateChipQty = 0
chocolateChipMinus.addEventListener("click", function(){
    chocolateChipQty = chocolateChipQty - 1
    document.querySelector("#qty-cc").textContent = chocolateChipQty


})
let chocolateChipAdd = document.querySelector("#add-cc")


chocolateChipAdd.addEventListener("click", function(){
    chocolateChipQty = chocolateChipQty + 1
    document.querySelector("#qty-cc").textContent = chocolateChipQty

})

//Sugar Sprinkle
let sugarMinus = document.querySelector("#minus-sugar")

let sugarQty = 0
sugarMinus.addEventListener("click", function(){
    sugarQty = sugarQty - 1
    document.querySelector("#qty-sugar").textContent = sugarQty


})
let sugarAdd = document.querySelector("#add-sugar")


sugarAdd.addEventListener("click", function(){
    sugarQty = sugarQty + 1
    document.querySelector("#qty-sugar").textContent = sugarQty


})

let total = document.querySelector("qty-total")
let totalQty = "qty-gb" + "qty-cc" + "qty-sugar"
// Task 1

const justinBtn = document.getElementById('justin-btn');
const resultBox = document.getElementById('result');
// Add an event listner to the button (the user drags his mouse over the button)
justinBtn.addEventListener('mouseover', function() {
    console.log('Mouse over');
    resultBox.textContent = 'Welcome to My Heart'; 
    resultBox.style.backgroundColor = 'pink';      
    resultBox.style.color = 'blue';       
});


// // Task 2
// // Add an event listner to the button (the user drags his mouse out of the button)
justinBtn.addEventListener('mouseout', function() {
    console.log('Mouse out');
    resultBox.textContent = 'Dont leave Me Please'; 
    resultBox.style.backgroundColor = 'black';      
    resultBox.style.color = 'red'; 

});


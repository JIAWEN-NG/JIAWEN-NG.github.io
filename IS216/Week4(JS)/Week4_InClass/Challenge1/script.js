function calculate() {

    // YOUR CODE GOES HERE

    // document.getElementById('calculate-btn').addEventListener('click', function() {

    //     const number1 = parseInt(document.getElementById('number1').value);
    //     const number2 = parseInt(document.getElementById('number2').value);
    
    //     let sum = 0;
    
        
    //     for (let i = number1; i <= number2; i++) {
    //         sum += i;
    //     }
    
    //     // Display the result
    //     document.getElementById('result').textContent = `The sum is: ${sum}`;
    // });

   if( validate_number() == false) {
    document.getElementById('result').innerHTML = "<span style='color:red;'>1 or more numebrs missing</span>";
    return;
   }



    // another solutions by prof
    let num1_elem = document.getElementById('number1').value;   //.value for all form input
    let num2_elem = document.getElementById('number2').value;
    console.log(num1_elem);
    console.log(num2_elem);

    let sum = 0;

    for(let i = num1_elem; i <= num2_elem; i++) {
        // sum += parseInt(i);
        sum += Number(i);
    }
    console.log(sum);

    // let result = document.getElementById('result').innerText;
    document.getElementById('result').innerHTML = "<span style='color:blue;'>The sume is: " + sum +"</span>";
    console.log(result);
}
function validate_number() {
    console.log('[start] validate_number');

    let num1_elem = document.getElementById('number1').value;
    let num2_elem = document.getElementById('number2').value;

    if (num1_elem.trim() == '' || num2_elem.trim() == '') {
        return false;
    }
    return true;

}


// // Function to handle mouseover event
// justinBtn.addEventListener('mouseover', function() {
//     console.log('Mouse over');
//     resultBox.textContent = 'Welcome to My Heart'; // Display the text
//     resultBox.style.backgroundColor = 'pink';      // Change background color
//     resultBox.style.color = 'blue';                // Change text color
// });

// // Function to handle mouseout event
// justinBtn.addEventListener('mouseout', function() {
//     console.log('Mouse out');
//     resultBox.textContent = 'Don\'t Leave Me Please'; // Display the text
//     resultBox.style.backgroundColor = 'black';        // Change background color
//     resultBox.style.color = 'red';                    // Change text color
// });
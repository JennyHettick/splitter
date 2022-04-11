// Tip rate
var tipAmount = 1;

function change5(){
    if(document.getElementById("btn5").classList.contains("active")){
        // Unselects the button and resets the tip rate value
        document.getElementById('btn5').classList.remove('active');
        document.getElementById('btn5').classList.add('button');
        tipAmount = 1;
        calculate();
    } else {
        // Select the button and set the tip rate value
        var btn = document.getElementById('btn5');
        btn.classList.remove('button');
        btn.classList.add('active');

        // Remove the active class from the other buttons
        document.getElementById('btn10').classList.remove('active');
        document.getElementById('btn15').classList.remove('active');
        document.getElementById('btn25').classList.remove('active');
        document.getElementById('btn50').classList.remove('active');
        tipAmount = 1.05;
        calculate();
    }
	}

function change10(){
    if(document.getElementById("btn10").classList.contains("active")){
        // Unselects the button and resets the tip rate value
        document.getElementById('btn10').classList.remove('active');
        document.getElementById('btn10').classList.add('button');
        tipAmount = 1;
        calculate();
    } else {
        // Select the button and set the tip rate value
        var btn = document.getElementById('btn10');
        btn.classList.remove('button');
        btn.classList.add('active');
    
        // Remove the active class from the other buttons
        document.getElementById('btn5').classList.remove('active');
        document.getElementById('btn15').classList.remove('active');
        document.getElementById('btn25').classList.remove('active');
        document.getElementById('btn50').classList.remove('active');
        tipAmount = 1.1;
        calculate();
    }
    }
function change15(){
    if(document.getElementById("btn15").classList.contains("active")){
        // Unselects the button and resets the tip rate value
        document.getElementById('btn15').classList.remove('active');
        document.getElementById('btn15').classList.add('button');
        tipAmount = 1;
        calculate();
    } else {
        // Select the button and set the tip rate value
        var btn = document.getElementById('btn15');
        btn.classList.remove('button');
        btn.classList.add('active');

        // Remove the active class from the other buttons
        document.getElementById('btn5').classList.remove('active');
        document.getElementById('btn10').classList.remove('active');
        document.getElementById('btn25').classList.remove('active');
        document.getElementById('btn50').classList.remove('active');
        tipAmount = 1.15;
        calculate();
    }
	}

function change25(){
    if(document.getElementById("btn25").classList.contains("active")){
        // Unselects the button and resets the tip rate value
        document.getElementById('btn25').classList.remove('active');
        document.getElementById('btn25').classList.add('button');
        tipAmount = 1;
        calculate();
    } else {
        // Select the button and set the tip rate value
        var btn = document.getElementById('btn25');
        btn.classList.remove('button');
        btn.classList.add('active');

        // Remove the active class from the other buttons
        document.getElementById('btn5').classList.remove('active');
        document.getElementById('btn10').classList.remove('active');
        document.getElementById('btn15').classList.remove('active');
        document.getElementById('btn50').classList.remove('active');
        tipAmount = 1.25;
        calculate();
    }
	}

function change50(){
    if(document.getElementById("btn50").classList.contains("active")){
        // Unselects the button and resets the tip rate value
        document.getElementById('btn50').classList.remove('active');
        document.getElementById('btn50').classList.add('button');
        tipAmount = 1;
        calculate();
    } else {
        // Select the button and set the tip rate value
        var btn = document.getElementById('btn50');
        btn.classList.remove('button');
        btn.classList.add('active');

        // Remove the active class from the other buttons
        document.getElementById('btn5').classList.remove('active');
        document.getElementById('btn10').classList.remove('active');
        document.getElementById('btn15').classList.remove('active');
        document.getElementById('btn25').classList.remove('active');
        tipAmount = 1.50;
        calculate();
    }
	}

function changeCustom(){   
    // Unselect all buttons
    document.getElementById('btn5').classList.remove('active');
    document.getElementById('btn10').classList.remove('active');
    document.getElementById('btn15').classList.remove('active');
    document.getElementById('btn25').classList.remove('active');
    document.getElementById('btn50').classList.remove('active');

    // Take value from input field then calculate totals
    tipAmount = ((document.getElementById('tipfield').value) / 100) + 1;
    calculate();
}

// Calculate Tip Amount and Total
function calculate() {
    // Gets the value of the bill
    var billAmount = parseInt(document.getElementById("bill").value, 10) || 0
    
    // Gets the amount of people
    var peopleAmount = parseInt(document.getElementById("people").value, 10) || 0
    
    // Calculates the final total bill amount per person
    var finalTotal = (billAmount * tipAmount) / peopleAmount;

    // Change total per person on the page
    var results = document.getElementById('totalcountid');
    results.innerHTML = "$" + finalTotal.toFixed(2);

    // Change tip per person on the page
    var tipResults = finalTotal - (billAmount / peopleAmount);
    document.getElementById('tipcountid').innerHTML = "$" + tipResults.toFixed(2);
}

// Resets all inputs and values on the page
function reset() {
    // Reset all of the input fields
    document.getElementById('people').value = 1;
    document.getElementById('bill').value = 0;
    document.getElementById('tipfield').value = 0;

    document.getElementById('btn5').classList.remove('active');
    document.getElementById('btn10').classList.remove('active');
    document.getElementById('btn15').classList.remove('active');
    document.getElementById('btn25').classList.remove('active');
    document.getElementById('btn50').classList.remove('active');

    // Reset to default tip amount
    tipAmount = 1;

    // Reset totals on the page to 0
    document.getElementById('tipcountid').innerHTML = "$0.00";
    document.getElementById('totalcountid').innerHTML = "$0.00";
}
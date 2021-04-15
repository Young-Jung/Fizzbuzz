// Take user input and print numbers to the page
function printNumbers() {
    let numFizz = parseInt(document.getElementById("numFizz").value); // variables
    let numBuzz = parseInt(document.getElementById("numBuzz").value);

    let startNum = parseInt(document.getElementById("numOne").value); // variables
    let endNum = parseInt(document.getElementById("numTwo").value);
    let numbers = getFizzBuzzRange(startNum, endNum);

    // let numbers = getRange(startNum, endNum);
    displayFizzBuzzData(numFizz, numBuzz, numbers);
}

// Gets the range of numbers
function getFizzBuzzRange(start, end) { // parameter
    let numberArray = []; // empty array

    for (let index = start; index <= end; index++) {
        // fizzBuzz things go here
        // Mortage things go here
        numberArray.push(index);
    }

    return numberArray;
}

// Display the numbers on the page
function displayFizzBuzzData(numFizz, numBuzz, numbers) {
    const rowTemplate = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");
    // same as importNode (can be outside this html)
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    // Clear the table
    resultsBody.innerHTML = "";

    // Loop over every element in the numbers array
    // get the value and write it to the page
    for (let i = 0; i < numbers.length; i += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);

        // Return an array of columns from the template   
        let cols = dataRow.querySelectorAll("td");

        // Loop over the columns
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[i + colIndex];

            if (typeof value === "undefined") {
                value = "";
                // } else if (value % 2 == 0) {

                //     cols[colIndex].classList.add("boidIt");
            } else {
                if (value % (numFizz * numBuzz) == 0) {
                    value = "FizzBuzz";
                    cols[colIndex].classList.add("fizzbuzzIt");

                    // Solution 1
                    // let img = document.createElement('img');
                    // img.src = '/img/fizzbuzz.png';
                    // cols[colIndex].appendChild(img);
                    // cols[colIndex].innerHTML += "<br>";

                    // Solution 2 -- I don't like it but working
                    cols[colIndex].innerHTML += '<img src="/img/fizzbuzz.png"><br>';
                    // cols[colIndex].textContent += '<img src="/img/bee.png"><br>';
                    // cols[colIndex].innerHTML += "<br>";
                    // cols[colIndex].textContent += value;
                } else if (value % numFizz == 0) {
                    value = "Fizz";
                    cols[colIndex].classList.add("fizzIt");
                    cols[colIndex].innerHTML += '<img src="/img/fizz.png"><br>';
                } else if (value % numBuzz == 0) {
                    value = "Buzz";
                    cols[colIndex].classList.add("buzzIt");
                    cols[colIndex].innerHTML += '<img src="/img/bee.png"><br>';
                } else {
                    cols[colIndex].innerHTML += '<br>';
                }
            }
            // Note: td's use textContent to set content
            // ****** textContent will not parse the HTML
            // ****** innerHTML only worked for both Solution 1 and Solution 2
            cols[colIndex].innerHTML += value;


            //cols[colIndex].textContent += value;
        }
        // Add the row to the page
        resultsBody.appendChild(dataRow);
    }

}
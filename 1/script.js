
// arrays

const unsorted = [
    3, 2, 1, 9, 6, 5, 4, 7, 8
];

let sorted = evenNumbersFirst(unsorted);

// function

function evenNumbersFirst(input = []) {
    let rearranged = [...input];

    // outer loop
    for (j = 0; j < rearranged.length; j++) {

        // inner loop
        for(i=0; i < rearranged.length - 1; i++){

            // is first element odd and second even?
            if (rearranged[i] % 2 > rearranged[i + 1] % 2) {
                // swap them!
                let s = rearranged[i];
                rearranged[i] = rearranged[i + 1];
                rearranged[i + 1] = s;
            }
            // else do nothin' … 
        }
    }
    return rearranged;
}

// display things ...

function display(){
    const html = `
        <h1>Javascriptum</h1>
        <h2>Gerade Zahlen vor ungeraden</h2>
        <hr>

        <h3>unsorted</h3>
        <div>
            [
            ${unsorted.map(val => `${val}`)}
            ]
        </div>
        <h3>sorted</h3>
        <div>
            [
            ${sorted.map(val => `${val}`)}
            ]
        </div>
    `;   
    document.body.innerHTML = html;
}

document.addEventListener('readystatechange', function () {
    if (document.readyState === "complete") {
        display();
    }
});
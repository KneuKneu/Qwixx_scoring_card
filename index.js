const generateCardBtn = document.getElementById("GenerateCardBtn")
const numberInput = document.getElementById("NumberInput")
const scoreCardDiv = document.getElementById("ScoreCardDiv")
let allNumButtons = ""

const redScoreText = document.getElementById("red-score-field")
const yellowScoreText = document.getElementById("yellow-score-field")
const greenScoreText = document.getElementById("green-score-field")
const blueScoreText = document.getElementById("blue-score-field")
// const totalScoreText = document.getElementById("total-score")

generateCardBtn.addEventListener("click", function () {
    generateNumbers(numberInput.value)
})

function createRowButtons(max, color, type) {
//Type = "regular" or "inverse"
    let listItem = ""
    if (type === "inverse"){
        for (let i = max; i > 1; i--) { 
            localStorage.setItem(color + "-" + i, i);
            listItem += `
        <button id="${color}-row-background" class="btn row-background" value="${color}-${i}">
            ${i}
        </button>
        `
        }
    }
    else if (type === "regular"){
        for (let j = 2; j <= max ; j++) {
            localStorage.setItem(color + "-" + j, j);
            listItem += `
        <button id="${color}-row-background" class="btn row-background" value="${color}-${j}">
            ${j}
        </button>
        `
    }
}
    return listItem
}

function updateScore(color,){

}

function generateNumbers(max) {
    // if the inputed max number is between 12 and 20 generate the numbers for the card
    localStorage.clear();
    if (max >= 12 && max <= 20) {
        let listItems = ""
        for (let i = 1; i <= 4; i++) {
            if (i === 1) {
                listItems += `<div id="red-row" class="row">`
                listItems += createRowButtons(max, "red", "regular")
            } else if (i === 2) {
                listItems += `<div id="yellow-row" class="row">`
                listItems += createRowButtons(max, "yellow", "regular")
            } else if (i === 3) {
                listItems += `<div id="green-row" class="row">`
                listItems += createRowButtons(max, "green", "inverse")
            } else {
                listItems += `<div id="blue-row" class="row">`
                listItems += createRowButtons(max, "blue", "inverse")
            }

            listItems += `</div>`
        }
        //Add the scoring section to the card
        listItems += `
        <div id="score-fields">
        <span id="score-text">Score</span>
        <button id="red-score-field" class="score-field">0</button>
        <span>+</span>
        <button id="yellow-score-field" class="score-field">0</button>
        <span>+</span>
        <button id="green-score-field" class="score-field">0</button>
        <span>+</span>
        <button id="blue-score-field" class="score-field">0</button>
    </div>`
        scoreCardDiv.innerHTML = listItems
        //Update allNumButtons to set the on click event listener
        allNumButtons = document.querySelectorAll(".btn");
        allNumButtons.forEach(button => {
             button.addEventListener("click", event => { 
                buttonValue = localStorage.getItem(button.value)
                if (buttonValue === "X"){  
                    var number = button.value.replace(/^\D+/g, '');  
                    console.log("nubmer " + number)
                    console.log(button.value)
                    button.innerHTML = number
                    console.log("dsd"+localStorage.getItem(button.value))
                    console.log(localStorage.setItem(button,3))
                }else
                    button.innerText = "X"
                    localStorage.setItem(button.value,"X")
            })
        })
        

}
}

function clicked() {
    console.log(this)
    // The event object has a property called "target" that refers to the element that triggered the event
    // 'event' is depricated :( -> ask ChatGPT :)
    var clickedElement = event.target;

    // value of the element you clicked (old)
    //   for (let i = Number(clickedElement.innerText); i > 1 ; i-- ){
    //     console.log(i)
    //     const currentElement = document.getElementById(`test ${i}`)
    //       // replace the value with an X
    //       currentElement.innerHTML = "X"

    //   }
    clickedElement.innerHTML = "X"

}

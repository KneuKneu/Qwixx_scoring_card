const generateCardBtn = document.getElementById("GenerateCardBtn")
const numberInput = document.getElementById("NumberInput")
const scoreCardDiv = document.getElementById("ScoreCardDiv")

function generateNumbers(max){
    numbers = []
// if the inputed max number is between 12 and 20 generate the numbers for the card
    if (max >= 12 && max <= 20){
        let listItems = "<table>"
        for (let i = 1; i <= 4 ; i++){
            console.log(i)
            if (i === 1){
                listItems += `<tr id="red-row">`
            }else if(i === 2){
                listItems += `<tr id="yellow-row">`
            }else if(i === 3){
                listItems += `<tr id="green-row">`
            }else {
                listItems += `<tr id="blue-row">`
            }
            if (i === 3 || i === 4){
                for (let j = max; j > 1 ; j--){
                    numbers.push(j)
                    listItems += `
                    <td>
                        ${j}
                    </td>
                    `
                }  
            }else{
                for (let j = 1; j < max ; j++){
                    numbers.push(j+1)
                    listItems += `
                    <td id="test ${j+1}" onclick="clicked()">${j+1}
                    </td>
                    `
                }
            }

            listItems += `</tr>`
            console.log(i)
        }
        listItems += "</table>"
        scoreCardDiv.innerHTML = listItems
        console.log(listItems)
        console.log(numbers)
        console.log(numbers.reverse())
        console.log(numbers)
        console.log(numbers.reverse())
    }else {

    }

}

function clicked() {
    console.log(this)
  // The event object has a property called "target" that refers to the element that triggered the event
  var clickedElement = event.target;

  // Now you can do something with the clicked element
  console.log('Element clicked:', clickedElement)
  // value of the element you clicked
  for (let i = Number(clickedElement.innerText); i > 1 ; i-- ){
    console.log(i)
    const currentElement = document.getElementById(`test ${i}`)
    
  }
  // replace the value with an X
  clickedElement.innerHTML = "X"

}

generateCardBtn.addEventListener("click",function() {
    generateNumbers(numberInput.value)
})

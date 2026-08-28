let inputs = document.querySelectorAll(".guess-input")
let moves = document.querySelector('.moves')
let movesCount = 5
if (moves) moves.textContent = movesCount

let number = Math.floor(Math.random() * 100)
//document.querySelector('.number').textContent = number

inputs.forEach((input, index) => {
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault() 

            let userGuess = parseInt(input.value)

            if (isNaN(userGuess)) {
                alert("Введите число!")
                return
            }

            movesCount--
            moves.textContent = movesCount
            
            if (userGuess == number) {
                input.type = "text"
                input.value = `${userGuess} ⠀–⠀⠀Угадал!`
                input.disabled = true

                let numberElement = document.querySelector('.number')
                if (numberElement) {
                    numberElement.textContent = number
                    document.querySelector('.number').textContent = number
                    numberElement.style.color = 'green'
                }
                return
            } 

            if (userGuess < number) {
                input.type = "text"
                input.value = `${userGuess} ⠀–⠀⠀Больше`
            } 
            
            else {
                input.type = "text"
                input.value = `${userGuess} ⠀–⠀ Меньше`
            }
            
            let nextInput = inputs[index + 1]

            if (nextInput) {
                nextInput.disabled = false
                nextInput.focus();          
                input.disabled = true  
            }
            else {
                input.disabled = true
                
            }

             if (movesCount == 0 && userGuess != number) {
                input.type = "text"
                let numberElement = document.querySelector('.number')
                if (numberElement) {
                    numberElement.textContent = number
                    document.querySelector('.number').textContent = number
                    numberElement.style.color = 'red'
                }
                input.disabled = true
                return;
            }

        }
    })
})


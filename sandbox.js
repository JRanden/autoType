const dynamicText = document.querySelector("h1")
var speed = 500 / document.getElementById("speed").value 
const words = ["This is an auto typing project",]
var form = document.getElementById("formId")
let text = document.getElementById("inputText")
let Deleting = false 
let i = 0
let x = 0


const typing = () => {
    var speed = 500 / document.getElementById("speed").value 
    const currentWord = words[x]
    const currentChar = currentWord.substring(0,i);
    dynamicText.textContent = currentChar;

    if (!Deleting && i < currentWord.length) {
        i++;
        setTimeout(typing,speed)
    }
    else if(Deleting && i > 0){
        i--;
        setTimeout(typing,speed)
    }
    else {
        Deleting = !Deleting
        x = !Deleting ? (x + 1) % words.length : x;
        setTimeout(typing,1200)
    
    }
    }

    form.addEventListener("submit", function(e){
        e.preventDefault();
    })

    form.addEventListener("submit", function () {
        inputString = text.value
        console.log(inputString)
        words.push(inputString)

    })


    
console.log(speed)
typing()

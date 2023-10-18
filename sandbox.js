const dynamicText = document.querySelector("h1")
const speed = document.getElementById('speed').value * 200;
const words = ["Røyken Videregående Skole"]
let Deleting = false 
let i = 0
let x = 0


const typing = () => {

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
        setTimeout(typing,1200)
    }
    }

    
console.log(speed)
typing()

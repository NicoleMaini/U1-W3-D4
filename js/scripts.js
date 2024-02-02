

// bottone per estrarre i numeri

const btnEnter = document.querySelector("button")
const numberContainer = document.querySelector(".push-number h2")
const arr = [];


    btnEnter.onclick = () => {
        
        const randomNumber = Math.floor(Math.random()*arr.length)
        console.log(randomNumber);

        numberContainer.innerText = randomNumber 
        
        const cellNumber = document.getElementById(randomNumber)

        console.dir(cellNumber);
        cellNumber.classList.add("check")

       

    }

// generiamo la funzione madre

const generateBoard = () =>{
    // generiamo l'elemento in cui ci inseriremo
    const board = document.querySelector(".container")
    console.log(board);
    
    for(let i = 0; i < 76; i++){
        
        arr.push(i + 1);
        
        const cellDiv = document.createElement("div") 
        cellDiv.classList.add("cell-container")
        
        const cell = document.createElement("h3") 
        cell.innerText = i + 1;
        cell.setAttribute("id", i + 1) 
        
        cellDiv.appendChild(cell)
        board.appendChild(cellDiv)

        
    }
    
}

window.onload = () =>{

    generateBoard()
}
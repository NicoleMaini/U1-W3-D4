


const generateRandomNumber = () =>{
    const btnEnter = document.querySelector("button")
    const btnAndRandomNumberContainer = document.querySelector(".push-number")
    console.log(btnAndRandomNumberContainer);

    btnEnter.onclick = () => {
        let randomNumber = document.createElement("h2")
        randomNumber.innerText = Math.floor(Math.random()*100) + 1
        console.log(randomNumber);

        btnAndRandomNumberContainer.appendChild(randomNumber)        
    }

}

// generiamo la funzione madre

const generateBoard = () =>{
    // generiamo l'elemento in cui ci inseriremo
    const board = document.querySelector(".container")
    console.log(board);

    
    for(let i = 0; i < 99; i++){
        
        const cellDiv = document.createElement("div") 
        cellDiv.classList.add("cell-container")
        
        const cell = document.createElement("h3") 
        cell.innerText = i + 1
        
        cellDiv.appendChild(cell)
        board.appendChild(cellDiv)
        
        generateRandomNumber()
        const pushRandomNumber = document.querySelector(".push-number h2")
        
        if(pushRandomNumber === board[i]){
            cell.classList.add("check")
        }
        
        
        console.log(pushRandomNumber);
}
    
}






window.onload = () =>{

    generateBoard()
}
let btnRef = document.querySelectorAll(".option_button");
let popupRef = document.querySelector(".popup");
// let newgamebtn = document.getElementById("new_game");
let restartBtn = document.getElementById("restart");
let messageBtn = document.getElementById("message");

// array for winning patten/logic

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
];
// displaying player x first_turn

let xturn = true;
let count = 0;
 
//Disable all Buttons
const disableButtons = () => {
    btnRef.forEach((element)=> (element.disabled = true));   // making elements "UNUSABLE" by setting element.disabled  ==> true
    // enabling the popup message
    popupRef.classList.remove("hide")
}

//Enable all btns for new game..
const enableButtons = () => {
    btnRef.forEach(element => {
        element.innerText = "";
        element.disabled = false;  // making elements "USABLE" by setting elemets.disabled  ==> false
    });
    //disable popup
    popup.classList.add("hide");
}

//function ==> in case : a player wins
const winFunction = (letter) => {
    disableButtons();
    if(letter == "X"){
        messageBtn.innerHTML = "&#x1F389; <br> Player 'X' wins";  // &#x1F389 is for "Celebrations" Emojis
    }
    else{
        messageBtn.innerHTML = "&#x1F389; <br> Player 'O' wins";  // &#x1F389 is for "Celebrations" Emojis
    }
}

//Function for draw 
const drawFunction = () => {
    disableButtons();
    messageBtn.innerHTML = "&#x1F60E; <br>It's a Draw!"; // "&#x1F60E" is for "cool" emoji
}

//Logic for player winning the game
const winchecker = () => {
    // Loop through all win patterns 
    for(let i of winningPattern){
        let[element1, element2, element3] = [
            btnRef[i[0]].innerText, 
            btnRef[i[1]].innerText, 
            btnRef[i[2]].innerText,
        ];
        //check if elements are filled,
        if(element1 != "" && element2 != "" && element3 != ""){
            if(element1 == element2 && element2 == element3){
                // if all 3 element's values are same ==> pass the resp. values to winFunction
                winFunction(element1);
            }
        }
    }
}


// Display X || O on Click

btnRef.forEach((element)=> {
    element.addEventListener("click", ()=> {
        if(xturn){
            xturn = false;
            // display X
            element.innerText = "X";
            element.disabled = true;
        }
        else{
            xturn = true;
            // display Y 
            element.innerText = "O";
            element.disabled = true;
        }
        //Increment count on each click
        count += 1;
        if(count === 9){
            // Its a draw since there are 9 boxes only!
            drawFunction();
        }
        //check for win in every click
        winchecker();
    })
})

// Enable Buttons and disable popup on page load.

window.onload = enableButtons;
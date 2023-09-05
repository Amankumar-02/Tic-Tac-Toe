let tab = document.querySelector(".tab");
let btn = document.getElementById("btn");
let turn = document.querySelector(".turn");
let box = document.querySelectorAll(".box");
let info = document.getElementById("info");

function eventHandler(){
    let count = 1;
    tab.addEventListener("click", (event) => {
        let value = event.target
    if (value.textContent) {
        alert("wrong input")
    }
    else if (!value.textContent) {
        if (count % 2 === 0) {
            value.textContent = "X"
            count++
            turn.textContent="O";
            checkWin()
        } else {
            value.textContent = "O"
            count++
            turn.textContent="X";
            checkWin()
        }
    }
})
}
function reload(){
    btn.addEventListener("click",()=>{
        location.reload()
    })
}
const checkWin = ()=>{
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e=>{
        if((box[e[0]].textContent === box[e[1]].textContent) && (box[e[2]].textContent === box[e[1]].textContent) && (box[e[0]].textContent !== "")){
            console.log("win");
            info.textContent = box[e[0]].textContent;
        }
    })
}
eventHandler()
reload()
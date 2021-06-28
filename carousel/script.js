document.querySelector(".nav-left").addEventListener("click", moveLeft)
document.querySelector(".nav-right").addEventListener("click", moveRight)

let moved = false
var positions = {
    "0.00" : "one",
    "-333.33" : "two",
    "-666.66" : "three",
    "-999.99" : "four",
    "-1333.32" : "five"
}

function colorRoundButton(left){
    console.log(left)
    document.querySelectorAll(".round-btn").forEach((btn)=>{
        btn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    })
    document.querySelector(`.${positions[left.toString()]}`).style.backgroundColor = "white";
}

function moveRight(){
    moved = true
    ele = document.querySelector(".caroussel")
    left = ele.style.left
    left = left.replace("px", "")
    newLeft = Number(left) - 333.33
    console.log(newLeft.toFixed(2))
    if(newLeft.toFixed(2) == -1666.65){
        newLeft = 0;
    }
    ele.style.left = `${newLeft}px`
    colorRoundButton(newLeft.toFixed(2))
}

function moveLeft(){
    moved = true
    ele = document.querySelector(".caroussel")
    left = ele.style.left
    left = left.replace("px", "")
    newLeft = Number(left) + 333.33
    if(newLeft === 333.33){
        newLeft = -1333.32;
    }
    ele.style.left = `${newLeft}px`
    console.log("From moveLeft : " + newLeft)
    colorRoundButton(newLeft.toFixed(2))
}

function move(left){
    moved = true
    document.querySelector(".caroussel").style.left = `${left}px`
    document.querySelectorAll(".round-btn").forEach((btn)=>{
        btn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    })
    document.querySelector(`.${positions[left.toFixed(2)]}`).style.backgroundColor = "white";
}
document.querySelector(".one").addEventListener("click", ()=>{move(0)})
document.querySelector(".two").addEventListener("click", ()=>{move(-333.33)})
document.querySelector(".three").addEventListener("click", ()=>{move(-666.66)})
document.querySelector(".four").addEventListener("click", ()=>{move(-999.99)})
document.querySelector(".five").addEventListener("click", ()=>{move(-1333.32)})

function slide(){
    if(!moved){
        ele = document.querySelector(".caroussel")
        left = ele.style.left
        left = left.replace("px", "")
        newLeft = Number(left) - 333.33
        if(newLeft.toFixed(2) == -1666.65){
            newLeft = 0;
        }
        ele.style.left = `${newLeft}px`
        colorRoundButton(newLeft.toFixed(2))

    }
    else{
        moved = false
    }
}
window.onload = (e)=>{
    setInterval(slide, 4000)
}
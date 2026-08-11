

let button =document.querySelector("button")
let textArea = document.querySelector("#text-area")


button.addEventListener("click",function(){
    let notes = document.createElement("p")
    let img = document.createElement("img")
    img.src = "delete.png"
    notes.setAttribute("contenteditable","true")
    notes.className = "input-box"
    textArea.appendChild(notes).appendChild(img)
})

textArea.addEventListener("click",function(e){
        if(e.target.tagName ==="IMG"){
            e.target.parentElement.remove()
            savedata()
        }
        else if(e.target.tagName === "P"){
            let notes = document.querySelectorAll(".input-box")
            notes.forEach(function(d){
                d.onkeyup= function(){
                    savedata()
                }
            })
        }
    })

function savedata(){
    localStorage.setItem("data1",textArea.innerHTML)
}
function getdata(){
    textArea.innerHTML = localStorage.getItem("data1")
}

getdata()

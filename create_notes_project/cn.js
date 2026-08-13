

let button =document.querySelector("button")
let Addnotes = document.querySelector("#text-area")

button.addEventListener("click",function(){
    let p = document.createElement("p")
    p.setAttribute("contenteditable","true")
    p.className ="input-box"
    let img = document.createElement("img")
    img.src = "delete.png" 
    Addnotes.appendChild(p).appendChild(img)

})

Addnotes.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
       e.target.parentElement.remove()
       saveData()
    }
    else if(e.target.tagName==="P"){
        let input = document.querySelectorAll(".input-box")
        input.forEach(function(items){
            items.onkeyup = function(){
                saveData()
            }
        })
    }
})

function saveData(){
    localStorage.setItem("data2",Addnotes.innerHTML)
}

function shoewData(){
    Addnotes.innerHTML = localStorage.getItem("data2")
}

shoewData()


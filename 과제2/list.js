var idx = 0
function create() {
    const title = document.createElement("h3")
    const titleDiv = document.createElement("div")
    const newDiv = document.createElement("div")
    const newP = document.createElement("p")
    const del = document.createElement("button")
    const memo = document.getElementById("input").value
    const list = document.getElementById("list")
    del.innerText = "삭제"
    del.setAttribute('id', idx)
    del.setAttribute('class', 'del')
    newP.setAttribute('class', 'memo')
    newP.innerText = memo
    const newDate = new Date()
    title.innerHTML = newDate
    titleDiv.appendChild(title)
    newDiv.appendChild(titleDiv)
    newDiv.appendChild(newP)
    newDiv.appendChild(del)
    list.appendChild(newDiv)
  
    
    newDiv.setAttribute('id', idx)
    titleDiv.setAttribute('id', idx)
    idx++
    del.addEventListener('click', function(e){
        const remove = document.getElementById(e.target.id)

        list.removeChild(remove)
    })
}
function PinkPaint() {
    const paint = document.getElementById(idx-1).firstChild

    paint.style.backgroundColor = "pink"
}
function GrayPaint() {
    const paint = document.getElementById(idx-1).firstChild
    paint.style.backgroundColor = "Gray"
}

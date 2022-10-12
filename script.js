let list = document.getElementsByClassName("pull-down-list")

window.addEventListener('load', function(){
  const pullDownButton =  document.getElementById("lists")
  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:blue;")
  })
})

window.addEventListener('load', function(){
    const pullDownButton =  document.getElementById("lists")
    pullDownButton.addEventListener('mouseout', function(){
      this.removeAttribute("style", "background-color:red;")
    })
})

  window.addEventListener('load', function(){
    const pullDownButton =  document.getElementById("lists")
    pullDownButton.addEventListener('click', function(){
      this.setAttribute("style", "background-color:green;")
    })
})

function pullDown() {
const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")
const pullDownChild = document.querySelectorAll(".pull-down-list")
const currenlist = document.getElementById("current-list")
pullDownButton.addEventListener('click', function() {
  if (pullDownParents.getAttribute("style") == "display:block;"){ 
    pullDownParents.removeAttribute("style", "display:block;")
  } else {
    pullDownParents.setAttribute("style", "display:block;")
  }
})
pullDownChild.forEach(function(list) {
  list.addEventListener('click', function() {
    const value = list.innerHTML
    currenlist.innerHTML = value
    console.log(value)
  })
})
}
window.addEventListener('load', pullDown)
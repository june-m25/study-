let list = document.getElementsByClassName("pull-down-list")

window.addEventListener('load', function(){
  const pullDownButton =  document.getElementById("lists")
  pullDownButton.addEventListener('mouseover', function(){
    pullDownButton.setAttribute("style", "background-color:blue;")
  })
})

window.addEventListener('load', function(){
    const pullDownButton =  document.getElementById("lists")
    pullDownButton.addEventListener('mouseout', function(){
      pullDownButton.removeAttribute("style", "background-color:red;")
    })
})

  window.addEventListener('load', function(){
    const pullDownButton =  document.getElementById("lists")
    pullDownButton.addEventListener('click', function(){
      pullDownButton.setAttribute("style", "background-color:green;")
    })
})

  
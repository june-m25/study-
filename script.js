let list = document.getElementsByClassName("pull-down-list")

window.addEventListener('load', function(){
  const pullDownButton =  document.getElementById("lists")
  pullDownButton.addEventListener('mouseover', function(){
    console.log("乗る")
  })
})

window.addEventListener('load', function(){
    const pullDownButton =  document.getElementById("lists")
    pullDownButton.addEventListener('mouseout', function(){
      console.log("外れる")
    })
})

  window.addEventListener('load', function(){
    const pullDownButton =  document.getElementById("lists")
    pullDownButton.addEventListener('click', function(){
      console.log("クリック")
    })
})
  
  
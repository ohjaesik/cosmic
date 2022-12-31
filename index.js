

function tagPrint() {
  const print =  document.getElementById("input").value
  const p = document.getElementById("p")

    fetch('https://my-json-server.typicode.com/smashh712/json_placeholder/members/')
    .then(response => response.json())
    .then(data => {for(var i = 0; i <=6; i++){
      if(data[i].name == print){
        p.innerText = data[i].name + "의 생일은 " + data[i].birth.substr(0,2) + "년 " + data[i].birth.substr(2,2)
      + "월 " +data[i].birth.substr(4,2)+ "일 " +"입니다"
      }
      if(data[i].id == print){
        p.innerText = data[i].name + "의 생일은 " + data[i].birth.substr(0,2) + "년 " + data[i].birth.substr(2,2)
      + "월 " +data[i].birth.substr(4,2)+ "일 " +"입니다"
      }
    }})
  
  }

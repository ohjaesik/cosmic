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
      else if(print > 6){
        p.innerText = "유효하지 않은 숫자입니다"
      }
      else if(print == ""){
        p.innerText = "숫자를 입력해주세요"
      }
    }})
  
  }

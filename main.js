
document.getElementById("myBtn").addEventListener ('click', function fibonacci() {
    myInput = document.getElementById("inputFibo").value; 
    
    let url = "http://localhost:5050/fibonacci/"
    url += myInput;
      
    fetch(url).then((response)  => { 
      response.json().then((data) => {
      
        return document.getElementById("result").innerText = data.result 
        
      })
    })
  })
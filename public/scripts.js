
/*global fetch*/

function handleClick(){
  console.log("This button is clicked");

    const data = document.getElementById("data").value;

  fetch("/data")
    .then(response=>response.text())
    .then(response=>{
        
      const keyword = document.getElementById("data").value    //declares the constant keyword as the value entered in the search bar

  
        if (Object.values(response) == 1) {
            
            
            console.log(response)
            document.getElementById("results").innerHTML = `<h2>YUP!</h2>
                    <div>The Word: <h1>${keyword}</h1> is a valid word in the English Dictionary.</div>
                    `;

            
        } else {
            
             document.getElementById("results").innerHTML = `<h2>NOPE!</h2>
                    <div>The Word: <h1>${keyword}</h1> is a NOT a valid word in the English Dictionary.</div>
                    `;
            
            
            
            
        }
    
    
    //if just this one below is use, it works????
      console.log(response)
            document.getElementById("results").innerHTML = `<h2>YUP!</h2>                               
                    <div>The Word: <h1>${keyword}</h1> is a valid word in the English Dictionary.</div>
                    `;

    //   document.getElementById("results").innerHTML = response;

    })
}








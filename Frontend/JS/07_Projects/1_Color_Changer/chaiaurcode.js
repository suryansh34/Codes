const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// due to node list on button we can directly apply forEach loop.

buttons.forEach(function(buttons) {
    console.log(buttons);
    buttons.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target); //events kaha se aa rha batata hai.

    switch(e.target.id){
        
    case "grey":
        body.style.backgroundColor = "grey";
    break;          
            
    case "white":
        body.style.backgroundColor = "white";
    break;
                
    case "blue":
        body.style.backgroundColor = "blue";
    break;
                    
    case "yellow":
        body.style.backgroundColor = "yellow";
    break;

    case "red":
        body.style.backgroundColor = "red"
    break;
    
    case "green":
        body.style.backgroundColor = "green"
    break;      
    
    case "orange":
        body.style.backgroundColor = "orange"
    break;     
    }
                    
        });
})
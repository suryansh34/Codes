const form = document.querySelector('form')

// if it is declared outside the form tag this usecase will give you empty value 
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
    e.preventDefault() //prevent deafult value , when form is submitted it sends to sever.

    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value);

    const results = (document.querySelector('#results'));
    
    //Checking Height input type:

    if(height == '' || height < 0 || isNaN(height)){

        result.innerHTML = `Please give a valid height ${height}`;
    }

    //Checking Weight input type:

    else if(weight == '' || weight < 0 || isNaN(weight)){

        result.innerHTML = `Please give a valid weight ${weight}`;
    }

    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
    
    
})
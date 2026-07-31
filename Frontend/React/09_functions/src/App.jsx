// code to get scrolling information from 

import React from 'react'

const App = () => {

  function inputChanging(){
      console.log(`User is Typing`);
      
  }

  function btnClicked(){
    console.log('button is clicked');
    
  }

  const pageScrolling = (elem)=>{
    if(elem>0){
    console.log('sidha scrolling');
    }else{
      console.log('ulta scrolling');
      
    }
  }

  return (
    <div onWheel={(elem) =>{
          pageScrolling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App

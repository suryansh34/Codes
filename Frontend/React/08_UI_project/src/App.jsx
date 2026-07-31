import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

 const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'A confident professional who feels completely in control of her financial journey. She regularly utilizes modern banking services, manages her investments seamlessly, and enjoys strong financial security.',
    color: 'blue',
    tag: 'Satisfied'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'An ambitious worker who relies on basic banking features like a savings account but lacks access to affordable credit, loans, or insurance, forcing him to rely on alternative financial tools.',
    color: 'red',
    tag: 'UnderBanked'
  },
  {
    img: 'https://images.unsplash.com/photo-1546979859-b7d45d499dd6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'A dedicated individual living in a community with limited access to financial institutions, reliable online banking infrastructure, or tailored financial guidance to help her grow her savings.',
    color: 'lightgreen',
    tag: 'UnderServed'
  }
];


  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App

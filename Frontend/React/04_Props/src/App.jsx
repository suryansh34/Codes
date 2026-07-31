import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <>
    <div className='parentCard'>
      
    <Card img='https://images.unsplash.com/photo-1770045608483-7973a5933cf8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' user='Aman' description='A Police Officer'/>
    <Card img='https://plus.unsplash.com/premium_photo-1734348383114-69bd3d9f8b79?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' user='Suryansh' description='A BTech Student'/>
    <Card img='https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' user='Yishuraj' description='A School Going student'/>

    </div>
    </>
  )
}

export default App

import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* DETAILED VALA INPUT  */}
        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
          placeholder='Write Details here'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {
  return (
    <div 
      key={idx} 
      /* Added m-3 (margin around card) and shadow-md for a better pop */
      className="flex justify-between flex-col items-start relative h-56 w-44 bg-cover rounded-xl text-black pb-3 px-4 m-3 shadow-md bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
      style={{ paddingTop: '65px' }}
    >
      <div className="w-full overflow-hidden" style={{ maxHeight: '110px' }}>
        <h3 
          className="font-bold text-black"
          style={{ 
            fontSize: '13px', 
            lineHeight: '16px',
            marginBottom: '4px' 
          }}
        >
          {elem.title}
        </h3>

        <p 
          className="font-semibold text-gray-700"
          style={{ 
            fontSize: '11px', 
            lineHeight: '15px', 
            wordBreak: 'break-word'
          }}
        >
          {elem.details}
        </p>
      </div>

      <button 
        onClick={() => deleteNote(idx)} 
        className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white mt-auto z-10"
      >
        Delete
      </button>
    </div>
  )
})}
        </div>
      </div>
    </div>
  )
}

export default App
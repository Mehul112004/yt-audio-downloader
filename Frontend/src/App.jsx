import { useState } from "react"

function App() {
  const [clicked,setClicked]=useState(false)
  const handleClick=()=>{
    setClicked(true)
  }

  return (
    <>
      <div className="flex border border-red-500 flex-col p-8 justify-center items-center h-max gap-5 rounded-xl">
        <h1 className="sm:text-5xl text-diffBlack text-3xl font-mono">Enter your Youtube video URL :- </h1>
        <form action="http://localhost:3000/api/send" method='POST' className="flex flex-col w-full justify-center items-center gap-4 h-full">
        <input type="text"  className={`px-6 py-4 text-2xl text-gray-300 font-semibold w-full h-full max-w-2xl rounded-lg focus:outline-red-800 bg-diffBlack backdrop-blur-md`} name='url' onClick={handleClick}/>
        <button type='submit' className='px-5 py-3 text-2xl rounded-md max-w-md text-white bg-orange-700 active:scale-95'>Download</button>
        </form>
      </div>
    </>
  )
}

export default App
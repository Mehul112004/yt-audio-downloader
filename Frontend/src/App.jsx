import { useState,useRef, useEffect } from 'react'
import axios from "axios"
// import './App.css'

function App() {
  // const inputRef = useRef(null);
  // const handleClick=()=>{
  //   console.log(inputRef.current.value)

  //   axios.post("http://localhost:3000/send",{url:inputRef.current.value})
  //     .then((response)=>{
  //         console.log(response);
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     })
  // }
  return (
    <>
      <div className="flex border border-red-500 flex-col p-8 justify-center items-center gap-4">
        <h1>Enter your Youtube video URL :- </h1>
        <form action="http://localhost:3000/api/send" method='POST'>
        <input type="text"  className='px-6 py-2 max-w-xl border border-black' name='url'/>
        <button type='submit' className='bg-black text-white p-2 rounded-md active:scale-95'>Download</button>
        </form>
      </div>
    </>
  )
}

export default App

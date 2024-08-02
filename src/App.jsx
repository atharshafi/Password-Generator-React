import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pwd, setPwd] = useState('')

  const PwdRef=useRef(null)

  const generatePwd = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) str += '1234567890'
    if (charAllowed) str += '!@#$%^&*()_+'

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPwd(pass)
  }, [length, numAllowed, charAllowed])

  const copyPasswordToClipBoard= ()=>{
    window.navigator.clipboard.writeText(pwd)
    PwdRef.current.select()

  }

  useEffect(()=>{
    generatePwd()
  },[length, numAllowed, charAllowed])





  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-xl px-10 py-9 my-8 bg-blue-900">
      <h1 className="w-full max-w-lg my-3 px-10 py-2 bg-black font-bold text-2xl text-white text-center">
      Password Generator
      </h1>
      <div className=" flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text" 
          value={pwd} 
          className="outline-none flex-grow py-1 px-3" 
          placeholder="Password" 
          readOnly 
          ref={PwdRef}
        />
        <button
        onClick={copyPasswordToClipBoard} 
        className="outline-none bg-black text-white px-3 py-0.5">COPY</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className='text-white'>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numAllowed}
            onChange={() => setNumAllowed(prev => !prev)}
          />
          <label className='text-white'>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(prev => !prev)}
          />
          <label className='text-white'>Special Characters</label>
        </div>
      </div>
      <button 
        onClick={generatePwd} 
        className="bg-black text-white px-4 py-2 rounded mt-4">
        Generate Password
      </button>
    </div>
  )
}

export default App
import Link from 'next/link'
import React from 'react'
import Home from '../page'

const about = () => {
  return (<div>
    <div className="flex justify-between w-full p-10 h-5 bg-black text-white">
    <h2>
      Milestone 2 
    </h2>
    <div className="flex justify-between w-1/5 bg-white border-black gap-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>contact</Link>
    </div>
   </div>
    <div className="flex justify-center text-4xl font-extrabold items-center h-full m-7 p-5">
    <h1>
      This is a About Page 
    </h1>
   </div>
 </div>
  )
}

export default about
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'


const Search = () => {
    const router = useRouter()
    const [search, setSearch] = useState("")

    const handleSubmit = async (e : React.FormEvent) =>{
        e.preventDefault()
        setSearch("")
        router.push(`/${search}/`)
    }
  return (
    <form onSubmit={handleSubmit} className="w-50 flex justify-center md:justify-between">
        <input 
            type="text" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="bg-white text-black p-2 w-80 text-xl rounded-xl"
            placeholder="Search"
        />
        <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
                🚀
        </button>
    </form>
  )
}

export default Search

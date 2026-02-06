"use client"
export default function Button() {
    return(
        <button className="bg-red-500 hover:bg-red-300 text-white font-bold p-2 border-radius:rounded" onClick={()=> alert("client and server components.")}>CLICK ME</button>
    )
}
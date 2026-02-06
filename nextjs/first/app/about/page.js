"use client"
export default function About(){
    const handleClick = async () => {
        let data = {
            name: "shreya",
            role: "swe"
        }
        let a = await fetch("api/add",{
            method: "POST", headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        let res = await a.json()
        console.log(res)
    }
    return(
        <div>
        <div>
            this is our about page.
        </div>
        <div>
            <button className="bg-blue-400" onClick={handleClick}>CLICK ME</button>
        </div>
        </div>
    )
}
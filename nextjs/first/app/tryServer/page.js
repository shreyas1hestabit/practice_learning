import fs from "fs/promises";
export default function TryServer() {
    const submitAction =async(e)=>{
        "use server"
        console.log(e.get("name"),e.get("address"))
        fs.writeFile("shreya.txt",`Name is ${e.get("name")} and address is ${e.get("address")}`)
    }
    return (
        <div className="w-2/3 mx-auto my-12">
            {/* <form action="">  */}
                {/* abh kya ho rha hai ki jb me form mein values daalti hu toh page reload ho jata hai. and upar url mein values show hoti hai. if i want ki page reload na ho toh me server actions ka use krti hu. */}
                <form action={submitAction}>
                <div>
                    <label htmlFor="name">NAME</label>
                    <input name="name" id="name" className="text-black bg-gray-300 mx-10" type="text"></input>
                </div>
                <div>
                    <label htmlFor="address">ADDRESS</label>
                    <input name="address" id="address" className="text-black bg-gray-300 mx-3 my-2" type="text"></input>
                </div>
                <div>
                    <button className="bg-green-700">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}
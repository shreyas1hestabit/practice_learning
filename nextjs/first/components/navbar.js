import Link from "next/link"
export default function Navbar(){
    return(
        <nav className="flex justify-around bg-slate-800 text-white py-4">
        <div className="logo font-bold">
            {/* THIS WILL BE THE NAVBAR OF THE WHOLE APPLICATION */}
            FIRSTNEXTAPP
        </div>
        <ul className="flex gap-6">
            {/* <a href='/'><li>HOME</li></a>
            <a href='/about'><li>ABOUT</li></a>
            <a href='/contact'><li>CONTACT</li></a> */}
            {/* using link instead of anchor coz anchor mein page reload hota hai toh time zyada lgta hai plus website km smoothely chlti hai. */}
                <Link href='/'><li>HOME</li></Link>
                <Link href='/about'><li>ABOUT</li></Link>
                <Link href='/contact'><li>CONTACT</li></Link>
        </ul>
        </nav>
    )
}
import Script from "next/script"
export default function Contact(){
    return(
        <div>
            <p>FOR ANY QUERIES CONTACT</p>
            <p className="email">Email: firstnextapp@gmail.com</p>
            <Script>
                {/* <button className="bg-blue-400 hover:bg-blue-200 text-blue-800"> */}
                    {`alert("welcome to contact page")`}
                    {/* CLICK ME</button> */}
                    {/* script tag js likhne ki jgh hai na ki html dikhane ki and button ek html element hai isliye agr mein script k andar button bnaungi toh woh show nh hoga qk browser button ko render hi nh krta balki js code smjhne ki koshish krta hai. */}
            </Script>
        </div>
    )
}
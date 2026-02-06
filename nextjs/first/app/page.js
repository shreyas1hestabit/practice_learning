//"use client"
//yeh perfectly kaam krega but isko krne se ek problem hai ki pura ka pura page client side mein convert ho jayega nad we would loose all the server side properties.
//so agr hm koi or button bh suppose bnate hai, toh wo bh client component mein convert ho jayega.
//isko solve krne ka ek tareeka is ki ek button component bnao usse client component define kro and iss page pr import kro.

import Button from "@/components/butto";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>THIS IS OUR PRACTICE NEXT APP</h1>
        <Button></Button>
        {/* abh this wont work qk next is server side component and hmne isme client side use kiya hai but koi client component define nh kiya */}
        {/* isko kaam krane k liye use client krenge top pr. */}
      </main>
    </div>
  );
}

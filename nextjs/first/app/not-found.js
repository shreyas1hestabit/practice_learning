//custom not-found page
import Link from 'next/link';
export default function NotFound(){
    return(
        <div className='text-center'>
            <h2 className='text-4xl font-bold mb-4'>NOT FOUND</h2>
            <p className='text-lg text-gray-600'>OOPPSSIIEEEE!!!! Could not find what you are looking for</p>
            <Link href='/' className='text-blue-500 hover:underline'>RETURN HOME</Link>
        </div>
    )
}
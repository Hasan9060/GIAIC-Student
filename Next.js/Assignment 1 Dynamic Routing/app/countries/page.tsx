import Link from 'next/link';
import Image from 'next/image';
import bg from '../bg.jpg'

const page = () => {
  return (
    <div className=' h-screen w-full flex flex-col justify-center bg-blue-700 items-center gap-20 p-5'>
        <h1 className="text-yellow-500 text-6xl text-800 font-semibold">Choose a country to explore.🔍</h1>
        <ul className='text-4xl gap-10 '>
            <li className='hover:text-green-500 hover:font-bold text-center tracking-tight bg-black text-yellow-500 leading-none border-2 rounded-lg px-4 py-2 hover:border-none font-bold transition-all m-3 '>
                <Link href={'countries/pakistan'}>Pakistan</Link>
            </li>
            <li className='hover:text-yellow-300 hover:font-bold text-center tracking-tight bg-black text-yellow-500 leading-none border-2 rounded-lg px-4 py-2 hover:border-none font-bold transition-all m-3'>
                <Link href={'countries/Russia'}>Russia</Link>
            </li>
            <li className='hover:text-red-600 hover:font-bold text-center tracking-tight bg-black text-yellow-500 leading-none border-2 rounded-lg px-4 py-2 hover:border-none font-bold transition-all m-3'>
                <Link href={'countries/England'}>England</Link>
            </li>
            <li className='hover:text-orange-500 hover:font-bold text-center tracking-tight bg-black text-yellow-500 leading-none border-2 rounded-lg px-4 py-2 hover:border-none font-bold transition-all m-3'>
                <Link href={'countries/India'}>India</Link>
            </li>
            <li className='hover:text-blue-500 hover:font-bold text-center tracking-tight bg-black text-yellow-500 leading-none border-2 rounded-lg px-4 py-2 hover:border-none font-bold transition-all m-3'>
                <Link href={'countries/Finland'}>Finland</Link>
            </li>
            <li className='hover:text-red-500 hover:font-bold text-center tracking-tight bg-black text-yellow-500 leading-none border-2 rounded-lg px-4 py-2 hover:border-none font-bold transition-all m-3'>
                <Link href={'countries/Japan'}>Japan</Link>
            </li>
        </ul>
        

        <Link href={'/'} className=' bg-black text-white border-2 border-black rounded-lg px-6 py-3 text-xl hover:bg-teal-800 hover:border-none hover:text-white font-bold transition-all  ease-linear'>Back</Link>
    </div>
  )
}

export default page
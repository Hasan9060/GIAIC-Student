import Link from 'next/link';
import Image from 'next/image';
import bg from '../image/bg.jpg';

export default function Home() {
  return (
    <div>
    <main className='h-screen w-full bg-slate-250 font-semibold  bg-black text-black flex flex-col justify-center items-center gap-10'>
      <Image src={bg} alt="background bg" width={10000} height={700} />
      <h1 className="md:text-4xl lg:text-3xl text-800 absolute top-[2%] right-[33%] text-black bg-white border-2 rounded-lg px-4 py-2
        font-bold text-left text-5xl tracking-tight leading-none  ">
          Student Name :- <span className='text-blue-500'>Hasan Rafay</span><br/>
          Roll Number :- <span className='text-blue-500'>00292976</span><br/>
          Teacher :- <span className='text-blue-500'>Sir Aneeq and Sir Bilal</span>
        </h1>
      <h1 className="md:text-4xl lg:text-5xl text-800 absolute top-[30%] right-[20%] text-blue-600 bg-white border-2 rounded-lg px-4 py-2
        font-bold text-center text-6xl tracking-tight leading-none  ">
          Assigment # 1 ( Saturday 9 to 12 ) 
        </h1>
        <h1 className="md:text-4xl lg:text-5xl text-800 absolute top-[40%] right-[35%] text-white
        font-bold text-center text-6xl tracking-tight leading-none  ">
          "Dynamic Routing"
        </h1>
      <Link href={'/countries'} className='md:text-4xl lg:text-3xl text-800 absolute top-[50%] right-[43%] 
     text-center tracking-tight bg-black text-yellow-500 leading-none border-2 rounded-lg px-6 py-5 text-xl hover:bg-blue-600 hover:border-none font-bold  '>Country Page</Link>
    </main>
    </div>
  );
}

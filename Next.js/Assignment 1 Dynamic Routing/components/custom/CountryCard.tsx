import Link from 'next/link'

interface PROPS {
    country: string,
    population:number,
    region:string,
    capital:string,
}

export default function CountryCard({country , population , region , capital }: PROPS) {
    return (
        <div className="h-screen w-full py-10 bg-blue-800 text-5xl gap-6 flex flex-col justify-center
         items-center  ">
          <h1 className='text-yellow-500 border-2 border-white rounded-lg px-6 py-3'>Country Name : {country}</h1>
          <h2 className="text-4xl text-white">Capital city :<span className='text-yellow-500'> {capital} </span></h2>
          <h2 className="text-4xl text-white">Population :<span className='text-yellow-500'>{population}</span> </h2>
          <h2 className="text-4xl text-white">Region : <span className='text-yellow-500'>{region}</span></h2>
          <Link href={'/countries'} className=' bg-black text-white border-2 border-black rounded-lg px-6 py-3 text-xl hover:bg-teal-800 hover:border-none hover:text-white font-bold transition-all  ease-linear'>Back</Link>
          
        </div>
      );
}

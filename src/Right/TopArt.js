import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { useEffect, useState } from 'react'
function TopArt() {
    const [arts, setArts] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/artists")
            .then(res => res.json())
            .then(posts => {
                setArts(posts)
            })
            .catch(err => console.log(err))
    }, [])
        return(
            <div className="px-10 py-3">
            
            <div className='flex justify-between'>
                <h1 className="text-lg font-bold">Top Artists</h1>
                <div className='flex'>
                    <div className='bg-white mx-1 rounded-md p-2 shadow-2xl'>
                        <BiLeftArrow className='text-xs'/>
                    </div>
                    <div className='bg-white mx-1 rounded-md p-2 shadow-2xl'>
                        <BiRightArrow className='text-xs'/>
                    </div>
                </div>
            </div>
            <div className="my-4 flex">
                {
                    arts.map((art) => 
                        (<div key={art.id} className="mx-4 ">
                            <img className="rounded-xl shadow-2xl w-32 h-32" src={art.image}/>
                            <h2 className="font-bold text-base mt-3">{art.singer}</h2>
                        </div>)
                    )
              
                }
            </div>
        </div>
    )
}
export default TopArt
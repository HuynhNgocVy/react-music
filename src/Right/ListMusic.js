import { BiPlanet } from 'react-icons/bi'
import { useState, useEffect, useRef } from 'react'
import { FcReddit } from 'react-icons/fc'
function ListMusic({audioID, setAudioID, audio}) {
    const [musics, setMusics] = useState([])
    const [typeSong, setTypeSong] = useState("vietnam")
    // const [audioID, setAudioID] = useState(1)
    const [audioPlay, setAudioPlay] = useState("")

    const audioElement = useRef()
    useEffect(() => {
        fetch("http://localhost:3000/vietnamese")
            .then(res => res.json())
            .then(posts => {
                setMusics(posts)
            })
            .catch(err => console.log(err))
    }, [])
    // const audio = useRef()
    useEffect(() => {
        audio.current = new Audio(audioPlay)
        audioPlay && audio.current.play()
        return () => {
            audio.current.pause()
        }
    },[audioPlay])

    return (
        <div style={{width: "calc(100% - 300px)"}}>
            <h2 className='flex text-lg font-bold mx-10'>Mostly Played <FcReddit className='text-2xl mx-4' /> </h2>
            <div className='scroll__overflow overflow-auto' style={{height: "350px"}}>
                {musics.map((music, index) => 
                    (<div className='m-4' key={music.id} onClick={() => setAudioID(music.id)}>
                        <div 
                            onClick={() => setAudioPlay(music.path)}
                            className={audioID===music.id ? "m-auto cursor-pointer flex justify-between items-center text-center p-2 rounded-lg bg-slate-400": "m-auto cursor-pointer flex justify-between items-center text-center p-2 rounded-lg bg-slate-50 ease-in-out duration-500 hover:translate-x-4"}  style={{width: "80%"}}>
                            <div className='flex text-center items-center w-1/2'>
                                <h2 className='mx-4 text-base font-bold'>
                                    {music.id}.</h2>
                                <img className='w-10 rounded-xl' src={music.image}/>
                                <h2 className='mx-4 text-base font-semibold'>{music.name}</h2>
                            </div>
                            <div className='text-xs'>
                                {music.singer}
                            </div>
                            <div className=''>
                                Time
                            </div>
                            <div className='text-xl items-center mx-4'>
                                <BiPlanet />
                            </div>
                            <audio ref={audioElement} src={music.path}></audio>
                        </div>
                    </div>)
                    )
                }
            </div>
            <div className='flex justify-center'>
                <button 
                    onClick={() => setTypeSong("vietnam")}
                    className={typeSong==="vietnam" ? 'm-4 px-4 py-2 bg-slate-400 font-semibold text-sm': 'm-4 px-4 py-2 bg-slate-50 font-semibold text-sm'}>VN</button>
                <button 
                    onClick={() => setTypeSong("us")}
                    className={typeSong==="us" ? 'm-4 px-4 py-2 bg-slate-400 font-semibold text-sm': 'm-4 px-4 py-2 bg-slate-50 font-semibold text-sm'}>US</button>
            </div>
        </div>
    )
}
export default ListMusic
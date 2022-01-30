import { FaRandom } from 'react-icons/fa'
import { GrChapterPrevious,GrChapterNext } from 'react-icons/gr'
import { MdOutlinePause } from 'react-icons/md'
import { BsPlay } from 'react-icons/bs'
import { FiRepeat } from 'react-icons/fi'
import { useState, useEffect, useRef, useLayoutEffect} from 'react'

function MusicPlay({audioID, audio}) {
    const [play,setPlay] = useState(false)
    // const [audio, setAudio] = useState()
    const [showMusic, setShowMusic] = useState([])
    // const cdThumb = useRef()
    const handlePlay = function() {
        setPlay(!play)
    }
    // console.log(audio.current)
    useEffect(() => {
        fetch("http://localhost:3000/vietnamese")
            .then(res => res.json())
            .then(posts => {
                setShowMusic(posts)
            })
            .catch(err => console.log(err))
    }, [])
    
    useEffect(() => {
        return () => {
            cdThumb && cdThumbAnimate.current.pause()
        }
    },[play])
    
    
    useEffect(() => {
        const objectAudio = showMusic[audioID-1] || {}
        if(objectAudio.path){
            if(play) {
                audio.current.play()
                cdThumbAnimate.current.play()
            }
        }
        return () => {
            audio.current.pause() 
        }
    }, [play])
    const cdThumbAnimate = useRef();
    const cdThumb = document.querySelector(".cd-thumb")
    if(cdThumb)
    {
        cdThumbAnimate.current = cdThumb.animate([
            { transform: 'rotate(360deg)' },
        ], {
            duration: 20000,
            iterations: Infinity
        });
        cdThumbAnimate.current.pause()

    }

    
    return (
        <div className="" style={{width: "400px"}}>
            <h2 className='text-lg font-bold'>Now Playing</h2>
            {showMusic.map((music, index) => 
                audioID == music.id &&
                (<div className="bg-slate-50 rounded-3xl p-6" key={music.id}>
                    <p className="flex justify-end mb-4">Next- <b>{showMusic[index+1].name}</b></p>
                    <div className="flex">
                        <div className="m-auto text-center">
                            <img className="cd-thumb rounded-full m-auto shadow-xl" src={music.image}/>
                            <h3 className="text-base font-bold m-3">{music.name}</h3>
                            <p className="text-slate-400 text-sm">{music.singer}</p>
                        </div>
                    </div>
                    <input id="progress" className="w-full" type="range" value="0" step="1" min="0" max="100"
                        style={{height: "5px",outline:"none"}}
                    >
                    </input>
                    <div className='flex justify-between text-center items-center m-2'>
                        <div className='m-2'> <FaRandom /> </div>
                        <div className='flex items-center'>
                            <div className='m-2'> <GrChapterPrevious /> </div>
                            <div className='rounded-full m-3' style={{backgroundImage: "linear-gradient(45deg,#576ed3,#c06caa)" }}>
                                <div className='m-2 bg-slate-50 p-1 rounded-full' onClick={handlePlay}> 
                                    {play ? <MdOutlinePause className='text-xl'/> : <BsPlay className='text-xl'/>}
                                </div> 
                            </div>
                            <div className='m-2'> <GrChapterNext /> </div> 
                        </div>
                        <div className='m-2'> <FiRepeat /> </div>
                    </div>
                </div>)
            )}
        </div>
    )
}
export default MusicPlay
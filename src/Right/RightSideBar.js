import Navbar from "./Navbar"
import TopArt from "./TopArt"
import ListMusic from "./ListMusic"
import MusicPlay from "./MusicPlay"
import { useState, useRef } from 'react'
function RightSideBar() {
    // const [idMusic, setIdMusics] = useState(1)
    const [audioID, setAudioID] = useState(1)
    const audio = useRef()
    return (
        <div className="" style={{ backgroundImage: "linear-gradient(0,#e8d6fe,#fbf5f7,#ffeede)"}}>
           <Navbar />
           <TopArt />
           <div className="flex px-10 justify-between w-full">
                <MusicPlay audioID={audioID} audio={audio}/>
                <ListMusic audioID={audioID} setAudioID={setAudioID} audio={audio}/>
           </div>
        </div>
    )
}
export default RightSideBar
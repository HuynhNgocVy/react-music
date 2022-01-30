import { RiHome6Line } from 'react-icons/ri'
import { HiOutlineTrendingUp } from 'react-icons/hi'
import { BiAlbum, BiCategory, BiJoystick } from 'react-icons/bi'
// import { IoCalendarOutline } from 'react-icons/io'
import { FiHeart } from 'react-icons/fi'
import { BsPeople, BsCalendarWeek } from 'react-icons/bs'
function LeftSideBar() {
    return (
        <div className="w-1/3 bg-slate-50 p-4 h-screen" style={{width: "300px"}}>
            <div className="bg-slate-50 rounded-xl p-2">
                <ul className="text-base text-center"  style={{ color: "#89888a"}} >
                    <li className="flex items-center font-normal p-3 rounded-xl" style={{background: "#15111e", color:"#fff"}}>
                        <RiHome6Line className='mr-2 text-xl'/>
                        Home
                    </li>
                    <li className="flex items-center font-normal p-3 rounded-xl">
                        <HiOutlineTrendingUp className='mr-2 text-xl'/>
                        Trends
                    </li>
                    <li className="flex items-center font-normal p-3 rounded-xl" >
                        <BiAlbum className='mr-2 text-xl'/>
                        Feed
                    </li>
                </ul>
                <h1 className='m-3 text-sm text-slate-500 font-medium'>Discover</h1>
                <ul className="text-base text-center" style={{ color: "#89888a"}}>
                    <li className="flex items-center font-normal p-3 rounded-xl" >
                        <BiCategory className='mr-2 text-xl'/>
                        New and Notable
                    </li>
                    <li className="flex items-center font-normal p-3 rounded-xl" >
                        <BsCalendarWeek className='mr-2 text-xl'/>
                        Release Calendar
                    </li>
                    <li className="flex items-center font-normal p-3 rounded-xl" >
                        <BiJoystick className='mr-2 text-xl'/>
                        Events
                    </li>
                </ul>
                <h1 className='m-3 text-sm text-slate-500 font-medium'>Discover</h1>
                <ul className="text-base text-center" style={{ color: "#89888a"}}>
                    <li className="flex text-base items-center font-normal p-3 rounded-xl" >
                        <FiHeart className='mr-2 text-xl'/>
                        Favorite Songs
                    </li>
                    <li className="flex items-center font-normal p-3 rounded-xl" >
                        <BsPeople className='mr-2 text-xl'/>
                        Artist
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default LeftSideBar
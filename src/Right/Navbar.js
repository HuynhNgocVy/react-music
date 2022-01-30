import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSetting } from 'react-icons/ai'
import { FcSearch } from 'react-icons/fc'
import { BsBell } from 'react-icons/bs'
function Navbar() {
    return (
        <div className='flex justify-between'>
            <div className='flex text-center items-center'>
                <div className='m-2'>
                    <AiOutlineArrowLeft />
                </div>
                <div className='m-2'>
                    <AiOutlineArrowRight />
                </div>
                <div className='flex items-center rounded-md m-2 bg-white p-2'>
                    <FcSearch />
                    <input type='text' placeholder='Search' className='mx-2' style={{outline: 'none'}} />
                </div>
            </div>
            <div className='flex text-center items-center'>
                <div className='flex items-center text-center'>
                    <img className='w-9 h-9 border-white border-2 rounded-full' src="https://s120-ava-talk.zadn.vn/3/f/1/f/3/120/a903da198c7df9866c4638b09c63ff36.jpg"/>
                    <h2 className='m-2 font-semibold text-xs text'>Vy Huynh</h2>
                </div>
                <div className="h-full m-2" style={{width: '2px', background: '#e7d3d1'}}></div>
                <div className='flex m-2'>
                    <BsBell className='font-bold text-xl m-2'/>
                    <AiOutlineSetting className='font-bold text-xl m-2'/>
                </div>
            </div>
        </div> 
    )
}
export default Navbar
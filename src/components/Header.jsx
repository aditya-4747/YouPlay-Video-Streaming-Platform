import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(){
    return (
        <>
            <div className='fixed bg-black w-full h-[83px] flex items-center justify-between px-8 z-10'>
                <div className='flex gap-4 items-center'>
                    <button className='text-white rounded-full hover:bg-[#021526] p-2'><MenuIcon /></button>
                    <a href="/"><img className='h-8 cursor-pointer' src="./src/assets/youplay.png" alt="Youplay icon" /></a>
                </div>
                
                <div className='w-[40%] flex'>
                    <input className='w-full bg-transparent border-gray-700 border-2 text-white rounded-l-md p-2 px-5 font-Roboto focus:outline-none' placeholder='Search' />
                    <button className='text-white border-gray-700 border-2 border-l-0 rounded-r-md px-5 hover:bg-[#021526]'><SearchIcon /></button>
                    <button className='text-white rounded-md p-2 mx-2 hover:bg-[#021526] border-2 border-gray-700'><MicIcon /></button>
                </div>

                <div className='flex items-center gap-3'>
                    <div className='text-white rounded-full hover:bg-[#021526] p-2'><NotificationsNoneOutlinedIcon /></div>
                    <div className='text-white rounded-full hover:bg-[#021526] p-1'><AccountCircleIcon fontSize='large' /></div>
                </div>
            </div>
        </>
    )
}
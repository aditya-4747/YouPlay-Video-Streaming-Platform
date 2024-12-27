import { useEffect, useRef, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function HistoryVideoCard({video}){

    const [ isOpen, setIsOpen ] = useState(false);
    const menuRef = useRef();
    const menuButtomRef = useRef();
    const lastViewedTime = '15 minutes';

    function handleMenuOpen() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {

        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('scroll', handleOutsideClick);
    }, []);

    return <>
        <div className='flex gap-x-10 cursor-pointer p-2 transform transition-transform duration-300 hover:scale-[102%]'>
            <img className='rounded-lg aspect-video w-72' src="./src/assets/thumbnail.jpeg" alt="Thumbnail" />
            <div className='min-w-[60%]'>
                <p className='text-xl font-Nunito '>{video.title || 'Top 10 Business Tips to Boost Your Success in 2024'}</p>
                <div className="flex gap-2">
                    <button className='opacity-70 hover:opacity-90'>{video.owner || 'Grow with BRO'}</button>
                    <p>| {video.views || '69K'} views</p>
                </div>
                <p className="opacity-50 absolute bottom-10">Viewed {lastViewedTime} ago</p>
            </div>
            <button ref={menuButtomRef} onClick={handleMenuOpen} className='rounded-full h-fit p-2 hover:bg-[#021526]'><MoreVertIcon /></button>

            {isOpen && 
                <ul ref={menuRef} className='absolute right-6 top-14 w-fit text-base text-center border rounded-lg font-Roboto py-2'>
                    <li className="px-4 py-2 hover:bg-gray-800">Remove from history</li>
                    <li className="px-4 py-2 hover:bg-gray-800">Share</li>
                </ul>
            }
        </div>
    </>
}
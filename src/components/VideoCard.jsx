import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect, useRef } from 'react';
import HorizontalLine from './HorizontalLine';

export default function VideoCard(){

    const [ isOpen, setIsOpen ] = useState(false);
    const menuRef = useRef(null);

    function handleMenuOpenClick(){
        setIsOpen(!isOpen)
    }

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the click is outside the menuRef, close the popup
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
    
        // Add event listener for clicks outside
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('scroll', handleClickOutside);
    
        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <div className='hover:bg-[#021526] cursor-pointer p-1 rounded-xl pb-5 transform transition-transform duration-300 hover:scale-[102%]'>
            <div className='flex justify-center'>
                <img className="rounded-lg aspect-video w-full" src="./src/assets/thumbnail.jpeg" alt="Video Thumbnail" />
            </div>
            <div className="flex gap-3 pt-3 font-Nunito font-semibold">
                <div>
                    <div className="size-10 rounded-full flex items-center bg-black border-[0.5px] border-gray-800"><img className="rounded-full aspect-square" src="./src/assets/logo-light.png" alt="Channel Avatar" /></div>
                </div>
                <div>
                    <div className='flex'>
                        <p className="text-white leading-5">Top 10 Business Tips to Boost Your Success in 2024</p>
                        <button className='text-white' onClick={handleMenuOpenClick}><MoreVertIcon /></button>

                        {/* Popup Menu */}
                        {isOpen && (
                            <div ref={menuRef} className="absolute ml-10 mt-2 w-52 bg-black border border-gray-200 rounded-lg shadow-lg z-20">
                            <ul className="py-1 text-white">
                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Add to Watch Later</li>
                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Add to Playlist</li>
                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Download video</li>
                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Share</li>

                                <HorizontalLine />
                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Not interested</li>
                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Report</li>
                            </ul>
                            </div>
                        )}
                    </div>
                    <p className="text-[#878787] text-sm mt-1">Grow with BRO</p>
                    <p className="text-[#878787] text-sm">69K views | 15 days ago</p>
                </div>
            </div>
        </div>
    )
}
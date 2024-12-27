import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import HistoryIcon from '@mui/icons-material/History';
import ListIcon from '@mui/icons-material/List';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { NavLink } from 'react-router-dom';
import HorizontalLine from './HorizontalLine';

export default function NavigationMenu(){
    return (
        <>
            <section className="bg-black">
                <ul className='text-white font-Roboto flex flex-col items-center'>
                    <NavLink className={({ isActive }) => isActive ? 'bg-[#021526] menu-item' : 'menu-item'} to='/'><HomeIcon />Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-[#021526] menu-item' : 'menu-item'} to='/subscription'><SubscriptionsIcon />Subscription</NavLink>

                    <HorizontalLine />

                    <NavLink className={({ isActive }) => isActive ? 'bg-[#021526] menu-item' : 'menu-item'} to='/profile'><SwitchAccountIcon />Your Profile</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-[#021526] menu-item' : 'menu-item'} to='/history'><HistoryIcon />History</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-[#021526] menu-item' : 'menu-item'} to='/playlists'><ListIcon />Playlists</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-[#021526] menu-item' : 'menu-item'} to='/liked-videos'><ThumbUpOutlinedIcon />Liked Videos</NavLink>

                    <HorizontalLine />
                    
                    <p className='px-6 pb-3 text-lg w-full'>Subscriptions</p>
                    {/* Subscriptions List is to be implemented here. */}

                    <HorizontalLine />

                    <p className='text-xs px-5 py-3 w-full'>©2024 YouPlay India</p>

                </ul>
            </section>
        </>
    )
}
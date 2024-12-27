import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import HistoryVideoCard from '../components/historyVideoCard';

export default function History(){

    const [ history, setHistory ] = useState([1,2,3,4,5,6]);

    return (
        <main className="p-4 text-white">
            {/* Watch History List */}
            <div className="flex items-center gap-1 font-Roboto">
                <p className="text-2xl">Your Watch History</p>
                <KeyboardArrowRightIcon />
            </div>
            <hr className='w-full opacity-20 border rounded-full my-3' />

            {history && history.map(video => {
                return <HistoryVideoCard key={video._id} video={video} />
            })}
        </main>
    )
  }
  
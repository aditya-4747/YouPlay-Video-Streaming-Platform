import { useState } from "react";
import VideoCard from "../components/VideoCard";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ShowMore from "../components/ShowMore";

export default function Subscription(){

    const [ subscriptionList, setSubscriptionList ] = useState([]);
    const [ latestVideos, setLatestVideos ] = useState([1,2,3,4]);
    const [ channelVideos, setChannelVideos ] = useState([1,2]);

    return (
        <>
            <main className="p-4 text-white font-Roboto">
                {/* Latest Videos */}
                <div className="flex items-center gap-1">
                    <p className="text-2xl">Latest</p>
                    <KeyboardArrowRightIcon />
                </div>
                <hr className='w-full opacity-20 border rounded-full my-3' />

                <div className="grid grid-cols-4 gap-4 gap-y-8">
                    {latestVideos && latestVideos.map(video => {
                        return <>
                            <VideoCard key={video._id} video={video}/>
                        </>
                    })}
                </div>

                {/* Show More Button */}
                {(latestVideos != 0 && latestVideos.length%4 == 0) ? <ShowMore /> : <p className="text-center opacity-50 py-5">You&apos;ve reached the end of list</p>}

                <div className="flex items-center mt-5">
                    <p className="text-2xl">From</p>
                    <select name="channels" className="bg-black ml-2 text-xl outline-none pr-5">

                        {/* TODO: Channel List to be implemented in dropdown menu */}

                        <option className="text-base" value="grow with bro">Grow with BRO</option>
                    </select>
                </div>
                <hr className='w-full opacity-15 border rounded-full my-3' />

                {/* TODO: Render videos list from specific channel */}
                <div className="grid grid-cols-4 gap-4 gap-y-8">
                    {channelVideos && channelVideos.map(video => {
                        return <>
                            <VideoCard key={video._id} video={video}/>
                        </>
                    })}
                </div>
                
                {(channelVideos != 0 && channelVideos.length%4 == 0) ? <ShowMore /> : <p className="text-center opacity-50 py-5">You&apos;ve reached the end of list</p>}
            </main>
        </>
    )
}
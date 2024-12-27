import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/Homepage';
import Subscription from './pages/Subscription';
import Profile from './pages/Profile';
import History from './pages/History';
import LikedVideos from './pages/LikedVideos';
import Playlist from './pages/Playlist';
import Video from './pages/Video';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/subscription",
                element: <Subscription />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/history",
                element: <History />
            },
            {
                path: "/playlists",
                element: <Playlist />
            },
            {
                path: "/liked-videos",
                element: <LikedVideos />
            }
        ]
    },
    {
        path: "/video",
        element: <Video />
    }
])

function App() {
    return <>
        <RouterProvider router={Router} />
    </>
}

export default App

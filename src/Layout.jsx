import NavigationMenu from './components/NavigationMenu'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <main className='bg-black min-h-screen'>
                <nav>
                    <Header />
                </nav>

                <div className='flex'>
                    {/* Menu Section */}
                    <section className='w-[250px] mt-[83px] fixed h-full overflow-y-auto scrollbar'>
                        <NavigationMenu />
                    </section>

                    {/* Videos Section bg-[#021526] */}
                    <section className='mt-[83px] ml-[250px] w-full'>
                        <Outlet />
                    </section>
                </div>
            </main>
        </>
    )
}

export default Layout

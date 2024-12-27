// import React from 'react'
import Header from "../components/Header";

export default function Video(){
    return <>
        <main className="bg-black min-h-screen flex">
            <section>
                <Header />
            </section>

            <section>
                <div className="">
                    <div className="mt-[83px] flex w-full">
                        <video className="h-[70vh] w-screen outline-none" src="http://res.cloudinary.com/dix1mzveh/video/upload/v1723083769/ghhfr6bovd9n4yhy8l7n.mp4" controls></video>
                    </div>
                </div>
            </section>
        </main>
    </>
}
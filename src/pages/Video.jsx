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
                        <video className="h-[70vh] w-screen outline-none" src="{videoURL}" controls></video>
                    </div>
                </div>
            </section>
        </main>
    </>
}

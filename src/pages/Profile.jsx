
export default function Profile(){

    // Fetch user from store (redux)
    const user = {};

    return (
        <main className="text-white font-Poppins">
            <div className="flex gap-20 py-10 px-40">
                <img className="aspect-square w-48 border p-1 border-[#666666] rounded-full" src={ user.thumbnail || "./src/assets/logo-light.png" } alt="Thumbnail" />
                <div>
                    <h1 className="text-4xl">{user.fullName || "Grow with BRO"}</h1>
                    <button>{user.username || 'adityamaddeshiya470'}</button>
                </div>
                
            </div>
        </main>
    )
}


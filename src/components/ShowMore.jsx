import { ArrowDropDownTwoTone } from "@mui/icons-material"

export default function ShowMore(){
    return (
        <>
            <div className="flex items-center justify-center py-3 pt-10">
                <hr className="border border-t-0 w-1/3 opacity-20" />
                <button className="text-white text-sm px-40 border border-gray-700 rounded-full p-[6px] hover:bg-[#021526]">Show More<ArrowDropDownTwoTone /></button>
                <hr className="border border-t-0 w-1/3 opacity-20" />
            </div>
        </>
    )
}
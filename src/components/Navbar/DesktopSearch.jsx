import { FiSearch } from "react-icons/fi";

export default function DesktopSearch() {
    return (
        <div className="hidden lg:flex flex-1 relative max-w-2xl group ml-60">
            <input type="text" placeholder="Search for items..." className="w-full bg-gray-100 py-[9px] px-6 rounded-full text-sm outline-none border-2 border-transparent focus:bg-white focus:border-[#088178] transition-all" />
            <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-500 p-2.5 rounded-full text-white cursor-pointer hover:bg-black transition-all">
                <FiSearch className="text-lg" />
            </div>
        </div>
    )
}

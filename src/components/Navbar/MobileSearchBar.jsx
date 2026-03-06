import { FiSearch } from "react-icons/fi";

export default function MobileSearchBar() {
    return (
        <div className="px-4 py-1 lg:hidden ">
            <div className="relative group">
                <input type="text" placeholder="I'm searching for..." className="w-full bg-gray-100 border-none py-[9px] px-5 pr-12 rounded-full text-sm outline-none focus:bg-white focus:ring-1 focus:ring-[#088178] transition-all" />
                <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-500 p-2 rounded-full text-white"><FiSearch className="text-sm" /></div>
            </div>
        </div>
    )
}

import { HiOutlineChatAlt2 } from "react-icons/hi";

export default function MessageDropdown({ activeDropdown, toggleDropdown }) {
    return (
        <div className="relative">
            <HiOutlineChatAlt2 onClick={(e) => toggleDropdown(e, 'msg')} className="text-2xl cursor-pointer hover:text-[#088178] text-gray-700" />
            {
                activeDropdown === 'msg' && (
                    <div className="absolute top-full right-[-60px] lg:right-0 mt-4 w-72 bg-white shadow-2xl rounded-2xl p-6 z-[110] border border-gray-100 text-center animate-in fade-in zoom-in duration-200">
                        <div className="absolute -top-2 right-[75px] lg:right-4 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                        <h3 className="text-sm font-bold text-gray-800 text-left mb-6">Messages</h3>
                        <div className="w-20 h-16 bg-orange-50 mx-auto rounded-xl flex items-center justify-center mb-4">
                            <HiOutlineChatAlt2 className="text-3xl text-green-600" />
                        </div>
                        <p className="text-gray-500 text-[11px] mb-6 font-bold">No new messages yet</p>
                        <button className="w-full bg-green-600 text-white font-bold py-3 rounded-full hover:bg-gray-800 transition-all text-xs tracking-wider">VIEW MORE</button>
                    </div>
                )
            }
        </div>
    )
}

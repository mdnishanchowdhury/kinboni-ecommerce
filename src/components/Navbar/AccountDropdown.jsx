import { FiUser, FiHeart } from "react-icons/fi";
import { MdKeyboardArrowDown, MdLogout, MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi";

export default function AccountDropdown({ activeDropdown, toggleDropdown }) {
    return (
        <div className="relative">
            <div onClick={(e) => toggleDropdown(e, 'account')} className="flex items-center gap-1 cursor-pointer hover:text-green-600 text-gray-700">
                <FiUser className="text-2xl" />
                <MdKeyboardArrowDown className={`transition-transform duration-300 ${activeDropdown === 'account' ? 'rotate-180' : ''}`} />
            </div>
            {
                activeDropdown === 'account' && (
                    <div className="absolute top-full right-0 mt-4 w-64 bg-white shadow-2xl rounded-2xl py-4 z-[110] border border-gray-100 animate-in slide-in-from-top-2">
                        <div className="absolute -top-2 right-3 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                        <div className="px-5 pb-3 border-b border-gray-50">
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Account</p>
                            <p className="text-sm font-extrabold text-gray-800">Md Nishan</p>
                        </div>
                        <div className="py-2">
                            <a href="#" className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 font-bold transition-colors"><FiUser className="text-gray-400" /> My Profile</a>
                            <a href="#" className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 font-bold transition-colors"><MdOutlineShoppingBag className="text-gray-400" /> My Orders</a>
                            <a href="#" className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 font-bold transition-colors"><FiHeart className="text-gray-400" /> Favorites</a>
                            <div className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 font-bold cursor-pointer border-t border-gray-50 mt-1">
                                <span className="flex items-center gap-3"><HiOutlineGlobeAlt className="text-gray-400" /> Language</span>
                                <span className="text-[10px] bg-green-500/10 px-2 py-0.5 rounded text-[#088178]">EN-BDT</span>
                            </div>
                        </div>
                        <div className="px-5 pt-2 border-t border-gray-50">
                            <button className="flex items-center gap-3 text-[#088178] font-bold text-sm py-2 hover:opacity-70 transition-opacity">
                                <MdLogout /> Sign out
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

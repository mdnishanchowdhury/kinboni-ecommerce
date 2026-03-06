import { HiOutlineX } from "react-icons/hi";
import { MdOutlineDashboard, MdOutlineAddBox } from "react-icons/md";
import { NavLink } from 'react-router';

export default function MobileDrawer({ open, setOpen, logo, isSellerMode, setIsSellerMode, navLinks }) {

    return (
        <>
            <div className={`fixed inset-0 bg-black/60 z-[150] transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setOpen(false)} />

            <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[200] shadow-2xl transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}>

                <div className="flex justify-between items-center p-5 border-b bg-gray-50">
                    <img className="h-8" src={logo} alt="Logo" />
                    <HiOutlineX onClick={() => setOpen(false)} className="text-2xl text-gray-600 cursor-pointer" />
                </div>

                <div className="p-5">

                    {/* Mobile Mode Switcher */}
                    <div className="mb-6 bg-green-600/5 p-4 rounded-2xl flex items-center justify-between border border-green-600/10">
                        <span className="text-sm font-bold text-gray-800">{isSellerMode ? 'Seller Mode' : 'Buyer Mode'}</span>
                        <button onClick={() => setIsSellerMode(!isSellerMode)} className={`w-12 h-6 rounded-full relative transition-all ${isSellerMode ? 'bg-green-500' : 'bg-gray-300'}`}>
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isSellerMode ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-2">
                        {
                            isSellerMode && (
                                <div className="flex flex-col gap-3 mb-4">
                                    <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all">
                                        <MdOutlineDashboard className="text-xl" /> Dashboard
                                    </button>
                                    <button className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-black transition-all shadow-md">
                                        <MdOutlineAddBox className="text-xl" /> Add Product
                                    </button>
                                    <div className="h-[1px] bg-gray-100 my-2 w-full"></div>
                                </div>
                            )
                        }
                        {
                            navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setOpen(false)}
                                    className="text-base font-bold text-gray-800 py-3 border-b border-gray-50 last:border-0 hover:text-[#088178] transition-colors"
                                >
                                    {link.name}
                                </NavLink>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </>
    )
}

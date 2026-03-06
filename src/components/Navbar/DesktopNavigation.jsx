import { NavLink } from 'react-router';
import { MdOutlineCategory, MdKeyboardArrowDown, MdOutlineDashboard, MdOutlineAddBox } from "react-icons/md";
import CategoryMenu from '../Home/HeroSection/CategoryMenu';

export default function DesktopNavigation({ navLinks, categoriesData, isSellerMode }) {
    return (
        <div className="hidden lg:block p-1 border-t border-gray-50">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between">

                <div className="flex items-center gap-8">
                    <div className="relative group">
                        <button className="bg-green-600 text-white px-8 py-[7px] font-bold flex items-center gap-3 rounded-full hover:bg-black transition-all">
                            <MdOutlineCategory className="text-xl" /> Explore Categories <MdKeyboardArrowDown className="text-xl group-hover:rotate-180 transition-transform duration-300" />
                        </button>

                        {/* categories */}
                        <div className="absolute top-full w-[280px] left-0 invisible  group-hover:visible ">
                            <CategoryMenu categoriesData={categoriesData} />
                        </div>

                    </div>
                    <nav className="flex gap-2 font-bold text-gray-700">
                        {
                            navLinks.map(link => (
                                <NavLink key={link.name} to={link.path} className={({ isActive }) => `px-4 py-[7px] transition-all rounded-md ${isActive ? 'bg-green-600 text-white' : 'hover:text-green-600'}`}>{link.name}</NavLink>
                            ))
                        }
                    </nav>
                </div>

                <div className="flex items-center gap-6">
                    {
                        isSellerMode ? (
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-[7px] rounded-full font-bold text-sm hover:bg-gray-200 transition-all shadow-sm">
                                    <MdOutlineDashboard className="text-xl" /> Dashboard
                                </button>
                                <button className="flex items-center gap-2 bg-green-600 text-white px-5 py-[7px] rounded-full font-bold text-sm hover:bg-black transition-all shadow-md">
                                    <MdOutlineAddBox className="text-xl" /> Add Product
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-6 font-bold text-sm text-gray-600">
                                <span className="cursor-pointer hover:text-[#088178] transition-colors">Sell on OURA</span>
                                <span className="cursor-pointer hover:text-[#088178] border-l pl-6 border-gray-200 transition-colors">Help Center</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

import { FiSearch, FiShoppingCart, FiUser, FiHeart } from "react-icons/fi";
import { HiArrowRight, HiOutlineSwitchHorizontal } from "react-icons/hi";

export default function CartDropdown({ isSellerMode, activeDropdown, toggleDropdown }) {
    return (
        <div>
            {
                !isSellerMode && (
                    <div className="relative">
                        <div onClick={(e) => toggleDropdown(e, 'cart')} className="relative cursor-pointer hover:text-green-600 text-gray-700">
                            <FiShoppingCart className="text-2xl" />
                            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] px-1.5 rounded-full font-bold border-2 border-white">0</span>
                        </div>
                        {
                            activeDropdown === 'cart' && (
                                <div className="absolute top-full right-[-30px] lg:right-0 mt-4 w-72 bg-white shadow-2xl rounded-2xl p-6 z-[110] border border-gray-100 text-center">
                                    <div className="absolute -top-2 right-[45px] lg:right-4 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                                    <h3 className="text-sm font-bold text-gray-800 text-left mb-6">Shopping cart</h3>
                                    <p className="text-gray-500 text-sm mb-6 font-bold">Your cart is empty</p>
                                    <button className="w-full border-2 border-gray-800 text-gray-800 font-bold py-2.5 rounded-full hover:bg-gray-800 hover:text-white transition-all text-xs">GO TO CART</button>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

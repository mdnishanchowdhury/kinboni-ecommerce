import { motion } from "framer-motion";
import { FaTimes, FaShoppingBag, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export default function CartDrawer({ isOpen, item, onClose }) {
    return (
        <div>
            {isOpen && item && (
                <div className="fixed inset-0 z-[100] flex justify-end">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }} exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative h-full w-full max-w-[400px] bg-white shadow-2xl p-8 flex flex-col"
                    >
                        <div className="mb-8 flex items-center justify-between border-b pb-6">
                            <div className="flex items-center gap-3 text-black">
                                <FaShoppingBag className="text-xl" />
                                <h2 className="text-xl font-bold">Shopping Cart</h2>
                            </div>
                            <button onClick={onClose} className="p-2 text-gray-400 hover:text-black transition-colors"><FaTimes size={20} /></button>
                        </div>

                        <div className="flex-1 overflow-y-auto">

                            <div className="flex items-center gap-4 rounded-3xl bg-gray-50 p-4 border border-gray-100 shadow-sm text-black">
                                <img src={item.image} className="h-20 w-20 object-contain" alt="item" />
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold">{item.name}</h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="font-bold">${item.price}.00</span>
                                        <div className="flex items-center gap-3 rounded-full bg-white border px-3 py-1">
                                            <button className="text-[10px] text-gray-500"><FaMinus /></button>
                                            <span className="text-xs font-bold w-4 text-center">1</span>
                                            <button className="text-[10px] text-gray-500"><FaPlus /></button>
                                        </div>
                                    </div>
                                </div>
                                <button className="text-gray-300 hover:text-red-500"><FaTrash size={14} /></button>
                            </div>
                        </div>

                        <div className="mt-6 border-t pt-6">
                            <button className="w-full rounded-2xl bg-black py-5 text-center font-bold text-white hover:bg-gray-800 shadow-xl transition-all">Proceed to Checkout</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    )
}

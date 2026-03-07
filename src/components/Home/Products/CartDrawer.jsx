import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaShoppingBag, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export default function CartDrawer({ isOpen, item, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && item && (
                <div className="fixed inset-0 z-[100] flex justify-end">
                    {/* Backdrop Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative h-full w-full max-w-[400px] bg-white shadow-2xl p-6 lg:p-8 flex flex-col"
                    >
                        {/* Header */}
                        <div className="mb-8 flex items-center justify-between border-b pb-6">
                            <div className="flex items-center gap-3 text-black">
                                <div className="relative">
                                    <FaShoppingBag className="text-xl" />
                                    <span className="absolute -top-2 -right-2 bg-[#C6002C] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">1</span>
                                </div>
                                <h2 className="text-xl font-bold">Shopping Cart</h2>
                            </div>
                            <button onClick={onClose} className="p-2 text-gray-400 hover:text-black transition-colors">
                                <FaTimes size={20} />
                            </button>
                        </div>

                        {/* Cart Items List */}
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            <div className="flex items-center gap-4 rounded-3xl bg-gray-50 p-4 border border-gray-100 shadow-sm text-black group">
                                <div className="h-20 w-20 bg-white rounded-2xl p-2 border border-gray-100">
                                    <img
                                        src={item.media.thumbnail}
                                        className="h-full w-full object-contain"
                                        alt={item.name}
                                    />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-sm font-bold line-clamp-1">{item.name}</h3>
                                    <p className="text-[10px] text-gray-400 mb-1">Standard Shipping</p>

                                    <div className="flex items-center justify-between mt-2">
                                        <span className="font-bold text-[#007b70]">
                                            ${item.pricing.currentPrice}.00
                                        </span>

                                        {/* Quantity Selector */}
                                        <div className="flex items-center gap-3 rounded-full bg-white border px-3 py-1 shadow-sm">
                                            <button className="text-[10px] text-gray-400 hover:text-black transition-colors"><FaMinus /></button>
                                            <span className="text-xs font-bold w-4 text-center">1</span>
                                            <button className="text-[10px] text-gray-400 hover:text-black transition-colors"><FaPlus /></button>
                                        </div>
                                    </div>
                                </div>

                                <button className="text-gray-300 hover:text-red-500 transition-colors p-1">
                                    <FaTrash size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Footer / Summary */}
                        <div className="mt-6 border-t pt-6 space-y-4">
                            <div className="flex justify-between items-center text-black">
                                <span className="text-gray-500 font-medium">Subtotal</span>
                                <span className="text-xl font-bold">${item.pricing.currentPrice}.00</span>
                            </div>

                            <button className="w-full rounded-2xl bg-black py-5 text-center font-bold text-white hover:bg-gray-800 shadow-xl transition-all active:scale-[0.98]">
                                Proceed to Checkout
                            </button>

                            <p className="text-center text-[10px] text-gray-400">
                                Taxes and shipping calculated at checkout
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
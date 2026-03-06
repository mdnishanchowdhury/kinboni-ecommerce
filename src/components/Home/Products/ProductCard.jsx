import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaStar, FaFire, FaTimes, FaShoppingBag, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export function ProductCard({ productData, setIsCartOpen, setActiveCartItem }) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [selectedColor, setSelectedColor] = useState(productData.colors[2].id);
    const [isLoading, setIsLoading] = useState(false);

    const handleAddToCart = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setActiveCartItem(productData);
            setIsCartOpen(true);
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative lg:w-[340px] rounded-[32px] bg-white p-5 lg:p-7 border border-slate-100 hover:bg-gradient-to-b hover:from-[#9c9c9c] hover:to-[#2d2d2d] transition-colors duration-700"
        >
            {/* Best Seller Badge */}
            {productData.isBestSeller && (
                <div className="absolute left-6 top-6 z-20 flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <FaFire className="text-[12px]" /> BEST SELLER
                </div>
            )}

            {/* Wishlist Button */}
            <button onClick={() => setIsWishlisted(!isWishlisted)} className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100/80 backdrop-blur-sm hover:scale-110 active:scale-90 transition-all">
                <FaHeart className={`text-base ${isWishlisted ? "text-red-500" : "text-gray-400"}`} />
            </button>

            {/* Product Image */}
            <div className="mb-6 flex justify-center">
                <motion.img src={productData.image} alt={productData.name} whileHover={{ rotate: -5, scale: 1.1 }} className="w-[200px] object-contain drop-shadow-xl animate-bounce-slow" />
            </div>

            <div className="relative z-10 text-black">
                <h2 className="mb-2 text-[22px] font-bold group-hover:text-white transition-colors duration-300 line-clamp-1">{productData.name}</h2>

                {/* Color Selector */}
                <div className="mb-3 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {productData.colors.map((color) => (
                        <div key={color.id} onClick={() => setSelectedColor(color.id)} className={`h-4 w-4 cursor-pointer rounded-full border-2 ${color.bg} ${selectedColor === color.id ? 'border-white ring-2 ring-gray-400' : 'border-transparent'}`} />
                    ))}
                </div>

                <p className="mb-4 text-sm leading-relaxed text-gray-500 group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">{productData.description}</p>

                {/* Rating Section */}
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`text-[8px] lg:text-[16px] ${star <= Math.round(productData.rating)
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="ml-1 text-[16px] font-bold group-hover:text-white">
                            {productData.rating}
                        </span>
                    </div>

                    {/* Reviewers Avatar Stack */}
                    <div className="flex -space-x-2.5 opacity-0 translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                        {productData.reviewers.map((user) => (
                            <img
                                key={user.id}
                                src={user.img}
                                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                                alt="user"
                            />
                        ))}
                    </div>
                </div>

                {/* Price & Stock */}
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-black group-hover:text-white">${productData.price}</span>
                        <span className="text-sm text-gray-400 line-through group-hover:text-gray-300">${productData.oldPrice}</span>
                    </div>
                    <div className="w-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="mb-1 flex justify-between text-[9px] text-white"><span>Stock</span><span>{productData.stockLeft} left</span></div>
                        <div className="h-1 w-full rounded-full bg-gray-600 overflow-hidden"><div className="h-1 w-[20%] rounded-full bg-red-400" /></div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-1.5 sm:gap-3">
                    <button
                        onClick={handleAddToCart}
                        disabled={isLoading}
                        className="flex-[1.5] relative flex items-center justify-center rounded-full bg-black py-2.5 sm:py-3.5 text-[9px] sm:text-sm font-bold text-white group-hover:bg-white group-hover:text-black disabled:opacity-70 transition-all"
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-1 sm:gap-2">
                                <div className="h-3 w-3 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-white border-t-transparent group-hover:border-black" />
                                <span>Adding...</span>
                            </div>
                        ) : "Add to Cart"}
                    </button>

                    <button
                        className="flex-1 rounded-full border border-gray-200 px-1 lg:px-0 py-2.5 sm:py-3.5 text-[9px] sm:text-sm font-bold group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white transition-all"
                    >
                        Quick View
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
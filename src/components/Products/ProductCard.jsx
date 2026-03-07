import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaFire, FaStarHalfAlt } from "react-icons/fa";

export function ProductCard({ productData, setIsCartOpen, setActiveCartItem }) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [selectedColor, setSelectedColor] = useState(
        productData.colors && productData.colors.length > 0
            ? productData.colors[0].id
            : null
    );

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
            whileHover={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? -12 : 0 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full max-w-[340px] rounded-[24px] lg:rounded-[32px] bg-white p-4 lg:p-7 border border-slate-100 hover:bg-gradient-to-b hover:from-[#9c9c9c] hover:to-[#2d2d2d] transition-colors duration-700 shadow-sm"
        >
            {/* Best Seller Badge */}
            {productData.isBestSeller && (
                <div className="absolute left-4 lg:left-6 top-4 lg:top-6 z-20 flex items-center gap-1 rounded-full bg-orange-100 px-2 lg:px-3 py-1 text-[9px] lg:text-[10px] font-bold text-orange-600 lg:group-hover:bg-orange-500 lg:group-hover:text-white transition-all">
                    <FaFire className="text-[10px] lg:text-[12px]" /> BEST SELLER
                </div>
            )}

            {/* Wishlist Button */}
            <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute right-4 lg:right-6 top-4 lg:top-6 z-20 flex h-8 lg:h-10 w-8 lg:w-10 items-center justify-center rounded-full bg-gray-100/80 backdrop-blur-sm"
            >
                <FaHeart className={`text-sm lg:text-base ${isWishlisted ? "text-red-500" : "text-gray-400"}`} />
            </button>

            {/* Product Image */}
            <div className="mb-3 lg:mb-6 mt-4 flex justify-center">
                <motion.img
                    src={productData.image}
                    alt={productData.name}
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    className="w-[140px] lg:w-[200px] h-auto object-contain drop-shadow-xl"
                />
            </div>

            <div className="relative z-10 text-black">
                <h2 className="mb-1 lg:mb-2 text-[18px] lg:text-[22px] font-bold lg:group-hover:text-white transition-colors duration-300 line-clamp-1">
                    {productData.name}
                </h2>

                {/* Color Selector */}
                <div className="h-6 mb-2 lg:mb-3 flex gap-2 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">
                    {productData.colors && productData.colors.length > 0 ? (
                        productData.colors.map((color) => (
                            <div
                                key={color.id}
                                onClick={() => setSelectedColor(color.id)}
                                className={`h-3 w-3 lg:h-4 lg:w-4 cursor-pointer rounded-full border-2 ${color.bg} 
                                ${selectedColor === color.id ? 'border-gray-400 ring-1 ring-offset-1 ring-gray-400' : 'border-transparent'}`}
                            />
                        ))
                    ) : (
                        <span className="text-[10px] text-gray-400 lg:group-hover:text-gray-300">Standard Edition</span>
                    )}
                </div>

                <p className="mb-3 lg:mb-4 text-xs lg:text-sm leading-relaxed text-gray-500 lg:group-hover:text-gray-200 line-clamp-2">
                    {productData.description}
                </p>

                {/* Rating & Reviewers */}
                <div className="mb-3 lg:mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <div className="flex text-yellow-400 text-[13px] lg:text-[16px]">
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <span key={index}>
                                        {productData.rating >= ratingValue ? (
                                            <FaStar />
                                        ) : productData.rating >= ratingValue - 0.5 ? (
                                            <FaStarHalfAlt />
                                        ) : (
                                            <FaStar className="text-gray-300" />
                                        )}
                                    </span>
                                );
                            })}
                        </div>
                        <span className="ml-0.5 text-xs lg:text-sm font-bold lg:group-hover:text-white transition-colors">
                            {productData.rating}
                        </span>
                    </div>

                    <div className="flex -space-x-2.5 lg:opacity-0 lg:translate-x-10 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-500">
                        {productData.reviewers?.slice(0, 2).map((user, index) => (
                            <img
                                key={user.id || index}
                                src={user.img}
                                className="h-6 w-6 lg:h-8 lg:w-8 rounded-full border-2 border-white object-cover shadow-sm bg-gray-200"
                                alt="reviewer"
                            />
                        ))}
                        {productData.reviewers?.length > 2 && (
                            <div className="flex h-6 w-6 lg:h-8 lg:w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-[8px] lg:text-[10px] font-bold text-gray-600 shadow-sm">
                                +{productData.reviewers.length - 2}
                            </div>
                        )}
                    </div>
                </div>

                {/* Price & Stock Section */}
                <div className="mb-5 lg:mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-1 lg:gap-3 flex-wrap">
                        <span className="text-xl lg:text-2xl font-black lg:group-hover:text-white transition-colors">${productData.price}</span>
                        <span className="text-[11px] lg:text-sm text-gray-400 line-through lg:group-hover:text-gray-300 transition-colors">${productData.oldPrice}</span>
                        {productData.discount && (
                            <span className="rounded-full bg-red-500 px-2 lg:px-2.5 py-0.5 text-[9px] lg:text-[10px] font-bold text-white shadow-sm ring-1 ring-white/20">
                                {productData.discount.replace('-', '')}
                            </span>
                        )}
                    </div>

                    {/* Stock */}
                    <div className="flex flex-col items-end min-w-[60px] lg:min-w-[80px] lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
                        <div className="mb-1 flex justify-between w-full text-[9px] font-bold lg:group-hover:text-white transition-colors">
                            <span>Stock</span>
                            <span className="ml-1">{productData.stockLeft}</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-gray-100 lg:bg-gray-600/50 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: productData.stockLeft > 100 ? "100%" : `${(productData.stockLeft / 100) * 100}%` }}
                                className="h-full rounded-full bg-red-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-row gap-2">
                    <button
                        onClick={handleAddToCart}
                        disabled={isLoading}
                        className="flex-[2] relative flex items-center justify-center rounded-full bg-black py-2.5 lg:py-3.5 text-[10px] lg:text-sm font-bold text-white lg:group-hover:bg-green-600 lg:group-hover:text-white disabled:opacity-70 transition-all"
                    >
                        {isLoading ? (
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        ) : "Add to Cart"}
                    </button>

                    <button className="flex-1 rounded-full border border-gray-200 py-2.5 lg:py-3.5 text-[10px] lg:text-sm font-bold lg:group-hover:border-white/30 lg:group-hover:bg-white/10 lg:group-hover:text-white transition-all">
                        View
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
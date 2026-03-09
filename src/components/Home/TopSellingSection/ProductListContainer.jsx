import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DiscountProductCard from "../DiscountProduct/DiscountProductCard";

const ProductListContainer = ({ title, allItems }) => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 3;

    const nextItems = () => {
        if (startIndex + itemsPerPage < allItems.length) {
            setStartIndex((prev) => prev + itemsPerPage);
        }
    };

    const prevItems = () => {
        if (startIndex > 0) {
            setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
        }
    };

    const visibleItems = allItems.slice(startIndex, startIndex + itemsPerPage);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="w-full">

            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-3">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>

                <div className="flex gap-2">
                    <button
                        onClick={prevItems}
                        disabled={startIndex === 0}
                        className={`p-1.5 border rounded-lg transition ${startIndex === 0
                            ? "opacity-30 cursor-not-allowed"
                            : "hover:bg-gray-100"
                            }`}
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <button
                        onClick={nextItems}
                        disabled={startIndex + itemsPerPage >= allItems.length}
                        className={`p-1.5 border rounded-lg transition ${startIndex + itemsPerPage >= allItems.length
                            ? "opacity-30 cursor-not-allowed"
                            : "hover:bg-gray-100"
                            }`}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Product List */}
            <div className=" overflow-hidden flex flex-col gap-4">
                <AnimatePresence mode="wait">
                    {visibleItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.3 }}
                            className=""
                        >
                            <DiscountProductCard product={item} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProductListContainer;
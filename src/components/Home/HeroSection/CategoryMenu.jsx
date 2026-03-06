import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CategoryMenu({ categoriesData }) {
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubCategory, setActiveSubCategory] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block col-span-3 bg-white rounded-2xl shadow-lg border border-gray-100 self-start z-50 relative"
            onMouseLeave={() => { setActiveCategory(null); setActiveSubCategory(null); }}
        >
            <div className="px-5 py-4 border-b border-gray-50 font-bold text-gray-800">
                Categories
            </div>

            <div className="relative p-2">
                <div className="max-h-[375px] overflow-y-auto no-scrollbar space-y-1">
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .no-scrollbar::-webkit-scrollbar { display: none; }
                        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                    ` }} />

                    {categoriesData.map((cat, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => { setActiveCategory(cat); setActiveSubCategory(null); }}
                            className={`flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer text-sm font-medium transition-all ${activeCategory?.name === cat.name ? "bg-orange-50 text-orange-600" : "hover:bg-gray-50 text-gray-700"}`}
                        >
                            <span className="truncate pr-2">{cat.name}</span>
                            {cat.subCategories?.length > 0 && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
                        </div>
                    ))}
                </div>

                <AnimatePresence>
                    {activeCategory?.subCategories?.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="absolute left-[98%] top-0 w-64 min-h-[100%] bg-white border border-gray-100 shadow-2xl rounded-r-2xl flex z-[100]"
                        >
                            <div className="w-full p-2 border-r border-gray-50 bg-white rounded-r-2xl">
                                {activeCategory.subCategories.map((sub, idx) => (
                                    <div
                                        key={idx}
                                        onMouseEnter={() => setActiveSubCategory(sub)}
                                        className={`flex items-center justify-between px-4 py-2.5 rounded-lg cursor-pointer text-sm transition-colors ${activeSubCategory?.name === sub.name ? "text-orange-600 bg-orange-50 font-bold" : "text-gray-600 hover:bg-gray-50"}`}
                                    >
                                        <span className="truncate">{sub.name}</span>
                                        <ChevronRight className="w-3 h-3" />
                                    </div>
                                ))}
                            </div>

                            {activeSubCategory?.items?.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="absolute left-full top-0 w-60 h-full bg-white border-l border-gray-50 shadow-2xl p-4 space-y-2 rounded-r-2xl"
                                >
                                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 border-b pb-1">Products</h4>
                                    <div className="space-y-2 overflow-y-auto max-h-[350px] no-scrollbar">
                                        {activeSubCategory.items.map((item, i) => (
                                            <div key={i} className="text-sm text-gray-500 hover:text-orange-600 cursor-pointer transition-colors py-1 truncate">
                                                {typeof item === 'string' ? item : item.name}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
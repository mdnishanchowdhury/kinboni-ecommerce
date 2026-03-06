import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BiCategory } from "react-icons/bi";
import { motion } from "framer-motion";
import { categoriesData } from "../../../data/categories";

export default function ShopByCategorySlider() {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const allFinalItems = categoriesData.flatMap(cat =>
        cat.subCategories?.flatMap(sub => sub.items) || []
    );

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = window.innerWidth < 768 ? 200 : 400;
            const scrollTo = direction === "left"
                ? sliderRef.current.scrollLeft - scrollAmount
                : sliderRef.current.scrollLeft + scrollAmount;

            sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className=" px-6 lg:px-0 select-none">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">
                            <span className="text-green-600"><BiCategory /></span> Featured Items
                        </h2>
                        <p className="text-slate-500 mt-1 text-xs md:text-base">
                            Drag with mouse or use buttons to explore
                        </p>
                    </div>

                    <div className="hidden md:flex gap-3">
                        <button onClick={() => scroll("left")} className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 transition-all shadow-sm">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={() => scroll("right")} className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 transition-all shadow-sm">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className={`grid grid-rows-2 grid-flow-col gap-6 md:gap-8 overflow-x-auto no-scrollbar pb-6 scroll-smooth ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .no-scrollbar::-webkit-scrollbar { display: none; }
                        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                    ` }} />

                    {allFinalItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center group w-[130px] md:w-[160px]">
                            {/* Card Image Box */}
                            <div className="w-full aspect-square bg-white border border-slate-200 rounded-[24px] flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-slate-300 pointer-events-none overflow-hidden">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Title  */}
                            <h3 className="mt-3 text-[13px] md:text-[15px] font-bold text-[#2d2e2f] text-center leading-tight line-clamp-2 pointer-events-none group-hover:text-black">
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
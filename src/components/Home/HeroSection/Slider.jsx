import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useAutoSlide } from "../../../hooks/useAutoSlide";

function Slider({ banners }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };

    useAutoSlide(nextSlide, 10000);

    return (
        <div className="relative rounded-3xl overflow-hidden shadow-xs h-[300px] md:h-[450px] border-2 border-gray-100">

            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: .8 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${banners[current].image})` }}
                />
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-8 md:px-16">
                <motion.div
                    key={current + "text"}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-xl space-y-4 md:space-y-6 text-black"
                >
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight whitespace-pre-line">
                        {banners[current].title.replace(", ", "\n")}
                    </h1>

                    <p className="text-sm md:text-lg opacity-90 font-medium">
                        {banners[current].description}
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full px-8 py-3 bg-green-600 text-white font-semibold shadow-lg"
                    >
                        Shop Now
                    </motion.button>
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white z-20"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white z-20"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {banners.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCurrent(index)}
                        whileHover={{ scale: 1.2 }}
                        className={`rounded-full transition-all ${current === index
                            ? "w-8 h-2 bg-green-500"
                            : "w-2 h-2 bg-white/70"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider
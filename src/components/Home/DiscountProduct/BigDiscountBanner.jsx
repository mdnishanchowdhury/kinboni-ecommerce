import React from 'react';
import { motion } from 'framer-motion';

const BigDiscountBanner = ({
    discountAmount = "50",
    discountSymbol = "%",
    collectionName = "NEW COLLECTION",
    title = "Trending Summer Fashion Style"
}) => {
    return (
        <div className="flex flex-col md:flex-row h-auto md:h-[180px] rounded-[20px] overflow-hidden shadow-sm mb-10 mx-auto font-sans border border-gray-100 bg-white">

            {/* Left Content Section */}
            <div className="w-full md:w-[40%] bg-[#FCEBF2] flex flex-col justify-center px-6 py-8 md:px-10 relative z-10">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="bg-[#D81B60] text-white text-[10px] md:text-[11px] font-bold px-3 py-1 rounded-full w-fit mb-3"
                >
                    {collectionName}
                </motion.div>

                <h2 className="text-[#880E4F] text-2xl md:text-3xl font-black leading-[1.1] mb-2">
                    {title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>{word} {i === 1 && <br className="hidden md:block" />}</React.Fragment>
                    ))}
                </h2>

                <p className="text-[#880E4F] text-sm font-medium">
                    Flat <span className="text-[#D81B60] font-bold">{discountAmount}{discountSymbol} OFF</span> on latest trends!
                </p>
            </div>

            {/* Right Image & Big Text Section */}
            <div className="relative flex-1 bg-gradient-to-r from-[#FCEBF2] via-white to-white flex items-center justify-center overflow-hidden min-h-[150px]">

                {/* Background Big Discount Text */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-[100px] md:text-[160px] font-black text-[#FCEBF2] leading-none select-none tracking-tighter italic opacity-60">
                    {discountAmount}{discountSymbol}
                </div>

                {/* Floating Model Image */}
                <div className="absolute right-4 bottom-0 h-full w-full flex justify-end items-end">
                    <motion.img
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        src="https://i.ibb.co.com/hJWkLkVq/dicount.png"
                        alt="Fashion Model"
                        className="h-[90%] md:h-full object-contain object-bottom transition-transform hover:scale-105 duration-500"
                    />
                </div>
            </div>

        </div>
    );
};

export default BigDiscountBanner;
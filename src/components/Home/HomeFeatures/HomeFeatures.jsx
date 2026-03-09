import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Headphones, Box, ShieldCheck } from 'lucide-react';

const HomeFeatures = () => {
    const featureData = [
        {
            title: "Fast Delivery",
            desc: "Enjoy the Convenience of Free Shipping on Every Order",
            icon: <Truck size={28} />,
            bgColor: "bg-[#A3E4DB]",
        },
        {
            title: "24x7 Support",
            desc: "Round-the-Clock Assistance, Anytime You Need It",
            icon: <Headphones size={28} />,
            bgColor: "bg-[#FFEA7F]",
        },
        {
            title: "30 Days Return",
            desc: "Your Satisfaction is Our Priority: Return Any Product Within 30 Days",
            icon: <Box size={28} />,
            bgColor: "bg-[#FFC090]",
        },
        {
            title: "Secure Payment",
            desc: "Seamless Shopping Backed by Safe and Secure Payment Options",
            icon: <ShieldCheck size={28} />,
            bgColor: "bg-[#9DE47C]",
        }
    ];

    return (
        <section className="py-16 px-4 md:px-0 bg-white">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featureData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className={`${item.bgColor} p-8 rounded-[2rem] flex flex-col items-center text-center shadow-sm cursor-default h-full`}
                        >
                            {/* Icon Container */}
                            <div className="bg-white p-5 rounded-full mb-6 shadow-sm flex items-center justify-center">
                                <div className="text-gray-800">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="font-bold text-xl text-gray-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[15px] text-gray-800 font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeFeatures;
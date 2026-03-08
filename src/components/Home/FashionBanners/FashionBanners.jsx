import woman from "../../../assets/image/banner/Women's Clothing.png";
import couple from "../../../assets/image/banner/Couple Edition.png";
import Kids from "../../../assets/image/banner/Kids & Baby.png";

const FashionBanners = () => {
    return (
        <div className="font-sans px-4 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[550px]">
                {/* couple */}
                <div className="md:col-span-2 flex flex-col rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="h-1/2 overflow-hidden">
                        <img
                            src={couple}
                            alt="Model"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="h-1/2 bg-[#FDE2F3] flex flex-col items-center justify-center p-6 text-center">
                        <span className="bg-[#FFD700] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-sm">
                            Enjoy 20% savings
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mb-2 leading-tight">
                            Made for Each Other: Couple Edition
                        </h2>
                        <p className="text-gray-600 text-sm mb-6 max-w-[80%]">
                            Explore our premium matching sets and define your couple goals today.
                        </p>
                        <button className="bg-[#008080] hover:bg-[#006666] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all transform hover:scale-105">
                            Shop Now
                            <span className="bg-white text-[#008080] rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">↗</span>
                        </button>
                    </div>
                </div>

                {/*Women's Clothing*/}
                <div className="md:col-span-1 flex flex-col rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="h-1/2 bg-[#FFF4A3] flex flex-col items-center justify-center p-6 text-center order-2 md:order-1">
                        <span className="bg-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                            Enjoy 20% savings
                        </span>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">Women's Clothing</h2>
                        <p className="text-gray-600 text-xs mb-5">Shop exclusive collections and express your unique style.</p>
                        <button className="bg-[#008080] text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm transition-all hover:bg-[#006666]">
                            Shop Now
                            <span className="bg-white text-[#008080] rounded-full w-4 h-4 flex items-center justify-center text-[8px] font-bold">↗</span>
                        </button>
                    </div>
                    <div className="h-1/2 bg-[#FFFBEB] overflow-hidden order-1 md:order-2">
                        <img
                            src={woman}
                            alt="Women Clothing"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>

                {/*Kids & Baby*/}
                <div className="md:col-span-1 flex flex-col rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="h-1/2 overflow-hidden bg-gray-100">
                        <img
                            src={Kids}
                            alt="Kids Clothing"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="h-1/2 bg-[#A7E6E3] flex flex-col items-center justify-center p-6 text-center">
                        <span className="bg-[#FFD700] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 shadow-sm">
                            Enjoy 20% savings
                        </span>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">Kids & Baby Clothing</h2>
                        <p className="text-gray-600 text-xs mb-5">Shop exclusive collections and express your unique style.</p>
                        <button className="bg-[#008080] text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm transition-all hover:bg-[#006666]">
                            Shop Now
                            <span className="bg-white text-[#008080] rounded-full w-4 h-4 flex items-center justify-center text-[8px] font-bold">↗</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FashionBanners;
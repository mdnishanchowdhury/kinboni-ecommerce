import { HiArrowRight} from "react-icons/hi";

export default function AnnouncementBar({isSellerMode}) {
    return (
        <div className="w-full bg-white shadow-sm font-DM">
            {
                !isSellerMode && (
                    <div className="w-full bg-green-500 py-2 px-4">
                        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-white text-[11px] sm:text-xs font-bold uppercase">
                            <div className="flex items-center gap-4 flex-1">
                                <span className="italic text-lg">KINBONI<span className="not-italic font-bold">.com</span></span>
                                <p className="hidden md:block ml-2">Up to 20% off 8M+ hot picks</p>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-4 ">
                                <button className="flex items-center gap-1 hover:opacity-80">Explore now <HiArrowRight /></button>
                                <div className="flex items-center gap-1">
                                    <span className="text-gray-200">Starts in</span>
                                    <span className="bg-white text-black px-1.5 rounded-sm">47</span>:
                                    <span className="bg-white text-black px-1.5 rounded-sm">53</span>:
                                    <span className="bg-white text-black px-1.5 rounded-sm">42</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    )
}

import fashion from "../../../assets/image/banner/fashion.jpg";
import mobile from "../../../assets/image/banner/mobile.jpg";
import electonic from "../../../assets/image/banner/electonic.jpg";
import HeroSlider from "./Slider";
import { categoriesData } from "../../../data/categories";
import CategoryMenu from "./CategoryMenu";


function HeroSection() {

    const banners = [
        {
            image: mobile,
            title: "Samsung Galaxy, S26 Ultra",
            description: "Know The Expected Price and Specs",
        },
        {
            image: fashion,
            title: "Latest Fashion Collection",
            description: "Trendy styles at the best prices."
        },
        {
            image: electonic,
            title: "Smart Home, Essentials",
            description: "Modern appliances and gadgets for a smart home."
        },
    ];

    return (
        <div className="w-full flex items-center justify-center py-6 px-4 md:px-0">
            <div className="w-full max-w-[1440px] mx-auto grid grid-cols-12 gap-6">

                {/* Sidebar */}
                <CategoryMenu categoriesData={categoriesData} />

                {/* Hero Section */}
                <div className="col-span-12 md:col-span-9">
                    <HeroSlider banners={banners} />
                </div>

            </div>
        </div>
    );
}
export default HeroSection;
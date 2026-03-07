import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/image/logo/logoT.png";
import { Phone, Mail, MapPin, ChevronRight, ArrowUp } from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#F8F9FA] text-[#333333] pt-16 pb-8 px-4 md:px-10 border-t border-gray-200">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">

                    {/* logo social */}
                    <div className="lg:col-span-1">
                        <img src={logo} alt="Kinboni" className="w-36 h-auto mb-6" />
                        <p className="text-sm text-gray-500 leading-relaxed mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="flex gap-2 mb-8">
                            {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#00A762] hover:bg-[#00A762] hover:text-white transition-all shadow-sm">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold uppercase tracking-wider mb-4 text-gray-900">Download Our App:</h4>
                            <div className="flex flex-col gap-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="w-32 cursor-pointer" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="w-32 cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-8 text-gray-900">About</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            {["About Us", "Terms & Conditions", "Careers", "Latest News", "Contact Us", "Privacy Policy"].map((item) => (
                                <li key={item} className="flex items-center gap-2 hover:text-[#00A762] cursor-pointer group transition-all">
                                    <ChevronRight size={14} className="text-[#00A762]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-8 text-gray-900">My Account</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            {["Your Account", "Return Policies", "Become a Vendor", "Wishlist", "Affiliate Program", "FAQs"].map((item) => (
                                <li key={item} className="flex items-center gap-2 hover:text-[#00A762] cursor-pointer group transition-all">
                                    <ChevronRight size={14} className="text-[#00A762]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-8 text-gray-900">Categories</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            {["Healthcare", "Fashion", "Organic", "Beauty", "Groceries", "Fahion"].map((item) => (
                                <li key={item} className="flex items-center gap-2 hover:text-[#00A762] cursor-pointer group transition-all">
                                    <ChevronRight size={14} className="text-[#00A762]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* content section */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 text-gray-900">Contact Information's</h3>
                        <ul className="space-y-5 text-sm text-gray-600">
                            <li className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-[#E6F6EF] flex items-center justify-center shrink-0 border border-[#CCE9DD]">
                                    <MapPin size={18} className="text-[#00A762]" />
                                </div>
                                <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-[#E6F6EF] flex items-center justify-center shrink-0 border border-[#CCE9DD]">
                                    <Phone size={18} className="text-[#00A762]" />
                                </div>
                                <span>Call Us: (239) 555-0108</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-[#E6F6EF] flex items-center justify-center shrink-0 border border-[#CCE9DD]">
                                    <Mail size={18} className="text-[#00A762]" />
                                </div>
                                <span>sara.cruz@example.com</span>
                            </li>
                        </ul>

                        {/* payment icon */}
                        <div className="mt-10 flex flex-wrap gap-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" className="h-6 bg-white px-1 border border-gray-100 rounded" alt="Master" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6 bg-white px-1 border border-gray-100 rounded" alt="Paypal" />
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 relative flex flex-col items-center">
                    <p className="text-sm text-gray-500 font-medium">
                        2026 Copyright By Theme-forest Powered By Kinboni
                    </p>
                </div>
            </div>
            <div className="flex justify-end">
                <button
                    onClick={scrollToTop}
                    className="w-12 h-12 bg-[#00A762] rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-all duration-300 group"
                >
                    <ArrowUp size={20} className="text-white group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
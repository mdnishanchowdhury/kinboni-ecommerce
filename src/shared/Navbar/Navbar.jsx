import logo from "../../assets/image/logo/logoT.png";
import { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { categoriesData } from "../../data/categories";
import AnnouncementBar from "../../components/Navbar/AnnouncementBar";
import CartDropdown from "../../components/Navbar/CartDropdown";
import MessageDropdown from "../../components/Navbar/MessageDropdown";
import AccountDropdown from "../../components/Navbar/AccountDropdown";
import MobileSearchBar from "../../components/Navbar/MobileSearchBar";
import DesktopSearch from "../../components/Navbar/DesktopSearch";
import DesktopNavigation from "../../components/Navbar/DesktopNavigation";
import MobileDrawer from "../../components/Navbar/MobileDrawer";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const [isSellerMode, setIsSellerMode] = useState(() => {
        const savedMode = localStorage.getItem("isSellerMode");
        return savedMode === "true";
    });

    useEffect(() => {
        localStorage.setItem("isSellerMode", isSellerMode);
    }, [isSellerMode]);

    useEffect(() => {
        const handleClickOutside = () => setActiveDropdown(null);
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const toggleDropdown = (e, name) => {
        e.stopPropagation();
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/aboutUs" },
        { name: "Seller", path: "/seller" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            {/* announcementBar */}
            <AnnouncementBar isSellerMode={isSellerMode} />

            {/*Header Section */}
            <header className="w-full sticky top-0 z-[100] bg-white shadow-sm font-DM pt-2 lg:pt-0">
                <div className="max-w-[1440px] mx-auto px-4 lg:px-0 py-1 flex items-center justify-between gap-6">

                    {/* Logo & Mobile Menu Toggle */}
                    <div className="flex items-center gap-3">
                        <HiOutlineMenu onClick={() => setOpen(true)} className="text-2xl lg:hidden cursor-pointer text-gray-700" />
                        <img className="h-6 lg:h-11 object-contain" src={logo} alt="KINBONI" />
                    </div>

                    {/* Desktop Search Bar */}
                    <DesktopSearch />

                    <div className="flex items-center gap-4 lg:gap-8 relative">

                        {/* Mode Switcher Button */}
                        <button
                            onClick={() => setIsSellerMode(!isSellerMode)}
                            className={`hidden md:flex items-center gap-2 px-4 py-[9px] rounded-full border-2 transition-all font-bold text-xs ${isSellerMode ? 'bg-green-500  text-white' : 'bg-white border-gray-200 text-gray-600 hover:border-green-600'}`}
                        >
                            <HiOutlineSwitchHorizontal className="text-lg" />
                            {isSellerMode ? 'Switch to Buying' : 'Switch to Selling'}
                        </button>

                        {/* Message Icon & Dropdown */}
                        <MessageDropdown
                            activeDropdown={activeDropdown}
                            toggleDropdown={toggleDropdown}
                        />

                        {/* Cart Icon */}
                        <CartDropdown
                            isSellerMode={isSellerMode}
                            activeDropdown={activeDropdown}
                            toggleDropdown={toggleDropdown}
                        />

                        {/* User Account Icon & Dropdown */}
                        <AccountDropdown
                            activeDropdown={activeDropdown}
                            toggleDropdown={toggleDropdown}
                        />
                    </div>
                </div>

                {/*Mobile Search Bar */}
                <MobileSearchBar />

                {/* Desktop Lower Navigation */}
                <DesktopNavigation
                    navLinks={navLinks}
                    categoriesData={categoriesData}
                    isSellerMode={isSellerMode}
                />

                {/* Mobile Drawer Menu */}
                <MobileDrawer
                    open={open}
                    setOpen={setOpen}
                    logo={logo}
                    isSellerMode={isSellerMode}
                    setIsSellerMode={setIsSellerMode}
                    navLinks={navLinks}
                />
            </header>
        </>
    );
}

export default Navbar;
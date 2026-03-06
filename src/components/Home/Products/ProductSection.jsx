import { BiCategory } from "react-icons/bi";
import { products } from "../../../data/products";
import ProductGrid from "./ProductGrid";

export function ProductSection() {

    return (
        <div className="min-h-screen lg:py-10 px-4 lg:px-0">

            {/*Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div className="space-y-2">
                    <h2 className="text-xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="text-green-600"><BiCategory size={22} className="md:w-7 md:h-7" /></span> Our Products
                    </h2>
                    <p className="text-slate-500 mt-1 text-xs md:text-base">
                        Products we picked just for you
                    </p>
                </div>

                {/*View All Button or Tabs */}
                <div className="flex gap-4">
                    <button className="px-6 py-3 rounded-full bg-slate-100 text-slate-800 font-bold text-sm hover:bg-slate-200 transition-all active:scale-95">
                        View All Items
                    </button>
                </div>
            </div>
            <ProductGrid products={products} />
        </div>
    );
};

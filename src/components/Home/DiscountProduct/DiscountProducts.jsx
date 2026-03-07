import { products } from "../../../data/products";
import { filterFlashDeals } from "../../../utils/filterFlashDeals";
import DiscountProductCard from "./DiscountProductCard";

export default function DiscountProducts() {

  const hotDeals = filterFlashDeals(products.data);

  return (
    <section className="bg-white py-5 px-4 lg:px-0">
      <div>
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#C6002C] rounded-full inline-block"></span>
              Flash Sale
            </h2>
            <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
              {hotDeals[0]?.timer.timerLabel || "Limited Offers"}
            </p>
          </div>

          <button className="text-[#007b70] font-bold text-sm hover:underline transition-all">
            View All Offers
          </button>
        </div>

        {/* Product Grid */}
        {hotDeals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotDeals.map((singleProduct) => (
              <DiscountProductCard
                key={singleProduct.id}
                product={singleProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium italic">
              No active flash deals at the moment!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
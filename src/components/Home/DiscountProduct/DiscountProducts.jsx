import { motion } from "framer-motion";
import { products } from "../../../data/products";
import { filterFlashDeals } from "../../../utils/filterFlashDeals";
import DiscountProductCard from "./DiscountProductCard";
import BigDiscountBanner from "./BigDiscountBanner";
import { useMemo } from "react";

export default function DiscountProducts() {
  const hotDeals = filterFlashDeals(products.data);

  const maxDiscount = useMemo(() => {
    if (hotDeals.length === 0) return "10";

    const discounts = hotDeals.map(p => p.pricing.discountPercent || 0);
    return Math.max(...discounts).toString();
  }, [hotDeals]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="bg-white py-5 px-4 lg:px-0">

      <BigDiscountBanner
        discountAmount={maxDiscount}
        collectionName="LIMITED FLASH SALE"
        title="Exclusive Summer Fashion Style"
      />

      <div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4"
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#C6002C] rounded-full inline-block"></span>
              Flash Sale
            </h2>
            <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
              {hotDeals[0]?.timer.timerLabel || "Limited Offers"}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-slate-100 text-slate-800 font-bold text-sm hover:bg-slate-200 transition-all shadow-sm"
          >
            View All Offers
          </motion.button>
        </motion.div>

        {/* Product Grid */}
        {hotDeals.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {
              hotDeals.map((singleProduct) => (
                <motion.div key={singleProduct.id} variants={itemVariants}>
                  <DiscountProductCard product={singleProduct} />
                </motion.div>
              ))
            }
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200"
          >
            <p className="text-slate-400 font-medium italic">
              No active flash deals at the moment!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
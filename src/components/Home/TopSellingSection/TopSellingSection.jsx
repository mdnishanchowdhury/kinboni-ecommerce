import React, { useMemo } from 'react';
import { motion } from "framer-motion";
import TopSellingBanner from './TopSellingBanner';
import ProductListContainer from './ProductListContainer';
import { products } from '../../../data/products';

const TopSellingSection = () => {
  const productList = Array.isArray(products?.data) ? products.data : [];

  const maxDiscount = useMemo(() => {
    if (productList.length === 0) return "10";
    const discounts = productList.map(p => p.pricing?.discountPercent || 0);
    return Math.max(...discounts).toString();
  }, [productList]);

  const topWomen = productList
    .filter(item => ["women", "female"].includes(item.gender?.toLowerCase()))
    .sort((a, b) => (b.ratings?.average || 0) - (a.ratings?.average || 0));

  const topMen = productList
    .filter(item => ["men", "male"].includes(item.gender?.toLowerCase()))
    .sort((a, b) => (b.ratings?.average || 0) - (a.ratings?.average || 0));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  if (productList.length === 0) return null;

  return (
    <div className="px-4 lg:px-0 py-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">Top Selling Products</h2>
        <p className="text-gray-500 text-sm mt-1">Flat {maxDiscount}% OFF on latest trends! 🔥</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6">
        <TopSellingBanner maxDiscount={maxDiscount} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:w-2/3 grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <ProductListContainer title="Top Rated Women" allItems={topWomen} itemVariants={itemVariants} />
          <ProductListContainer title="Top Rated Men" allItems={topMen} itemVariants={itemVariants} />
        </motion.div>
      </div>
    </div>
  );
};

export default TopSellingSection;
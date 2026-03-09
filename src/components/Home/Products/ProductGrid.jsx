import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";

function ProductGrid({ products }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [activeCartItem, setActiveCartItem] = useState(null);


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
        <div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
                {products?.data?.map((product) => (
                    <motion.div key={product.id} variants={itemVariants}>
                        <ProductCard
                            productData={product}
                            setIsCartOpen={setIsCartOpen}
                            setActiveCartItem={setActiveCartItem}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/*drower */}
            {isCartOpen && (
                <CartDrawer
                    isOpen={isCartOpen}
                    item={activeCartItem}
                    onClose={() => setIsCartOpen(false)}
                />
            )}
        </div>
    )
}

export default ProductGrid;
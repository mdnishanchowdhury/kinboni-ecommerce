import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CartDrawer from "./CartDrawer";
import { ProductCard } from "./ProductCard";

function ProductGrid({ products }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [activeCartItem, setActiveCartItem] = useState(null);

    return (
        <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        productData={product}
                        setIsCartOpen={setIsCartOpen}
                        setActiveCartItem={setActiveCartItem}
                    />
                ))}
            </div>

            {/*drower */}
            <AnimatePresence>
                {isCartOpen && (
                    <CartDrawer
                        isOpen={isCartOpen}
                        item={activeCartItem}
                        onClose={() => setIsCartOpen(false)}
                    />
                )}
            </AnimatePresence>

            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .animate-bounce-slow { animation: bounce-slow 3s infinite ease-in-out; }
            `}</style>
        </div>
    )
}

export default ProductGrid;
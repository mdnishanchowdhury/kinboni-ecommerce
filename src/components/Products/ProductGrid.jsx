import { useState } from "react";
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
export const filterFlashDeals = (products) => {
    const now = new Date();

    return products.filter((item) => {
        const expireDate = new Date(item.timer.expiresAt);

        return (
            item.timer?.isFlashSale &&
            item.pricing?.discountPercent >= 20 &&
            expireDate > now
        );
    });
};
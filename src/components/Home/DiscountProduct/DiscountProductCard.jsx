import { useMemo } from 'react';
import { Clock, ShoppingCart } from 'lucide-react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useCountdown } from "../../../hooks/useCountdown";
import { getStockPercent } from '../../../utils/calcStockPercent';
import { getStarsArray } from '../../../utils/calcRatingStars';

const DiscountProductCard = ({ product }) => {
  const targetTime = useMemo(
    () => (product.timer?.expiresAt ? new Date(product.timer.expiresAt).getTime() : 0),
    [product.timer?.expiresAt]
  );

  const timeLeft = useCountdown(targetTime);
  const isExpired =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  const handleOrder = (e) => {
    e.stopPropagation();
    if (product.inventory.available > 0) {
      alert(`${product.name} ordered! Price: $${product.pricing.currentPrice}`);
    }
  };

  const isOutOfStock = product.inventory.available === 0;
  const stockPercent = getStockPercent(product.inventory.available, product.inventory.total);
  const starsArray = useMemo(() => getStarsArray(product.ratings.average), [product.ratings.average]);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-4 hover:shadow-xl hover:border-transparent transition-all duration-300 group cursor-pointer">

      {/* Left: Image */}
      <div className="w-1/3 aspect-square flex items-center justify-center bg-[#f8f8f8] rounded-xl overflow-hidden relative">
        <img
          src={product.media.thumbnail}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        {product.pricing.discountPercent && (
          <div className="absolute top-0 left-0 bg-[#C6002C] text-white text-[9px] font-black px-2 py-1 rounded-br-lg shadow-lg">
            {product.pricing.discountPercent}% OFF
          </div>
        )}
      </div>

      {/* Right: Content */}
      <div className="w-2/3 flex flex-col justify-between h-full py-1 relative">
        <div>
          <div className="flex justify-between items-start mb-1">
            {product.timer?.timerLabel && (
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-tighter bg-orange-50 px-2 py-0.5 rounded">
                {product.timer.timerLabel}
              </span>
            )}
            <div className="flex items-center gap-1 text-[10px] font-mono font-bold">
              <Clock size={12} className={isExpired ? "text-gray-400" : "text-[#C6002C]"} />
              <span className={isExpired ? "text-gray-400" : "text-slate-500"}>
                {isExpired ? "Expired" : `${timeLeft.days}d:${timeLeft.hours}h:${timeLeft.minutes}m`}
              </span>
            </div>
          </div>

          <h3 className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-[#007b70] transition-colors pr-8">
            {product.name}
          </h3>

          {/* Reviews */}
          <div className="flex items-center gap-2 mt-2">
            {/* Star Rating */}
            <div className="flex items-center gap-1.5">
              <div className="flex text-yellow-400 text-[13px] lg:text-[16px]">
                {starsArray.map((star, i) => (
                  <span key={i}>
                    {star === "full" ? <FaStar /> : star === "half" ? <FaStarHalfAlt /> : <FaStar className="text-gray-300" />}
                  </span>
                ))}
              </div>
              <span className="ml-0.5 text-xs lg:text-sm font-bold transition-colors">
                {product.ratings.average}
              </span>
            </div>

            {/* Reviewers Avatar Pile */}
            <div className="flex -space-x-2">
              {product.ratings.reviews?.slice(0, 2).map((review) => (
                <img
                  key={review.id}
                  src={review.user.avatar}
                  className="w-5 h-5 rounded-full border-2 border-white object-cover"
                  alt={review.user.name}
                />
              ))}
              {product.ratings.count > 2 && (
                <div className="w-5 h-5 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[7px] font-bold text-slate-600">
                  +{product.ratings.count - 2}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pricing & Order */}
        <div className="mt-3 space-y-2 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-[#007b70]">${product.pricing.currentPrice}</span>
              <span className="text-xs text-gray-400 line-through font-medium">${product.pricing.oldPrice}</span>
            </div>

            <button
              onClick={handleOrder}
              disabled={isOutOfStock || isExpired}
              className={`p-2 rounded-xl transition-all shadow-lg active:scale-90 ${isOutOfStock || isExpired
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-[#007b70]'
                }`}
            >
              <ShoppingCart size={16} />
            </button>
          </div>

          {/* Inventory Progress */}
          <div className="space-y-1">
            <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase tracking-tight">
              <span>{isOutOfStock ? "Out of Stock" : `Stock Left: ${product.inventory.available}`}</span>
              <span>{stockPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${stockPercent < 30 ? 'bg-red-500' : 'bg-orange-400'}`}
                style={{ width: `${stockPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProductCard;
import ShopByCategory from '../../components/Home/CategoriesSection/Categories'
import DiscountProducts from '../../components/Home/DiscountProduct/DiscountProducts';
import FashionBanners from '../../components/Home/FashionBanners/FashionBanners';
import HeroSection from '../../components/Home/HeroSection';
import HomeFeatures from '../../components/Home/HomeFeatures/HomeFeatures';
import { ProductSection } from '../../components/Home/Products/ProductSection';
import TopSellingSection from '../../components/Home/TopSellingSection/TopSellingSection';

function Home() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <HeroSection />
      <ShopByCategory />
      <ProductSection />
      <DiscountProducts />
      <TopSellingSection />
      <FashionBanners />
      <HomeFeatures />
    </div>
  )
}

export default Home;


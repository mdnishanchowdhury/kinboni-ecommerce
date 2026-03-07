import ShopByCategory from '../../components/Home/CategoriesSection/Categories'
import DiscountProducts from '../../components/Home/DiscountProduct/DiscountProducts';
import HeroSection from '../../components/Home/HeroSection';
import { ProductSection } from '../../components/Home/Products/ProductSection';

function Home() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <HeroSection />
      <ShopByCategory />
      <ProductSection />
      <div className='pb-10'>
        <DiscountProducts />
      </div>

    </div>
  )
}

export default Home;


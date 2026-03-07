import ShopByCategory from '../../components/Home/CategoriesSection/Categories'
import HeroSection from '../../components/Home/HeroSection';
import { ProductSection } from '../../components/Products/ProductSection';

function Home() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <HeroSection />
      <ShopByCategory />
      <div className='pb-10'>
        <ProductSection />
      </div>
    </div>
  )
}

export default Home;


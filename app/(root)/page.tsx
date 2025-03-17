import type { Metadata } from 'next';
import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

export const metadata: Metadata = {
  title: 'Home',
};

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList title='Newest Arrivals' data={latestProducts} limit={4} />
    </>
  );
};

export default Homepage;

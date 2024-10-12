import { AD_IMAGES, BANNER_IMG, PRODUCT, SELL_IMG } from '@/_mocks_';
import { Ad, Banner, Grid, ProductCard, Sell } from '@/components';

export default function HomePage() {
  return (
    <>
      <Banner showSponsored isAutoplay images={BANNER_IMG} height={300} />
      <Grid title="On Sell" buttonTitle="All">
        {SELL_IMG.map((sell) => (
          <Sell key={sell} imgUrl={sell} />
        ))}
      </Grid>
      <Ad showSponsored banners={AD_IMAGES} />
      <Grid>
        {[...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT].map((product, index) => (
          <ProductCard key={index} imgUrl={product} />
        ))}
      </Grid>
    </>
  );
}

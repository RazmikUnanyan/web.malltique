import { AD_IMAGES, BANNER_IMG, PRODUCT, SELL_IMG } from '@/_mocks_';
import { Ad, Banner, Grid, ProductCard, SellCard, Services } from '@/components';

export default function HomePage() {
  return (
    <>
      <Banner showSponsored isAutoplay images={BANNER_IMG} height={250} />
      <Services />
      <Ad showSponsored banners={AD_IMAGES} />
      <Grid title="On Sell" buttonTitle="All" withHorizontalScroll>
        {SELL_IMG.map((sell) => (
          <SellCard key={sell} imgUrl={sell} />
        ))}
      </Grid>
      <Grid>
        {[...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT, ...PRODUCT].map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Grid>
    </>
  );
}

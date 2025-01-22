import React from 'react';
import { Slider } from '@/components';
import { AD_IMAGES } from '@/_mocks_';

const Product = () => (
        <div>
            <Slider images={AD_IMAGES} />
        </div>
);

export default Product;

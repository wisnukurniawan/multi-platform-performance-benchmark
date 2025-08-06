import "./index.scss"; 
import type Product from './data.js';
import { productsData } from './data.js';
import { useEffect, useRef } from "@lynx-js/react";

const ProductGrid = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      console.log("AppLaunch: JS First Render (useEffect mount): " + Date.now() + " ms");
    }
  }, []);

  const products: Product[] = productsData.data.Products;

  return (
    <view className="product-wrapper" >
      <list
        className="list"
        list-type="waterfall"
        column-count={2}
        scroll-orientation="vertical"
        custom-list-name="list-container"
      >
        {products.map((item: Product, index: number) => (
          <list-item
            item-key={"" + index}
            key={"" + index}
          >
             <view className="product-card">
              <view className="product-image-container">
                <image
                  className="product-image"
                  src={item.MainImageUrl}
                />
              </view>

              <text className="brand-text">{item.Brand}</text>
              <text className="name-text">{item.Name}</text>
              <text className="price-text">{item.Price}</text> */
            </view>
          </list-item>
        ))}
      </list>
    </view>
  );;
};

export default ProductGrid;
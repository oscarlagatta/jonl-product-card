# JONL-Product-Card

This is a POC for deploying a React component to NPM

### Oscar Lagatta

## Sample

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jonl-product-card'
```

```
<ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, isMaxCountReached, count, maxCount, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
</ProductCard>
```
import { useFilter } from "../Filter Display/filterContext";
import { ProductCard } from "../Product Card/productCard";

export const ProductDisplay = () => {
  const { finalProducts } = useFilter();
  return (
    <div className="cont-prod">
       { finalProducts && finalProducts.map((product) => {
        return (
          <div >
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

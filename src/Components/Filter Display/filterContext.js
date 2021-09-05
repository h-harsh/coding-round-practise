import { filterReducer } from "./filterReducer";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
// Fetch products from json
  const getData = () => {
    fetch("productsData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setProducts(myJson.productData);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [state, dispatch] = useReducer(filterReducer, {
    price: null,
    size: null,
    idealFor: null,
    brand: null,
  });

  const sortByPrice = (allProducts, state) => {
    if (state.price) {
      if (state.price === "LOW_TO_HIGH") {
        return allProducts.sort((a, b) => a.price - b.price);
      } else if (state.price === "HIGH_TO_LOW") {
        return allProducts.sort((a, b) => b.price - a.price);
      }
    } else return allProducts;
  };
  const sortBySize = (allProducts, state) => {
    if (state.size) {
      return allProducts.filter((prod) => prod.size === state.size);
    }
    return allProducts;
  };

  const sortByIdeal = (allProducts, state) => {
    if (state.idealFor) {
      return allProducts.filter((prod) => prod.idealFor === state.idealFor);
    }
    return allProducts;
  };

  const sortByBrand = (allProducts, state) => {
    if (state.brand) {
      return allProducts.filter((prod) => prod.brand === state.brand);
    }
    return allProducts;
  };

  const sortedByPrice = sortByPrice(products, state);
  const sortedBySize = sortBySize(sortedByPrice, state);
  const sortedByIdealFor = sortByIdeal(sortedBySize, state);
  const finalProducts = sortByBrand(sortedByIdealFor, state);

  return (
    <FilterContext.Provider value={{ finalProducts, state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};

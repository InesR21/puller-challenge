import { useState, useEffect } from "react";
import { getProducts } from "../api/product-service";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productBackup, setProductBackup] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const respode = await getProducts();
    if (respode) {
      setProducts(respode);
      setProductBackup(respode);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, productBackup, loading, setProducts };
};

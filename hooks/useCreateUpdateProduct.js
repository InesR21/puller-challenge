import { useState } from "react";
import { postProduct, putProduct } from "../api/product-service";

export const useCreateUpdateProduct = (updateProduct) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productCreated, setProductCreated] = useState({});

  const handleCreateProduct = async (data) => {
    setLoading(true);
    let responde;
    if (updateProduct) {
      responde = await putProduct(data.id, data);
    } else {
      responde = await postProduct(data);
    }
    if (responde.error) {
      setError(responde.error);
    } else {
      setProductCreated(responde);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return { loading, error, productCreated, handleCreateProduct };
};

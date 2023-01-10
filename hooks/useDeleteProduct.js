import { useState } from "react";
import { deleteProduct } from "../api/product-service";

export const useDeleteProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productDeleted, setProductDeleted] = useState({});

  const handleDeleteProduct = async (id) => {
    setLoading(true);
    const responde = await deleteProduct(id);
    if (responde.error) {
      setError(responde.error);
    } else {
      setProductDeleted(responde);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return { loading, error, productDeleted, handleDeleteProduct };
};

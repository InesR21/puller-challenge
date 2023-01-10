import { useEffect, useState } from "react";

export const useFilter = (setProducts, productBackup) => {
  const [searchValue, setSearchValue] = useState("");
  const [seeFilters, setSeeFilters] = useState(true);

  const handleFilter = (category) => {
    if (category === "all") {
      setProducts(productBackup);
    } else {
      const filteredProducts = productBackup.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    }
  };

  const handleSearch = () => {
    if (searchValue === "") {
      setProducts(productBackup);
      return;
    }
    const filteredProducts = productBackup.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue]);

  return {
    setSearchValue,
    seeFilters,
    setSeeFilters,
    handleFilter,
  };
};

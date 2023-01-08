export const formatCurrency = (amount) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const backgroundColors = {
  electronics: "#b2f5ea",
  jewelery: "#bee3f8",
  mensClothing: "#e9d8fd",
  womensClothing: "#fed7e2",
  all: "#e1e5e9",
};

export const getBackgroundColor = (category) => {
  if (category === "men's clothing") {
    category = "mensClothing";
  } else if (category === "women's clothing") {
    category = "womensClothing";
  }
  return backgroundColors[category];
};

export const textColor = {
  electronics: "#285e61",
  jewelery: "#2c5282",
  mensClothing: "#553c9a",
  womensClothing: "#434190",
  all: "#2d3748",
};

export const getTextColor = (category) => {
  if (category === "men's clothing") {
    category = "mensClothing";
  } else if (category === "women's clothing") {
    category = "womensClothing";
  }
  return textColor[category];
};

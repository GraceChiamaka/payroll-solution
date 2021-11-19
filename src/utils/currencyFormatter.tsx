export const formatCurrency = (amount: number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  }).format(amount);
};

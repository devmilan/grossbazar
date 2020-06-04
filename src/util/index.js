export const getPercentage = (mrp, sellingPrice) => {
  const percentage = ((mrp - sellingPrice) / (mrp)) * 100;
  if (percentage > 0) {
    return Math.ceil(percentage)
  }
  return null;
};

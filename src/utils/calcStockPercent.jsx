export const getStockPercent = (available, total) => {
  if (!total) return 0;
  return Math.round((available / total) * 100);
};
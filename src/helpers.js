export const sortBy = (key, order = "asc") => (a, b) => {
  if (a[key] < b[key]) return order === "asc" ? -1 : 1;
  if (a[key] > b[key]) return order === "asc" ? 1 : -1;
  return 0;
};

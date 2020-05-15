import items from "../data/items.json";

/**
 * Load the local JSON "products" and sort it alphabetically per "name" field
 */
export const loadItems = () => {
  const products = [...items];
  return products.sort((a, b) =>
    // uppercase to ignore case
    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
  );
};

/**
 * Get the filter string and filter the list
 * @param {text} string the string filter inserted by the user
 */
export const filterProducts = (text) => {
  const initialList = loadItems();
  // if input is empty string, it means the user has previously inserted a filter and then delete it
  if (!text || text === "") {
    return initialList;
  }
  const filtered = initialList.filter(
    (product) =>
      product.name.toUpperCase().includes(text.toUpperCase()) ||
      product.description.toUpperCase().includes(text.toUpperCase())
  );
  return filtered;
};

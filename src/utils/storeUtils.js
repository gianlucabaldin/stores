import stores from "../data/stores.json";

/**
 * Load the local JSON "stores" and filter by productId chosen in homepage
 * (Products), and passed through react-router-dom's state within the <Link>
 *
 * @param {productId} productId the chosen productId
 */
export const loadStores = (productId) => {
  const storeList = [...stores];
  return storeList.filter((store) =>
    store.items.some(
      (product) => product.id === productId && product.qty < product.minQty
    )
  );
};

/**
 * Get the filter string and filter the list
 * @param {text} string the string filter inserted by the user
 */
/*
export const filterProducts = (text) => {
  const initialList = loadStores();
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
};*/

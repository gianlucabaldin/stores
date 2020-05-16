import stores from "../data/stores.json";

/**
 * Load the local JSON "stores" and filter by productId chosen in homepage
 * (Products), and passed through react-router-dom's state within the <Link>
 * @param {productId} productId the chosen productId
 */
export const loadStores = (productId) => {
  const storeList = [...stores];
  const filtered = storeList.filter((store) =>
    store.items.some(
      (product) => product.id === productId && product.qty < product.minQty
    )
  );
  return sortByDistance(filtered, productId);
};

/**
 * Get the filter string and filter the list
 * @param {array} storeList the string filter inserted by the user
 * @param {number} productId the productId to filter by
 */
const sortByDistance = (storeList, productId) => {
  const orderedByDistance = storeList.sort((a, b) => {
    if (a.distance === b.distance) {
      // if same distance, sort by items[i].qty
      return sortByQuantity(a.items, b.items, productId);
    }
    return a.distance > b.distance ? 1 : -1;
  });
  return orderedByDistance;
};

/**
 * Compare two arrays and sort them by their field item[i].qty
 * @param {array} itemsStoreA storeA's items
 * @param {array} itemsStoreB storeB's items
 * @param {number} productId the productId to filter by
 */
const sortByQuantity = (itemsStoreA, itemsStoreB, productId) => {
  let order = 1;
  itemsStoreA.forEach((itemA) => {
    itemsStoreB.forEach((itemB) => {
      if (itemA.id === productId && itemB.id === productId) {
        order = itemA.qty > itemB.qty ? 1 : -1;
        return;
      }
    });
  });
  return order;
};

/**
 * Find the store with the selected product and calculate the difference
 * @param {number} productId the productId to filter by
 * @param {number} storeId the storeId to filter by
 */
export const getCountItems = (productId, storeId) => {
  let quantity;
  const store = stores.find((store) => store.id === storeId);
  store.items.forEach((item) => {
    if (item.id === productId) {
      quantity = item.minQty - item.qty;
      return;
    }
  });
  return quantity;
};

const MEMORY_STORAGE = {};

const ADD_TO_CART_KEY = 'gb_cart';


export const addToCart = (data) => {
  const stringifyData = JSON.stringify(data);
  MEMORY_STORAGE[ADD_TO_CART_KEY] = stringifyData;
  localStorage.setItem(ADD_TO_CART_KEY, stringifyData);
};

export const getFromCart = () => {
  const data = MEMORY_STORAGE[ADD_TO_CART_KEY] ? MEMORY_STORAGE[ADD_TO_CART_KEY] : localStorage.getItem(ADD_TO_CART_KEY);
  if (!data) return null;
  return JSON.parse(data);
};

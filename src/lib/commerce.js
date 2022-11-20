import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);

// we are passing an argument 'true' because it is going to create a new commerce store.

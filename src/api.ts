import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get("/products.json");
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

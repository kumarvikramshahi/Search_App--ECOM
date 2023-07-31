import { faker } from '@faker-js/faker';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Function to generate product data
export const GenerateFakeProductData = (numProducts: number): Product[] => {
  const products: Product[] = [];

  for (let i = 0; i < numProducts; i++) {
    const product: Product = {
      id: i + 1,
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      description: faker.commerce.productDescription(),
    };

    products.push(product);
  }

  return products;
}

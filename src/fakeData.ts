import { faker } from "@faker-js/faker";
import { LatestTrends, Product } from "./types/product";

// Function to generate product data
export const GenerateFakeProductData = (numProducts: number): Product[] => {
	const products: Product[] = [];

	for (let i = 0; i < numProducts; i++) {
		const product: Product = {
			id: i + 1,
			title: faker.commerce.productName(),
			price: Number(faker.commerce.price()),
			description: faker.commerce.productDescription(),
			category: "sd",
			image: "sdf"
		};

		products.push(product);
	}

	return products;
};

export const LatestTrendsData: LatestTrends[] = [
	{
		image: "https://img.freepik.com/free-photo/vertical-full-length-picture-isolated-image-charming-european-teenage-girl-wearing-stylish-summer-clothes_343059-3431.jpg?w=2000",
		shortDescription: "Shirt with puffed sleeves"
	},
	{
		image: "https://i.pinimg.com/originals/4e/69/13/4e6913d73c2bdc65f1c212c090c87399.jpg",
		shortDescription: "Linen Jumpsuit"
	},
	{
		image: "https://www.dapperconfidential.com/wp-content/uploads/2018/08/Vertical-Songzio-e1565809755575.jpg.webp",
		shortDescription: "White formal suit"
	},
	{
		image: "https://i.pinimg.com/1200x/39/82/db/3982db516009aa31fb8624e53370f8bb.jpg",
		shortDescription: "Pattern dresses"
	},
	{
		image: "https://images.indulgexpress.com/uploads/user/ckeditor_images/article/2020/8/20/SN.jpg",
		shortDescription: "Leather dresses"
	}
];

export const PopularSuggestions: string[] = ["Stripped shirt dress", "Satlin shirts", "Denim Jumpsuit", "Leather dresses", "Solid tshirts"];

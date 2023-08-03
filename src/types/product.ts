export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: number;
	originalPrice: number;
}

export interface ProductCardStyle {
	width: string;
	margin: string;
}

export interface LatestTrends {
	image: string;
	shortDescription: string;
}

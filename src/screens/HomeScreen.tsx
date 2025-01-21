import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { getProduct } from "../services/productService";
import { StoreItem } from "../models/StoreItem";

const HomeScreen = () => {
	const [products, setProducts] = useState<StoreItem[]>([]);
	const fetchProducts = async () => {
		try {
			const data = await getProduct();
			setProducts(data);
			console.log(data, "is the data i got from model");
		} catch {
			console.log("error error");
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		console.log(products, "is the product after we get setting the product");
	}, [products]);
	return (
		// <div className="flex flex-wrap justify-center h-[calc(100vh-100px)]  bg-[#140d07]">
		<div className="flex flex-wrap justify-center h-[100%]  bg-[#140d07] pb-[50px]">
			{products.map((item) => (
				<ItemCard storeItem={item} />
			))}
		</div>
	);
};

export default HomeScreen;

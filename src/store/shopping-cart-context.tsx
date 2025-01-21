import React, { ReactNode } from "react";
import { createContext, useState } from "react";
import { StoreItem } from "../models/StoreItem";

type CartItem = StoreItem & {
	count: number;
};

type CartContextType = {
	items: CartItem[];
	addItem: (item: StoreItem) => void;
	removeItem: (item: CartItem) => void;
	totalPrice: number;
};
export const CartContext = createContext<CartContextType>({
	items: [],
	addItem: () => {},
	removeItem: () => {},
	totalPrice: 0,
});

type CartContextProviderProps = {
	children: ReactNode; // Type for children prop
};

const CartContextProvider: React.FC<CartContextProviderProps> = ({
	children,
}) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const handleAdd = (item: StoreItem) => {
		setCartItems((prev) => {
			const existingItemIndex = prev.findIndex(
				(cartItem) => cartItem.id === item.id
			);
			if (existingItemIndex !== -1) {
				// Update the count for the existing item
				const updatedCart = [...prev];
				updatedCart[existingItemIndex] = {
					...updatedCart[existingItemIndex],
					count: (updatedCart[existingItemIndex].count || 1) + 1,
				};
				return updatedCart;
			} else {
				// Add the new item with count = 1
				return [...prev, { ...item, count: 1 }];
			}
		});
	};

	const handleRemoval = (item: CartItem) => {
		if (item.count === 1) {
			setCartItems((prev) => {
				const updatedItems = prev.filter((cartItem) => cartItem.id !== item.id);
				return updatedItems;
			});
		} else {
			setCartItems((prev) => {
				const itemIndex = prev.findIndex((cartItem) => item.id === cartItem.id);
				const updatedCart = [...prev];
				updatedCart[itemIndex] = {
					...updatedCart[itemIndex],
					count: updatedCart[itemIndex].count - 1,
				};
				return updatedCart;
			});
		}
	};

	// const handleTotal = (items: CartItem[]) => {
	// 	const lengthArray = items.length;
	// 	let total = 0;
	// 	for (let i = 0; i < lengthArray; i++) {
	// 		total = total + items[i].price * items[i].count;
	// 	}
	// 	return total;
	// };

	// Calculate total price from cartItems
	const totalPrice = cartItems.reduce(
		(acc, item) => acc + item.price * item.count,
		0
	);

	const ctxValue = {
		items: cartItems,
		addItem: handleAdd,
		removeItem: handleRemoval,
		totalPrice,
	};
	return (
		<CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
	);
};

export default CartContextProvider;

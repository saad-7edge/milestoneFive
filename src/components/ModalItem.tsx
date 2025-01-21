import React from "react";
import { StoreItem } from "../models/StoreItem";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

type ModalItemProps = {
	item: StoreItem & { count: number };
};

function ModalItem({ item }: ModalItemProps) {
	const cartCtx = useContext(CartContext);
	return (
		<div className="bg-gray-400 flex justify-between m-[5px] items-center h-[50px] rounded-md p-2">
			<h1 className="overflow-auto whitespace-nowrap w-[70%]">{item.title}</h1>
			<h1 className="">${item.price}</h1>
			<div className="flex items-center">
				<i
					className="fa-solid fa-minus text-[12px] cursor-pointer"
					onClick={() => {
						cartCtx.removeItem(item);
					}}
				></i>
				<h1 className=" mr-2 ml-2">{item.count}</h1>
				<i
					className="fa-solid fa-plus text-[12px] cursor-pointer"
					onClick={() => {
						cartCtx.addItem(item);
					}}
				></i>
			</div>
		</div>
	);
}

export default ModalItem;

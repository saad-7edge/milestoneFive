import Button from "./Button";
import { StoreItem } from "../models/StoreItem";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

type ItemCardProps = {
	storeItem: StoreItem;
};

const ItemCard = ({ storeItem }: ItemCardProps) => {
	const cartCtx = useContext(CartContext);
	return (
		<div className="h-[75vh] w-[50vh] bg-white p-3 rounded shadow-inner-lg m-[5px]">
			<div className="flex justify-center h-[50%]  ">
				<img src={storeItem.image} className="h-[100%]" />
			</div>
			<div className="h-[50%] relative">
				<h1
					className="flex text-[#e89644] font-custom font-bold text-[25px] whitespace-nowrap overflow-hidden text-ellipsis "
					style={{ display: "block" }}
				>
					{storeItem.title}
				</h1>
				<h1 className="flex text-[#b88756] font-custom text-[15px]">
					${storeItem.price}
				</h1>
				<p className="line-clamp-5 text-black font-custom">
					{storeItem.description}
				</p>
				<div className="absolute bottom-0 flex w-[100%] justify-end">
					<Button
						className="flex h-[40px] w-[125px] bg-[#fab876] items-center justify-between rounded p-5 cursor-pointer"
						title="Add to Cart"
						onClick={() => {
							alert("Item added to cart successfully");
							cartCtx.addItem(storeItem);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;

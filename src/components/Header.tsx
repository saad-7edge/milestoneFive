import Logo from "./../assets/logo.png";
import Button from "./Button";
import { useContext, useState } from "react";
import { CartContext } from "../store/shopping-cart-context";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
import ModalItem from "./ModalItem";

Modal.setAppElement("#root");

const Header = () => {
	const cartCtx = useContext(CartContext);
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
		document.body.style.overflow = "hidden";
	}

	function closeModal() {
		setIsOpen(false);
		document.body.style.overflow = "auto";
	}

	return (
		<div className="flex justify-between bg-[#140d07] sticky top-0 z-50">
			<div className="flex items-center h-[100px] p-5 pl-10 ">
				<img src={Logo} className="h-[40px] w-[70px] " />
				<h1 className="pl-2 text-[#654321] font-custom font-bold text-[25px]">
					WEBSITE
				</h1>
			</div>
			<div className="flex items-center pr-10">
				<Button
					className="flex h-[40px] w-[100px] bg-[#654321] items-center justify-between rounded p-5 cursor-pointer"
					title="Cart"
					onClick={openModal}
				>
					<div className="relative flex items-center">
						<i className="fa-solid fa-cart-shopping relative text-[18px]"></i>
						<div className="absolute -top-2 -right-3 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold h-[16px] w-[16px] rounded-full">
							{cartCtx.items.length}
						</div>
					</div>
				</Button>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
				overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
				className="bg-white rounded-lg p-5 shadow-lg max-w-[600px] w-full"
			>
				{cartCtx.items.length > 0 ? (
					<>
						{cartCtx.items.map((item) => (
							<ModalItem item={item} />
						))}
						<div className="flex justify-end mt-4">
							<h3 className="text-lg font-semibold">
								Total Price: ${cartCtx.totalPrice.toFixed(2)}
							</h3>
						</div>
						<div>
							<div className="flex justify-end mt-[10px]">
								<button
									onClick={closeModal}
									className="h-[40px] w-[100px] bg-slate-200 rounded mr-[5px]"
								>
									Close
								</button>
								<button
									onClick={closeModal}
									className="h-[40px] w-[100px] text-white bg-gray-500 rounded"
								>
									Checkout
								</button>
							</div>
						</div>
					</>
				) : (
					<div className="flex justify-center items-center">
						<h1>Your cart is Empty !!</h1>
					</div>
				)}
			</Modal>
		</div>
	);
};

export default Header;

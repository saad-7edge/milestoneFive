import React from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import CartContextProvider from "./store/shopping-cart-context";

const App: React.FC = () => {
	return (
		<div>
			<CartContextProvider>
				<Header />
				<HomeScreen />
			</CartContextProvider>
		</div>
	);
};

export default App;

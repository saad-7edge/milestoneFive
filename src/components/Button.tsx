import React from "react";

type ButtonProps = {
	className: string;
	title: string;
	children?: React.ReactNode;
	onClick?: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<div className={props.className} onClick={props.onClick}>
			<h1>{props.title}</h1>
			{props.children}
		</div>
	);
};

export default Button;

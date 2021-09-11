import Link from "next/link";
import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {pageSlice, selectPage, useAppDispatch} from "./store";

export const Header: React.FC = ({children}) => {
	const {title, subtitle, counter} = useSelector(selectPage);

	return (
		<div style={{height:'560px', background:"blue" }}>
			<span>Trnag chu</span>
			<span>count: {counter}</span>
            {children}
		</div>
	);
};

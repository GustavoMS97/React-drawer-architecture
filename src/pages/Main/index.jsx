import React from "react";
import "./style.css";
import CustomDrawerContainer from "../../components/CustomDrawerContainer";

const Main = ({ history }) => (
	<CustomDrawerContainer history={history} selected="main" title="Principal">
		<h1>Main</h1>
	</CustomDrawerContainer>
);

export default Main;

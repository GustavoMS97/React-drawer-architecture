import React from "react";
import "./style.css";
import CustomDrawerContainer from "../../components/CustomDrawerContainer";

const Main = ({ history }) => (
	<CustomDrawerContainer
		history={history}
		selected="second"
		title="Secundária"
	>
		<h1>Second</h1>
	</CustomDrawerContainer>
);

export default Main;

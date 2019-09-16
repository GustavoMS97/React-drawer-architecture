import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Second from "./pages/Second";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route exact path="/second" component={Second} />
		</Switch>
	</BrowserRouter>
);

export default Routes;

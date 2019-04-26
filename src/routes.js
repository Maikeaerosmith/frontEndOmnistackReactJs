import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/main';
import Box from './pages/Box';
import Boxes from './pages/Boxes';
import Notification from './pages/Notification';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/box/:id" component={Box} />
			<Route path="/boxes" component={Boxes} />
			<Route path="/notification" component={Notification} />
		</Switch>
	</BrowserRouter>
);

export default Routes;

import { Routes, Route } from 'react-router-dom';
import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { GlobalStyle } from './global.styles';

import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import Checkout from './routes/checkout/checkout.component';

import { checkUserSession } from './store/user/user.action';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
		// eslint-disable-next-line
	}, []);
	return (
		<Fragment>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='shop/*' element={<Shop />} />
					<Route path='auth' element={<Authentication />} />
					<Route path='checkout' element={<Checkout />} />
				</Route>
			</Routes>
		</Fragment>
	);
};

export default App;

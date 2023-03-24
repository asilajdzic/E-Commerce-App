import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CartItem } from './cart.types';

const selectCartReducer = (state: RootState) => state.cart;

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartReducer], (cart) =>
	cart.cartItems.reduce(
		(total: number, cartItem: CartItem) =>
			(total += cartItem.quantity * cartItem.price),
		0
	)
);

export const selectCartCount = createSelector([selectCartReducer], (cart) =>
	cart.cartItems.reduce(
		(total: number, cartItem: CartItem) => (total += cartItem.quantity),
		0
	)
);

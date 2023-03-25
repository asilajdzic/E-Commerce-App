import { useSelector, useDispatch } from 'react-redux';
import { FC } from 'react';

import { CategoryItem } from '../../store/categories/category.types';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import {
	ProductCartContainer,
	Footer,
	Name,
	Price,
	AddButton
} from './product-card.styles';

type ProductCardProps = {
	product: CategoryItem;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCartContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<AddButton
				onClick={addProductToCart}
			>
				Add to cart
			</AddButton>
		</ProductCartContainer>
	);
};

export default ProductCard;

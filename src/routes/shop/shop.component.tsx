import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { fetchCategoriesStart } from '../../store/categories/category.action';

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCategoriesMap = async () => {
			dispatch(fetchCategoriesStart());
		};
		getCategoriesMap();
		// eslint-disable-next-line
	}, []);
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;

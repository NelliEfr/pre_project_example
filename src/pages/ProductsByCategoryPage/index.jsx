import React, { useEffect } from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory } from '../../requests/products';
import { useParams } from 'react-router-dom';
import { changeStatusAction } from '../../store/reducers/productsByCategoryReducer';

export default function ProductsByCategoryPage() {

    const { category_name } = useParams();

    const dispatch = useDispatch();

    const productsByCategoryState = useSelector(store => store.productsByCategory);

    useEffect(() => {
        dispatch(changeStatusAction());
        dispatch(getProductsByCategory(category_name))
    }, []);

    const { status, data } = productsByCategoryState;

  return (
    <div>
        {
            status === 'loading'
            ? 'Products are loading...'
            : <ProductsContainer products={data} />
        }
        
    </div>
  )
}

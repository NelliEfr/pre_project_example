import React, { useEffect, useState } from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/products';
import { filterProductsAction, getCheapProductsAction, sortProductsAction } from '../../store/reducers/allProductsReducer'

export default function AllProductsPage() {

    const allProductsState = useSelector(store => store.allProducts);

    const dispatch = useDispatch();

    useEffect(() => dispatch(getAllProducts), []);

    const sort = e => dispatch(sortProductsAction(e.target.value));

    const [ isChecked, setIsChecked ] = useState(false);
    const handleCheck = () => setIsChecked(!isChecked);
    const handleClick = e => dispatch(getCheapProductsAction(e.target.checked));

    const [ minValue, setMinValue ] = useState(0);
    const [ maxValue, setMaxValue ] = useState(Infinity);

    const handleMinValue = e => setMinValue(e.target.value || 0);
    const handleMaxValue = e => setMaxValue(e.target.value || Infinity);

    useEffect(() => {
      dispatch(filterProductsAction({ min: minValue, max: maxValue }));
    }, [minValue, maxValue]);
    
  return (
    <div>
        <h3>All products:</h3>

        <span>Filter: </span>
        <input type='number' placeholder='min' name='min' onChange={handleMinValue} />
        <input type='number' placeholder='max' name='max' onChange={handleMaxValue} />

        <span>Cheap products: </span>
        <input type='checkbox' checked={isChecked} onChange={handleCheck} onClick={handleClick} />

        <span>Sorted: </span>
        <select onInput={sort}>
          <option value='price_asc'>by price ASC</option>
          <option value='price_desc'>by price DESC</option>
          <option value='title'>by title (A-Z)</option>
        </select>

        <ProductsContainer products={allProductsState} />
    </div>
  )
}

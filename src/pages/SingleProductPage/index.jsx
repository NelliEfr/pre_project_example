import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../requests/products';
import s from './index.module.css';
import { changeSingleProductStatusAction } from '../../store/reducers/singleProductReducer';
import { addProductToCartAction } from '../../store/reducers/cartReducer';

export default function SingleProductPage() {

    let [ count, setCount ] = useState(1);
    const incrCount = () => setCount(++count);
    const decrCount = () => {
      if(count > 1) {
        setCount(--count)
      }
    };

    const { product_id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSingleProduct(product_id));
      dispatch(changeSingleProductStatusAction())
    }, []);

    const singleProductState = useSelector(store => store.singleProduct);

    const { id, image, title, description, price, category } = singleProductState.data;

  return (
    <div className={s.single_product}>
      {
        singleProductState.status === 'loading'
        ? <p>Product info is loading...</p>
        : <div>
            <img src={image} alt={title} />
            <div>
              <h3>{ title }</h3>
              <p>{ description }</p>
              <p>{ price }$</p>
              <span>{ category }</span>
              <div>
                <div onClick={decrCount}>-</div>
                <p>{count}</p>
                <div onClick={incrCount}>+</div>
              </div>
              <button onClick={() => dispatch(addProductToCartAction({ id,image, title, price, count }))}>
                Add to cart
              </button>
            </div>
          </div>
      }
    </div>    
  )
}

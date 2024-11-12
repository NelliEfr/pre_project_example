import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProductToCartAction } from '../../store/reducers/cartReducer';

export default function ProductCard({ id, image, title, price }) {

  const dispatch = useDispatch();

  return (
    <div className={s.card}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>
      </Link>

      <div onClick={() => dispatch(addProductToCartAction({ id, image, title, price, count: 1 }))}>
        Add to cart
      </div>
    </div>
  )
}

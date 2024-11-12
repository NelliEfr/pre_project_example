import React from 'react'
import { RxCross2 } from "react-icons/rx";
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { decrementCountAction, deleteProductFromCartAction, incrementCountAction } from '../../store/reducers/cartReducer';

export default function CartItem({ id, title, image, price, count }) {

    const dispatch = useDispatch();

  return (
    <div className={s.card}>
        <img src={image} alt={title} />
        <p>{ title }</p>
        <p>{ price * count }$</p>
        <div>
            <div onClick={() => dispatch(decrementCountAction(id))}>
              -
            </div>
            <p>{ count }</p>
            <div onClick={() => dispatch(incrementCountAction(id))}>
              +
            </div>
        </div>
        
        <RxCross2 onClick={() => dispatch(deleteProductFromCartAction(id))} />
    </div>
  )
}

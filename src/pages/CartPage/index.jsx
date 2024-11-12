import React, { useEffect } from 'react'
import CartContainer from '../../components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { clearCartAction } from '../../store/reducers/cartReducer';
import OrderForm from '../../components/OrderForm';

export default function CartPage() {

  const cartState = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);
  const totalSum = +cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState))
  }, [cartState]);

  return (
    <div>
      <h2>Cart</h2>
      {
        cartState.length === 0
        ? <p>Your cart is empty...</p>
        : <div>
            <CartContainer cartState={cartState} />
            <button onClick={() => dispatch(clearCartAction())}>
              Clear cart
            </button>
            <p>Items count: {totalCount}</p>
            <p>Total price: {totalSum}$</p>
            <OrderForm />
          </div>  
      }
    </div>
  )
}

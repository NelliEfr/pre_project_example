import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Context } from '../../context';
import { useForm } from 'react-hook-form';
import { sendCart } from '../../requests/cart';

export default function OrderForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { openModalWindow } = useContext(Context);

    const cartState = useSelector(store => store.cart);
    const totalSum = +cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);


    // const sendOrder = e => {
    //     e.preventDefault();

    //     const { name, phone, email } = e.target;

    //     const newOrder = {
    //         name: name.value,
    //         phone: phone.value,
    //         email: email.value,
    //         total: totalSum,
    //         cart: cartState
    //     }

    //     console.log(newOrder);

    //     openModalWindow();

    //     e.target.reset()
    // }

  const sendOrder = data => {
    sendCart({
      ...data,
      total: totalSum,
      cart: cartState
    });

    openModalWindow();

    reset();
  }
  
  const nameRegister = register('name', {
    required: '*The field "Name" is required'
  });

  const phoneRegister = register('phone', {
    required: '*The field "Phone" is required',
    pattern: {
      value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      message: '*Please, enter a valid phone number'
    }
  });

  const emailRegister = register('email', {
    required: '*The field "Email" is required',
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: '*Please, enter a valid email'
    }
  });

  return (
    <form onSubmit={handleSubmit(sendOrder)}>
        <input type='text' placeholder='Name' {...nameRegister} />
        <input type='text' placeholder='Phone number' {...phoneRegister} />
        <input type='text' placeholder='Email' {...emailRegister} />
        <button>Order</button>

        {errors.name && <p>{errors.name?.message}</p>}
        {errors.phone && <p>{errors.phone?.message}</p>}
        {errors.email && <p>{errors.email?.message}</p>}
    </form>
  )
}

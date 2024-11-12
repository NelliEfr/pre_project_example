import React, { useContext } from 'react'
import { RxCross1 } from "react-icons/rx";
import s from './index.module.css'
import { Context } from '../../context';

export default function ModalWindow() {

    const { closeModalWindow, modalActive } = useContext(Context);

    const modalStyles = {
        display: modalActive ? 'flex' : 'none'
    }

  return (
    <div className={s.modal} style={modalStyles}>
        <div>
            <RxCross1 onClick={closeModalWindow} />
            <p>Congratulations!</p>
            <p>Your order has been successfully placed on the website.
            A manager will contact you shortly to confirm your order.</p>
        </div>
    </div>
  )
}

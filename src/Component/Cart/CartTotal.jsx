import React, { useContext } from 'react';
import { Data } from '../Contaxt/Contaxt';
import Title from '../Home/Title';

const CartTotal = () => {
    const {cartPrice} = useContext(Data)
    return (
        <div>
            <div>
                <Title value1={'Cart'} value2={'Total'}/>
            </div>

            <div>
                <div>
                    <p>Subtotal :</p>
                    <p>$ {cartPrice}.00</p>
                </div>
                <hr />
                <div>
                    <p>Delivery Charge :</p>
                    <p>$ 10.00</p>
                </div>
                <hr />
                <div>
                    <p>Total :</p>
                    <p>${cartPrice() === 0 ? 0: cartPrice( ) + 10}.00</p>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
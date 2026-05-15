import React, { useContext } from 'react';
import { Data } from '../Contaxt/Contaxt';
import Title from '../Home/Title';

const CartTotal = () => {
    const {cartPrice} = useContext(Data)
    return (
        <div className='w-125'>
            <div className='my-12'>
                <Title value1={'Cart'} value2={'Total'}/>
            </div>

            <div>
                <div className='flex justify-between text-xl font-semibold items-center py-1 px-3'>
                    <p>Subtotal :</p>
                    <p>$ {cartPrice()}.00</p>
                </div>
                <hr />
                <div className='flex justify-between text-xl font-semibold items-center py-1 px-3'>
                    <p>Delivery Charge :</p>
                    <p>$ 10.00</p>
                </div>
                <hr />
                <div className='flex justify-between text-xl font-semibold items-center py-1 px-3'>
                    <p>Total :</p>
                    <p>${cartPrice() === 0 ? 0: cartPrice( ) + 10}.00</p>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
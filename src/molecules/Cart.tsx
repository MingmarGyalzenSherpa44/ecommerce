import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import CartItem from './CartItem';

export default function Cart({ handleClick }) {


    const { items, totalQuantity, totalAmount } = useSelector((state: RootState) => state.cart);
    console.log(items)
    console.log(totalAmount)
    return (
        <div className='cart-sidebar'>
            <div className="cart-sidebar__title">
                <Text type='h4'>
                    Your Cart
                </Text>
                <Button onClick={handleClick} paddingX='10px' paddingY='10px' width='60px' height='50px'>
                    X
                </Button>
            </div>
            <div className="cart-sidebar__items">
                {
                    items.map(item => <CartItem {...item} />)
                }
            </div>
        </div>
    )
}

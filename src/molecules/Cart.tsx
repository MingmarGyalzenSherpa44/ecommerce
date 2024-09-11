import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

export default function Cart() {

    const { items, totalAmount } = useSelector((state: RootState) => state.cart);
    console.log(items)
    console.log(totalAmount)
    return (
        <div>Cart</div>
    )
}

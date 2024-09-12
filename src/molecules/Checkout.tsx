import Text from '../atoms/Text'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import Button from '../atoms/Button'

export default function Checkout() {

    const { totalQuantity, totalAmount } = useSelector((state: RootState) => state.cart)
    console.log(totalAmount)
    return (
        <div className='checkout'>
            <div className="checkout__detail">
                <div className="checkout__detail__subtotal">
                    <Text type='h5'>
                        Subtotal
                    </Text>
                    <Text type='h6'>
                        ({totalQuantity} items)
                    </Text>
                </div>
                <div className="checkout__detail__total">
                    {totalAmount ? `$${totalAmount.toFixed(2)}` : ""}
                </div>
            </div>

            <Button paddingY='12'>
                <Text type='h6'>
                    CONTINUE TO CHECKOUT
                </Text>
            </Button>

            <Text type='p'>
                Psst, get it now before it sells out.
            </Text>
        </div>
    )
}

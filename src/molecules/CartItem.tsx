import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { useDispatch } from 'react-redux';
import { ICartProduct } from '../interfaces/ICartProduct';
import { addItem, decreaseQuantity, removeItem } from '../features/cart/cartSlice';

export default function CartItem({ id, quantity, title, price, image, totalPrice }: ICartProduct) {


    const dispatch = useDispatch();
    return (
        <div key={id} className='cart-item'>
            <Image src={image} width='70px' height='100px' alt='' />
            <div className="cart-item__detail">
                <div className="cart-item__detail__title">
                    <Text type='h6'>
                        {title}
                    </Text>
                </div>
                <div className="cart-item__detail__price">
                    <Text type='p'>
                        {price}
                    </Text>

                </div>
            </div>
            <div className="cart-item__options">
                <Button onClick={() => dispatch(removeItem({ id }))} width='50px' height='50px' paddingX='10px' paddingY='10px'>
                    <Text type='h5'>
                        X
                    </Text>
                </Button>
                <div className="cart-item__options__quantity">
                    <Button onClick={() => dispatch(decreaseQuantity({ id }))}>
                        <Text type='p'>
                            -
                        </Text>
                    </Button>
                    {quantity}
                    <Button onClick={() => dispatch(addItem(
                        {
                            id,
                            quantity,
                            title,
                            price,
                            image,
                            totalPrice
                        }
                    ))}>
                        <Text type='p'>
                            +
                        </Text>
                    </Button>
                </div>
            </div>


        </div>
    )
}

// id: number;
// quantity: number;
// title: string;
// price: number;
// image: string;
// totalPrice: number;
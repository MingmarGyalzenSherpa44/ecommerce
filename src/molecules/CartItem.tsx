import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { useDispatch } from 'react-redux';
import { ICartProduct } from '../interfaces/ICartProduct';

export default function CartItem({ id, quantity, title, price, image, totalPrice }: ICartProduct) {

    // const dispatch = useDispatch();
    return (
        <div key={id} className='cart-item'>
            <Image src={image} width='50px' height='60px' alt='' />
            <div className="cart-item__detail">
                <div className="cart-item__detail__title">
                    <Text type='h6'>
                        {title}
                    </Text>
                </div>
                <div className="cart-item__detail__price">
                    <Text type='p'>
                        {quantity} x {price} = {totalPrice}
                    </Text>

                </div>
            </div>
            <Button width='50px' height='50px' paddingX='10px' paddingY='10px'>
                <Text type='h5'>
                    X
                </Text>
            </Button>
        </div>
    )
}

// id: number;
// quantity: number;
// title: string;
// price: number;
// image: string;
// totalPrice: number;
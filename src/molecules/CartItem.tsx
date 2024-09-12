import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { useDispatch } from 'react-redux';
import { ICartProduct } from '../interfaces/ICartProduct';

export default function CartItem({ id, quantity, title, price, image, totalPrice }: ICartProduct) {

    // const dispatch = useDispatch();
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
                <Button width='50px' height='50px' paddingX='10px' paddingY='10px'>
                    <Text type='h5'>
                        X
                    </Text>
                </Button>
                <div className="cart-item__options__quantity">
                    <Button>
                        <Text type='p'>
                            -
                        </Text>
                    </Button>
                    {quantity}
                    <Button>
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
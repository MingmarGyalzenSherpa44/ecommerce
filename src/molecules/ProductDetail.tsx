import { useParams } from 'react-router-dom'
import { useGetProductByIDQuery } from '../services/products';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

export default function ProductDetail() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetProductByIDQuery(productId!);

    function handleAddToCart() {
        const cartItem = {
            id: data!.id,
            title: data!.title,
            image: data!.image,
            quantity: 1,
            price: data!.price,
            totalPrice: data!.price,
        };

        dispatch(addItem(cartItem))
    }

    if (isLoading) return "Loading";

    if (error) return "Error"
    return (
        <div className="product-detail">
            <div className="product-detail__image">
                <Image alt='' src={data!.image} width='412px' height='' />
            </div>
            <div className="product-detail__info">
                <Text type='h2'>
                    {data?.title}
                </Text>
                <Text type='h4'>
                    {data?.category}
                </Text>
                <Text type='h5'>
                    ${data?.price.toFixed(2)}
                </Text>
                <Text type='h5'>
                    Rating: {data?.rating.rate} ({data?.rating.count} reviews)
                </Text>
                <div className="product-detail__description">
                    <Text type='h3'>
                        Description
                    </Text>
                    <Text type='p'>
                        {data?.description}
                    </Text>
                    <Button onClick={handleAddToCart}>
                        <Text type='h6'>
                            Add to Card
                        </Text>
                    </Button>
                </div>
            </div>
        </div>
    )
}

import { useParams } from 'react-router-dom'
import { useGetProductByIDQuery } from '../services/products';
import Image from '../atoms/Image';
import Text from '../atoms/Text';

export default function ProductDetail() {
    const { productId } = useParams();

    const { data, isLoading, error } = useGetProductByIDQuery(productId!);

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
                </div>
            </div>
        </div>
    )
}

import { useGetCategoryItemsQuery } from '../services/products'
import { IProductProps } from '../interfaces/IProductProps';
import Text from '../atoms/Text';
import ProductCard from './ProductCard';

export default function Product({ category, title }: IProductProps) {

    console.log(category);
    const { data, error, isLoading } = useGetCategoryItemsQuery(category.toLowerCase());

    console.log(data);

    if (error) return "Error";

    if (isLoading) return "Loading";
    return (
        <div className='products'>
            <div className="products__breadcrumb">
                <Text type='p'>
                    Home / {title}
                </Text>
            </div>
            <div className="products__title">
                <Text type='h3'>
                    {category} & Apparel - New Arrivals
                </Text>
            </div>
            <div className="products__subtitle">
                <Text type='h5'>
                    Featured
                </Text>
            </div>
            <div className="products__list">
                {data?.map(product => <ProductCard key={product.id} id={product.id} category={product.category}
                    description={product.description} image={product.image} price={product.price}
                    rating={product.rating} title={product.title}
                />)}
            </div>
        </div>
    )
}

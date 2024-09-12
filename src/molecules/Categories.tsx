import Text from "../atoms/Text";
import { categoryImages } from "../constants/categoryImages";
import { useGetProductCategoriesQuery } from "../services/products";
import CategoryCard from "./CategoryCard";

export default function Categories() {

    const { data, error, isLoading } = useGetProductCategoriesQuery();

    if (isLoading) return <p>Loading</p>

    console.log(data);

    if (error) return <p>Error</p>
    return (
        <div className='categories'>
            <div className="categories__title">
                <Text type="h4">
                    Shop by Category
                </Text>
            </div>
            <div className="categories__items">
                {
                    data?.map((title) => <CategoryCard key={title} title={title} url={categoryImages[title as keyof typeof categoryImages]} />)
                }
            </div>
        </div>
    )
}

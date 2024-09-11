import { Link } from "react-router-dom";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import { IProduct } from "../interfaces/IProduct";
const ProductCard = (props: IProduct) => {
    const { id, title, price, image } = props;
    return (
        <>
            <Link to={`/products/${id}`}>
                <div className="products__card">
                    <div className="products__card__image">
                        <Image alt="" src={image} height="330" width="392" />
                    </div>
                    <div className="products__card__description">
                        <Text type="p" color="black">
                            {title}
                        </Text>
                        <div className="price">
                            <Text type="p" color="#737373">
                                <span id="linethrough">${price.toFixed(2)}</span>
                            </Text>
                            <Text type="p">${(price - price * 0.3).toFixed(2)}</Text>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};
export default ProductCard;
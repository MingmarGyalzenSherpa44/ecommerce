import Image from "../atoms/Image";
import Text from "../atoms/Text";
interface StoreCardProps {
    city: string;
    name: string;
    image: string;
}

export default function StoreCard({ city, name, image }: StoreCardProps) {
    return (
        <article className="store-card">
            <div className="image">
                <Image alt='' src={image} />
            </div>
            <div className="store-info">
                <Text type="p">{city}</Text>
                <Text type="h5">{name}</Text>
            </div>
        </article>
    )
}




import { advertisements } from "../constants/advertisements";
import AdvertisementCard from "./AdvertisementCard";

export default function Advertisement() {
    return (
        <div className="advertisements">
            {advertisements.map(advertisement => <AdvertisementCard key={advertisement.title} btnTitle={advertisement.btnText} imgSrc={advertisement.imgSrc} title={advertisement.title} />)}
        </div>
    )
}

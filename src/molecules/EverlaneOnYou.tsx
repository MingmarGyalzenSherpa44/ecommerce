import Image from "../atoms/Image";
import Text from "../atoms/Text";

import EvOnYou1Img from '/images/evOnYou1.png';
import EvOnYou2Img from '/images/evOnYou2.png';
import EvOnYou3Img from '/images/evOnYou3.png';
import EvOnYou4Img from '/images/evOnYou4.png';
import EvOnYou5Img from '/images/evOnYou5.png';


export default function EverlaneOnYou() {
    return (
        <div className="everlane-on-you">
            <div className="everlane-on-you__title">
                <Text type="h3">
                    Everlane On You
                </Text>
            </div>
            <div className="everlane-on-you__description">
                <Text type="h6">
                    Share your latest look with #EverlaneOnYou for a chance to be featured.
                </Text>
                <Text type="h6">
                    <span className="underline">
                        Add Your Photo
                    </span>
                </Text>
            </div>
            <div className="everlane-on-you__list">

                <div className="everlane-on-you__card">
                    <Image width="225px" height="225px" alt="" src={EvOnYou1Img} />
                </div>
                <div className="everlane-on-you__card">
                    <Image width="225px" height="225px" alt="" src={EvOnYou2Img} />
                </div>
                <div className="everlane-on-you__card">
                    <Image width="225px" height="225px" alt="" src={EvOnYou3Img} />
                </div>
                <div className="everlane-on-you__card">
                    <Image width="225px" height="225px" alt="" src={EvOnYou4Img} />
                </div>
                <div className="everlane-on-you__card">
                    <Image width="225px" height="225px" alt="" src={EvOnYou5Img} />
                </div>
            </div>
        </div>
    )
}

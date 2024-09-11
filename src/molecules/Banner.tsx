import Text from '../atoms/Text'
import Link from '../atoms/Link'
import Image from '../atoms/Image'

import UsIcon from "../../public/icons/us_logo.svg"

export default function Banner() {
    return (
        <div className='banner'>
            <div>

            </div>
            <div className="banner__text">
                <div className="banner__text--bold">
                    <Text type='p' color='white'>
                        Get early access on launches and offers.
                    </Text> 
                </div>

                <div className="banner__text__link">
                    <Link url='' >
                    <Text type='p' color='white'>
                        Sign Up For Texts &#x2192;
                    </Text>
                    </Link>
                </div>
              
            </div>
            <div className="banner__nation">
                <Image width='' height='' src={UsIcon} alt='country logo'  />
                <div className="banner__nation__title">
                <Text type='p' color='white'>
                    USD
                </Text>
                </div>
               
            </div>
        </div>
    )
}

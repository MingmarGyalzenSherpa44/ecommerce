import { IAdvertisementCard } from '../interfaces/IAdvertisementCard'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import Image from '../atoms/Image'

export default function AdvertisementCard({ title, imgSrc, btnTitle }: IAdvertisementCard) {
    return (
        <div className='advertisement-card'>
            <Image src={imgSrc} alt='' width='430.67px' height='534px' />
            <div className="advertisement-card__title">
                <Text type='h3' color='white'>
                    {title}
                </Text>
            </div>
            <div className="advertisement-card__btn">
                <Button type='primary' paddingX='51.5px' paddingY='12px'>
                    {btnTitle}
                </Button>
            </div>

        </div>
    )
}

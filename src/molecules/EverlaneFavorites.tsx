import Text from '../atoms/Text'
import { everLaneFavorites } from '../constants/everlaneFavorites'
import EverLaneFavoriteCard from './EverLaneFavoriteCard'

export default function EverlaneFavorites() {
    return (
        <div className='everlane-favorite'>
            <div className="everlane-favorite__title">
                <Text type='h4'>
                    Everlane Favorites
                </Text>
            </div>
            <div className="everlane-favorite__sub-title">
                <Text type='h5'>
                    Beautifully Functional. Purposefully Designed. Consciously Crafted.
                </Text>
            </div>
            <div className="everlane-favorite__list">
                {everLaneFavorites.map(item => <EverLaneFavoriteCard src={item.src} title={item.title} price={item.price} subTitle={item.subTitle} />)}
            </div>
        </div>
    )
}

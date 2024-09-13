import Image from '../atoms/Image'
import Text from '../atoms/Text'
import { ICategoryCard } from '../interfaces/ICategoryCard'

export default function CategoryCard({ url, title }: ICategoryCard) {
  return (
    <div className='category-card'>
      <div className="category-card__img">
        <Image alt='img' width='212px' height='263px' src={url} />
      </div>
      <div className="category-card__title">
        <Text type='h6'>
          {title.toUpperCase()}
        </Text>
      </div>

    </div >
  )
}

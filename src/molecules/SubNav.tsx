import Text from '../atoms/Text'

export default function SubNav() {
    return (
        <div className='sub-nav'>

            <div className='sub-nav__item'>
                <Text type="p">
                    Holiday Gifting
                </Text>
            </div>

            <div className="sub-nav__item">
                <Text type="p">
                    New Arrivals
                </Text>
            </div>

            <div className="sub-nav__item">
                <Text type="p">
                    Best-Sellers
                </Text>
            </div>

            <div className="sub-nav__item">
                <Text type="p">
                    Clothing
                </Text>
            </div>

            <div className="sub-nav__item">
                <Text type="p">
                    Tops & Sweaters
                </Text>
            </div>
            <div className="sub-nav__item">
                <Text type="p">
                    Pants & Jeans
                </Text>
            </div>
            <div className="sub-nav__item">
                <Text type="p">
                    Outerwear
                </Text>
            </div>


            <div className="sub-nav__item">
                <Text type="p">
                    Shoes & Bags
                </Text>
            </div>
            <div className="sub-nav__item">
                <Text type="p" color='red'>
                    Sale
                </Text>
            </div>






        </div>
    )
}

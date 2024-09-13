
import HolidayGiftPickImg from '/images/ourHolidayGiftPicks.png'
import CleanerFashionImg from '/images/cleanerFashion.png'
import Text from '../atoms/Text'
import Image from '../atoms/Image'


export default function Picks() {
    return (
        <div className='picks'>

            <div className="picks__card">
                <Text type='h4'>
                    Our Holiday Gift Picks
                </Text>
                <Image alt='' width='505px' height='626px' src={HolidayGiftPickImg} />
                <Text type='h6'>
                    The best presents for everyone on your list.
                </Text>

                <Text type='h6'>
                    <span className='underline'> Read More</span>
                </Text>
            </div>
            <div className="picks__card">
                <Text type='h4'>
                    Cleaner Fashion
                </Text>
                <Image alt='' width='505px' height='626px' src={CleanerFashionImg} />
                <Text type='h6'>
                    See the sustainability efforts behind each of our products.
                </Text>

                <Text type='h6'>
                    <span className='underline'> Learn More</span>
                </Text>
            </div>
        </div>
    )
}
